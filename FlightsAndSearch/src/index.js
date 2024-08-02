const express = require("express");
const bodyParser = require ("body-parser");

const {PORT} = require("./config/serverConfig.js");
const ApiRoutes = require ("./routes/index");

const setupAndStartServer = async () => {
    //create the express object .

    const app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.use('/api', ApiRoutes);

    app.listen(PORT , async() =>{
         console.log(`Server is running on port ${PORT}...`);
        //  console.log(process.env)
    } )
}

setupAndStartServer();