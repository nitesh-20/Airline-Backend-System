const express = require("express");

const { PORT } = require("./config/serverConfig")
const ApiRoutes = require("./routes/index"); 
const setupAndStartServer = async () =>{

    //create the express object
    const app = express();

    app.get("/",(req,res)=>{
        res.send("Hello World");
    })


    app.use('/api', ApiRoutes);
    
    app.listen(PORT, async ()=>{
        console.log(`Server is running on port ${PORT}`);
        // console.log(process.env)
    })
}
setupAndStartServer();