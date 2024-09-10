

var http = require('http');
var fs = require("fs");
let userController = require("./controllers/user-controller");
// var {authorInfo,  getAllAuthors, getAuthorById,} = require("./authors");

// var {ReadFile} = require("./fileRead");
var SuperExpress = require("./superExpress");
var {frameWorkHandler} = require("./utils/handler");
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
    // if(request.method === "GET" ){
    // superExpress.get(frameWorkHandler(userController.getAllUsers))
    // }
    // switch (request.method) {
    //     case "GET":
    //         superExpress.get(frameWorkHandler(userController.getAllUsers))
    //         break;
    //     case "POST":
    //         superExpress.post(frameWorkHandler(userController.addNewUser))
    //         break
    //     default:
    //         break;
    // }

    superExpress.get(frameWorkHandler(userController.getAllUsers))

});

let port = 2000;
server.listen(port, function (err) {
    if (err) {
        console.error('error', err);
    } else {
        console.log(`Started: http://localhost:${port}`);
    }
});

