let save=async(req,res)=>{
    const mongoose=require("mongoose");
    mongoose.connect('mongodb+srv://Monish:mmonish875@minelit.vxryvsw.mongodb.net/Login_Signup?retryWrites=true&w=majority').then(()=>{
        console.log("Connected Successfully")
    }).catch((error)=>{
        console.log(error)
    })

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
}

module.exports={
    save:save
}