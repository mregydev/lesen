
//Declarations
const fs = require('fs');
const readFile = require('util').promisify(fs.readFile);

module.exports = {
    Read: async function (fileName) {
        //use asyc await feature supported since node 7.10.1 as listed in http://node.green/
        //We use this to get rid of callback hell

        //wir benutzen async funktionen denn das ist unterstuzt seit node ver 7.10.1 http://node.green/
        //Wir benutzen das ebenfalls für callback Hölle beseitigen
        if (!fileName) {
            console.log("das ist eine falsches format");
            return;
        }
        try {
            let content = await readFile(fileName);
            console.log(content.toString());
        }
        catch (err) {
            console.log(err.message);
        }
    }

};