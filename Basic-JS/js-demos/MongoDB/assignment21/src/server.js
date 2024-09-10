// var http=require('http');
// // var {getUniqueAuthors} = require("../playground/books3.mongodb");
// var fs = require("fs");


// var {ReadFile} = require("./fileRead");

// var {authorInfo,  getAllAuthors,
//     getAuthorById,} = require("./authors");

// console.log("Welcome to Book's Server");


// var server =http.createServer(async function(req,res){
//     //this function will receive all the requests by the client.
//    var url=req.url;
  

//     if(url.includes(".")){
//        var readFile = new ReadFile(url);

//         const filePath = readFile.getFilePath();
//         // console.log(filePath)
//         fs.readFile(filePath, (err, content) => {

//             if(err){
//                 res.end(err.message)
//             }
//             else {
//                 // console.log(content)
//                 // console.log(contentType)
//                 // res.writeHead(200, { 'Content-Type': contentType });
//                 // res.end(content, 'utf8');
//                 readFile.readIntoServer(res,content);
//             }
//         });
//     }     
//     else{
//         res.statusCode=404;
//         res.end(`NOT FOUND: ${url}`);
//     }

// });

// const port=80

// server.on('error', error=> console.error(`Unable to start the server: ${error.message}`));

// server.listen(port,function(err){
   
//     console.log(`started: http://localhost:${port}/`);
   
// });




/////////////////////////////////////////////////////////////////////////



var http = require('http');
var fs = require("fs");

// var {authorInfo,  getAllAuthors, getAuthorById,} = require("./authors");

// var {ReadFile} = require("./fileRead");
var SuperExpress = require("./superExpress");
// Corrected the typo in serviceObject
// var serviceObject = {
//     "authors": async () => {
//         var result = await getAllAuthors();
//         return JSON.stringify(result);
//     },
//     "author": async (id) => {
//         var result = await getAuthorById(id);
//         return JSON.stringify(result);
//     },
//     "delete": async(id)=>{
//         var result=await deleteAuthorById(id)
//         return JSON.stringify(result)
//     },
//     "post": async(req)=>{
//         let body = "";
//         req.on("data", chunk => {
//             body += chunk.toString();
//         })
//         console.log(body);
//         return JSON.stringify(body);
//     }
// };


var server = http.createServer((request,response)=>{
    var superExpress = new SuperExpress(request,response);

    superExpress.get(() => "Into Getter")

});

let port = 3000;
server.listen(port, function (err) {
    if (err) {
        console.error('error', err);
    } else {
        console.log(`Started: http://localhost:${port}`);
    }
});



    // console.log(` ${property}, ID: ${id}`);
//     if(path.includes(".")){
 
//             var readFile = new ReadFile(path);
      
//              const filePath = readFile.getFilePath();
//              // console.log(filePath)
//              fs.readFile(filePath, (err, content) => {
      
//                  if(err){
//                      res.end(err.message)
//                  }
//                  else {
//                      // console.log(content)
//                      // console.log(contentType)
//                      // res.writeHead(200, { 'Content-Type': contentType });
//                      // res.end(content, 'utf8');
//                      readFile.readIntoServer(res,content);
//                  }
//              });
         
//     }

//    else if (serviceObject[property]) {
//         let result = await serviceObject[property](id);
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(result);

//     }