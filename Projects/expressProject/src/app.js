let express = require('express');

const userRoute = require("./routes/user-route");


async function createApp() {
    let app = express();
    app.use(express.json());
    app.use("/api/users", userRoute);

    app.use((request,response,next) => {
        console.log(`Recieved Request: ${request.method} ${request.path}`);
        return next();
    })

    return app;
}



module.exports = createApp;