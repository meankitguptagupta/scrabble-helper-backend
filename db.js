const mongoose = require ('mongoose');

let options = {
    useNewUrlParser:true, 
    poolSize:2, 
    auth: { 
        user: "scrabble_helper", 
        password: "qwerty12345", 
        dbName: "scrabble_helper" 
    } 
};

// Or using promises
mongoose.connect("mongodb://ds123753.mlab.com:23753", options).then(
    () => { 
      /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
      console.log ("Database successfully connected.");
},
  err => { 
      /** handle initial connection error */ 
        console.info (`Database connection error: ${err}`);
    }
);