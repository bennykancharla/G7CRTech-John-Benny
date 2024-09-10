var fs = require("fs");
var path = require("path");


class SuperExpress {
    constructor(request,response){
        this.request = request;
        this.response = response;
        this.url = this.request.url;
        // this.temp()
        // this.publicDirectory = path.join(__dirname,"static");
        // this.filePath = path.join(this.publicDirectory, this.url);
        // this.extName = path.extname(this.filePath);
        // this.contentMapper={
        //     ".html":{encoding:"utf8", contentType:"text/html"},
        //     ".htm": {encoding:"utf8", contentType:"text/html"},
        //     ".css": {encoding:"utf8", contentType:"text/stylesheet"},
        //     ".js": {encoding:"utf8", contentType:"application/javascript"},
        //     ".json": {encoding:"utf8", contentType:"application/json"},
        //     ".png": {encoding:"", contentType:"image/png"},
        //     ".jpg": {encoding:"", contentType:"image/jpeg"},
        //     ".jpeg": {encoding:"", contentType:"image/jpeg"},
        //     ".gif": {encoding:"", contentType:"image/gif"}
        // }
    }

    temp(){
        this.response.end(`Into the SuperExpress Class url = ${this.url}`)
    }

   async get(getter){
    //    try{
    //         var id = this.url.split("/")[2]
    //         // console.log(request.method);
    //     let result = await getter(id);
    //     this.response.writeHead(200,{ 'Content-Type': 'application/json' });
    //     this.response.end(result);
    //     }catch(e){
    //         this.response.end(e.message)
    //     }
        // frameWorkHandler(this.request,this.response,getter)
      
      if(this.request.url === "/" && this.request.method ==="GET" ){
        getter(this.request,this.response)
      }else {
        this.response.end(`Invlid URL: ${this.url}`)
      }
      
       
    }

    async getMethods(){

    }

    async post(creator){

    }




    // _getUrlQuery(path){
    //     var index = path.indexOf("?");
    //     var queryStrings = null;
    //     if(index>=0){
    //         queryStrings = {}
    //     }

    //     path.substring(index+1).split("&").forEach(str => {
    //         var [key,value] = str.split("=");
    //         queryStrings[key] = value;
    //     })
    //    var url = path.substring(0,index); 
    // //    console.log(queryStrings)
    //     return {url,queryStrings}
    // }

    // async post(request,responsecreator){
    //     try{
    //     // var {url,queryStrings} = this._getUrlQuery(request.url);
    //     //     console.log(queryStrings)
        

    //     // console.log(body)
    //     request.on('end', () => {

    //         request.writeHead(200,{'Content-Type' : 'application/json'});
    //     })
    //     // console.log(creator(request))
    //     var result = await creator(request)
    //     response.end(result);
       
    //     }
    //     catch(e){
    //         response.end(e.message);
    //     }
    // }


}




module.exports = SuperExpress;
