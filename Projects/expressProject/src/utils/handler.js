// const { request, response } = require("express")

let requestResponseMapper={
    "GET":{
        success:200,
        failure:404
    },
    "POST":{
        success:201,
        failure:400
    },
    "PUT":{
        success:202,
        failure:400
    },
    "DELETE":{
        success:200,
        failure:404
    }
}

function httpHandler(controller){
    // let data=controller()
    return async (request,response) => {
        let statusObj=requestResponseMapper[request.method]
        try{
            let data= await controller(request)
            response.status(statusObj.success).send(data)
        }catch(err){
            // console.log("Inside Error");
            response.status(statusObj.failure).send(err.info);
        }
    }
}

function frameWorkHandler(controller){
    // console.log("Into FrameWork Handler")
    return async (req,res) =>{
        let statusObj = requestResponseMapper[req.method];
        try{
          
            let data = await controller(req);
            // console.log(data)
            res.writeHead(statusObj.success,{ 'Content-Type': 'application/json' });
           res.end(JSON.stringify(data));
        }catch(e){
            res.statusCode = statusObj.failure
             res.end(e.message);
        }
        //  res.end("Into Handler")
    }
}



module.exports={httpHandler ,frameWorkHandler}  