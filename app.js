const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");

let reader = new Reader();

async function getDataFile(){
    let data = await reader.Read("./users.CSV");
    let processedData = Processor.Process(data);
    let usuarios = new Table(processedData);
    console.log(usuarios.ColumnsCount);

    
}


getDataFile();