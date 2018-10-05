const Word = require ('../models/word');

module.exports.controller = (server) => {
    /**
     * Method to upload number of words in DB
     * 
     * @api words
     * @method POST
     */
    server.post ('/words', (req, res) => {
        for (let i = 0; i < (req.body).length; i++) {
            (new Word ((req.body)[i])).save();
        }
        return res.send (200, {status: true, data: 'words successfully saved'});
    });
}