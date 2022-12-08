class Processor{
    static Process(data){
        let stringRows = data.split("\r\n");
        let  rows = [];
        stringRows.forEach(row => {
            let arr = row.split(";");
            rows.push(arr);
        });
        return rows;
    }
}

module.exports = Processor;