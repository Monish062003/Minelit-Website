const express=require("express");
const app=express();
const bodyParser = require('body-parser');
const port= process.env.port || 80 || 57887;
const path=require("path");
const routes=require("./routes/router").router;
const BASE_URL=process.env.BASE_URL || `http://localhost:${port}`;

app.use(express.urlencoded())
app.set('view engine','pug')
app.set('views',path.join(__dirname,'templates'))
app.use(bodyParser.json());

app.post("/save",routes);

app.post("/check",routes);

app.post("/mail",routes);

app.post("/updatepassword",routes);

app.listen(port,()=>{
    console.log(`Listen to port no: ${BASE_URL}/mail`)
});