const express = require("express");
const PORT = 8080;
const setupAndStartServer = async () =>{

    //create the express object
    const app = express();

    app.get("/",(req,res)=>{
        res.send("Hello World");
    })

    app.listen(PORT, async ()=>{
        console.log(`Server is running on port ${PORT}`);
    })
}
setupAndStartServer();