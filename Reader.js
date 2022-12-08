const fs = require("fs");
const util = require("util");

class Reader{

    constructor(){
        this.reader = util.promisify(fs.readFile);
    }
    
    async Read(filePath){
        try{
            return await this.reader(filePath, {encoding:"utf-8"})
        }catch(err){
            console.log("An error occurs when try to read the file.");
        }
        
    }
}

module.exports = Reader;