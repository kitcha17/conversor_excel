var pdf = require("html-pdf");

module.exports = class PDFWriter{

    static WritePDF(filename,html){
        pdf.create(html,{}).toFile(filename,(err) => {});
    }
}