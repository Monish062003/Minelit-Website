//Enter API KEY here
const [API_KEY,url]=["","https://stablediffusionapi.com/api/v3/text2img"];

let stable=(async(input,imagecount)=>{
    if (API_KEY!="") {
        let response= await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                key:`${API_KEY}`,
                prompt:`${input}`,
                samples: `${imagecount}`
            }),
        });        
        let getdata= await response.json();
        getdata= await getdata.output;
        let data=[...getdata]

        let frontdisplay=require("./others/frontdisplay");
        frontdisplay(data,1);
    }
    else{
        alert("Use your API KEY in the Code to Make it Work")
    }
});

module.exports=stable;