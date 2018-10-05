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
     * @param number optional
     * @param char restrict (seperated by comma)
     */
    server.get ('/words', (req, res) => {
        let query = req.query;
        let condition = {};
        let start = query.start || null;
        let end = query.end || null;
        let sets = query.sets ? (query.sets).split(',') : null;
        let optional = query.optional || null;
        let restrict = query.restrict ? (query.restrict).split(',') : null;

        // design mongoose query on basis or user requirement


        // check for the start condition
        if (start) {
            // impose start words
            // word is index in mongoDB document named words
            condition = {word : {$regex: "^" + start}};
        }

        // check for the end condition
        if (end) {
            
        }


        // Word.find({ word: {$regex : "^" + req.params.username}});

        return res.send (200, {status: true, data: 'words successfully saved'});
    });
}