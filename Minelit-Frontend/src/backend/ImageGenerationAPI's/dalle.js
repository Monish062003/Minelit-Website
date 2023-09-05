//Enter API KEY here
const API_KEY="";
let dalle=(async(inputbox,imagecount)=>{
    if (API_KEY!="") {
        const options={
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "prompt" : inputbox,
                "n": imagecount,
                "size": "1024x1024"
            })
            }
            const response = await fetch('https://api.openai.com/v1/images/generations',options)
            const data = await response.json();
            
            let frontdisplay=require("./others/frontdisplay");
            frontdisplay(data,0);
    } else {
        alert("Use your API KEY in the Code to Make it Work")
    }

});

module.exports=dalle;