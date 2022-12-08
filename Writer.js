const fs = require("fs");
const util = require("util");

class Writer{
    constructor(){
        this.writer = util.promisify(fs.writeFile);
    }

    async Write(fileName, contentFile){
        try{
            await this.writer(fileName, contentFile);
            return true;
        }catch(err){
            console.log("An error occurs when try to write the file");
            return false;
        }
        
    }
}

module.exports = Writer;