const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const Html= require("./HtmlParser");
const Writer = require("./Writer");
const Pdf = require("./PdfWriter");

async function main(){
    let reader = new Reader();
    let writer = new Writer();
    let data = await reader.Read("./users.CSV");
    let processedData = Processor.Process(data);
    let users = new Table(processedData);
    
    let html = await Html.Parser(users);
    Pdf.WritePdf(Date.now()+".pdf", html);
    writer.Write(Date.now()+".html", html);
}


main();