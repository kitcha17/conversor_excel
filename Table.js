module.exports = class Table{

    constructor(arr){
        this.header = arr[0]; //cabeçalho pega primeir alinha
        arr.shift(); //funcao que remove primeira posicao do array
        this.rows = arr; //restante dos dados
    }

    get RowCount(){
        return this.rows.length;
    }

    get ColumnCount(){
        return this.header.length;
    }

}
