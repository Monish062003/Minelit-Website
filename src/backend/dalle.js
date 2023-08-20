const API_KEY="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";

let promptgenerate=(async(inputbox,imagecount)=>{
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
    console.log(data)

    let divimg1,divimg2,divimg3,divimg4;
    let image1,image2,image3,image4;

    const divimgs=[divimg1,divimg2,divimg3,divimg4];
    const imgs=[image1,image2,image3,image4];
    let count=0;

    for (let index = 0; index < 4; index++) {
        divimgs[index]=document.getElementById(`div${index+1}`);
        imgs[index]=document.getElementById(`image${index+1}`);
    }

    
    data?.data.forEach(element => {
        imgs[count].setAttribute("src",element.url);
        divimgs[count].append(imgs[count]);
        divimgs[count].style.display="block";
        count+=1;
    });

    
    for (let index = count; index < 4; index++) {
        divimgs[index].style.display="none";
    }
    
});

module.exports={
    dalle:promptgenerate,
}