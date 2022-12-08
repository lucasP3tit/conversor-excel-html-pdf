const pdf = require("html-pdf");

class PdfWriter{
    static WritePdf(fileName, html){
        pdf.create(html, null)
        .toFile("./"+fileName, (err, res)=> {
            if(err){
                return console.log("Error: " + err);
            }
            console.log(res);
        });
    }

}

module.exports = PdfWriter;