const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const Html= require("./HtmlParser");

let reader = new Reader();

async function main(){
    let data = await reader.Read("./users.CSV");
    let processedData = Processor.Process(data);
    let users = new Table(processedData);
    
    let html = await Html.Parser(users);

    console.log(html);

    
}


main();