const { error } = require("console");
const express=require("express");
const { url } = require("inspector");
const app=express();
const mongoose=require("mongoose");
const bodyParser = require('body-parser');
const nodemailer=require('nodemailer');
const mailing=require('../Minelit-Node/controller/sendmail')
const port=80;
const path=require("path");

app.use(express.urlencoded())
app.set('view engine','pug')
app.set('views',path.join(__dirname,'templates'))
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Monish:mmonish875@minelit.vxryvsw.mongodb.net/Login_Signup?retryWrites=true&w=majority').then(()=>{
    console.log("Connected Successfully")
}).catch((error)=>{
    console.log(error)
})

let main=async()=>{

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'jordyn22@ethereal.email',
            pass: 'HmME2Xvc6SGn6HpU4u'
        }
    });

    // Define and send message inside transporter.sendEmail() and await info about send from promise:
    let info = await transporter.sendMail({
        from: '"Monish 👻" <mayekarmonish875@gmail.com>',
        to: "monish.mayekar@somaiya.edu",
        subject: "Yeahhh",
        html: `
        <b>Great it Working</b>
        `,
    });

    console.log("Message sent: %s", info.messageId);
}
// main()

const userSchema=new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    dob:{
        type:String
    },
    country:{
        type:String
    },
    industry:{
        type:String
    },
    purpose:{
        type:String
    },
})

const model=mongoose.model("Accounts",userSchema);

app.post("/save",async(req,res)=>{
    const [email,password,firstname,lastname,dob,country,industry,purpose]=[req.body.email,req.body.password,req.body.firstname,req.body.lastname,req.body.dob,req.body.country,req.body.industry,req.body.purpose];

    const savedata=await model.create({
        email:email,
        password:password,
        firstname:firstname,
        lastname:lastname,
        dob:dob,
        country:country,
        industry:industry,
        purpose:purpose
    })
    
    res.sendStatus(200);
});

app.post("/check",async(req,res)=>{
    const [email,password]=[req.body.email,req.body.password];
    const finddata=await model.find({
        email:email,
        password:password,
    })

    try {
        if (finddata[0]['email']) {
            console.log(finddata[0]['email'])
            res.sendStatus(200);
        }
    } catch (error) {
        res.sendStatus(400)
    }
})

app.post("/mail",async(req,res)=>{
    const email=req.body.email;
    const finddata=await model.find({
        email:email,
    });
    
    try {
    if (finddata[0]['password']) {
            res.sendStatus(200);
        }
    } catch (error) {
        res.sendStatus(400);
    }
})

app.post("/updatepassword",async(req,res)=>{
    const[email,password]=[req.body.email,req.body.password];

    let passwordchange=await model.updateOne({email:email},{password:password});

    res.sendStatus(200);
})

app.listen(port,()=>{
    console.log(`Listen to port no: http://localhost:${port}/mail`)
});