
module.exports = class Processor{

    static Process(data){
        var a = data.toString().split("\r\n"); //separa em um array de linhas por quebra de linha
        var rows = [];

        a.forEach(row => {
           var arr = row.split(",");  // cada linha vira um array separado por vírgula
           rows.push(arr);

        });
        return rows;
    }

}

