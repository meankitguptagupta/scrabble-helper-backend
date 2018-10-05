const Word = require ('../models/word');

module.exports.controller = (server) => {
    /**
     * Method to upload number of words in DB
     * 
     * @api words
     * @method POST
     */
    server.post ('/words', (req, res) => {
        let words = req.body;
        for (let i = 0; i < words.length; i++) {
            (new Word (words[i])).save();
        }
        return res.send (200, {status: true, data: 'words successfully saved'});
    });
}