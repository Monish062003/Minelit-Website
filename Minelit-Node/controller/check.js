let check=async(req,res)=>{
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

    const [email,password]=[req.body.email,req.body.password];
    const finddata=await model.find({
        email:email,
        password:password,
    })

    try {
        if (finddata[0]['email']) {
            res.sendStatus(200);
        }
    } catch (error) {
        res.sendStatus(400)
    }
}

module.exports={
    check:check
}