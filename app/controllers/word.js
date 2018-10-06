const Word = require ('../models/word');

module.exports.controller = (server) => {
    /**
     * Method to upload number of words in DB
     * 
     * @api words
     * @method POST
     */
    // server.post ('/words', (req, res) => {
    //     let words = req.body;
    //     for (let i = 0; i < words.length; i++) {
    //         (new Word (words[i])).save();
    //     }
    //     return res.send (200, {status: true, data: 'words successfully saved'});
    // });

    /**
     * Method to search the words from  DB by condition
     * 
     * @param string start
     * @param string end
     * @param string sets (seperated by comma)
     * @param char restrict (seperated by comma)
     * 
     * @return {"status":true,"data":[{"word":"apiked"}]}
     */
    server.get ('/words', (req, res) => {
        Word.find({ word: {$regex : designQueryRegexp (req.query)}}).select('word -_id').exec((err, data) => {
            if (err)
                return res.send (500, {status: false, errors: err});

            return res.send (200, {status: true, data: data});
        });
    });
}

/**
 * Method to prepere query string or query regexp of search keywords
 * @param Object query 
 * 
 * @return string
 */
function designQueryRegexp (query) {
    let start = query.start || '';
    let end = query.end || '';
    let sets = query.sets ? (query.sets).split(',') : '';
    let restrict = query.restrict ? (query.restrict).split('') : '';

    let regexpCond = '';
    // append stes and optional to design regexp
    for (let i in sets) {
        // append sets in regular expression condition
        regexpCond += "(?=.*" + sets[i] + ")";
    }

    // append optional letter search in condition
    for (let i in restrict) {
        // append sets in regular expression condition
        regexpCond += "(?=.*" + restrict[i] + ")";
    }
    
    // check for regexpCond
    return (start ? ("^" + start + "+") : '') + (regexpCond.trim() ? regexpCond : '.*') + (end ? (".*" + end + "$") : '');
}