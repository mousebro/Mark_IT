const express = require("express");
var app = express()
app.listen(5050,()=>{
    console.log("listen port 5050")
})
app.use(express.static(__dirname+"/public"))
