const express = require('express');

const bodyParser = require('body-parser');

const { PORT } = require("./config/serverconfig");
const apiRoutes = require("./routes/index");

const db = require("./models/index");

const app = express();

const prepareAndStartServer = ()=>{

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/api', apiRoutes);

    app.listen(PORT,async ()=>{
        console.log(`Server is running on port ${port}`);
        
    })
}
prepareAndStartServer();