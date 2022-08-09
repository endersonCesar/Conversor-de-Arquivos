let Reader = require('./Reader')
let Processor = require('./Processor')
let Table  = require('./Table')
let HtmlParse = require('./HtmlParse')
let Write = require('./Writer')
let PDFWriter = require('./PdfWriter')



let leitura = new Reader()
let escritor = new Write()
async function main(){
    let dados  = await leitura.Read("./enderson.csv")
    let dadosProcessados = Processor.Process(dados)
    let usuarios = new Table(dadosProcessados)
    let html = await HtmlParse.Parse(usuarios)
    escritor.Write(Date.now()+".html",html)
    PDFWriter.WritePDF(Date.now()+".pdf",html);
}
main();