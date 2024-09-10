var fs = require("fs");
var path = require("path")



class ReadFile{

    constructor(url){
        this.url = url;
        this.publicDirectory = path.join(__dirname,"public")
        // console.log(this.publicDirectory)
        this.contentTypeObj = {
            '.html': "text/html",
            '.css':"text/css",
            ".js":"application/javascript"
        }
        this.filePath = path.join(this.publicDirectory,this.url)
        // console.log(this.filePath)
        this.extName = path.extname(this.filePath)
        this.contentType = this.contentTypeObj[this.extName];
    }

    temp(){

        return `Into the ReadFile Class, url = ${this.extName}`
    }

    readIntoServer(res,content){
        res.writeHead(200, { 'Content-Type': this.contentType });
        res.end(content, 'utf8');
    }

    getFilePath(){
        return this.filePath;
    }

    getContentType(){
        return this.contentTypeObj[this.extName]
    }

}


module.exports = {
    ReadFile
}