const mongoose = require ('mongoose'),
    Schema = mongoose.Schema,
    today = new Date;
    WordSchema = new Schema ({
        word: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            maxlength: 255
        },
        type: {
            type: String,
            trim: true,
            lowercase: true,
            maxlength: 255
        },
        description: {
            type: String,
            trim: true,
            lowercase: true,
            maxlength: 2000,
            default: null
        },
        created_at: {
            type: Date, 
            default: Date.now
        },
        updated_at: {
            type: Date,
            default: Date.now
        }
    });

module.exports = mongoose.model('word', WordSchema);