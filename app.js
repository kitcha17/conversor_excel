var Reader = require("./Reader");
var Writer = require("./Writer")
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var PDFWriter = require("./PDFWriter");

var leitor = new Reader();
var escritor = new Writer();

async function main(){

    var dados = await leitor.Read("./users.csv");    //le dados do arquivo
    var dadosProcessados = Processor.Process(dados); //processa e separa em arrays
    var usuarios = new Table(dadosProcessados);      //separa cabecalho dos dados
    var html = await HtmlParser.Parse(usuarios);     //gera o html em forma de texto 

    escritor.Write(Date.now() + ".html", html)       //gera o arquivo .html com a data atual
    PDFWriter.WritePDF(Date.now() + ".PDF",html)     //gera pdf com a data atual
}

main();