const dallebtn=document.getElementById("dallebtn");

let promptgenerate=(async()=>{

    const inputbox=document.getElementById("inputpromptbox").value;
    try {
        console.log("Yo");
        const options={
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "prompt" : inputbox,
                "n": 4,
                "size": "1024x1024"
            })
        }
    } catch (error) {
        alert("we have temporarily removed the api key , coz we dont want to waste the tokens,however you all can use you api key and make a const variable below ");
    }
    
    const response = await fetch('https://api.openai.com/v1/images/generations',options)
    const data = await response.json();
    console.log(data)

    const divimg1=document.getElementById("div1");
    const divimg2=document.getElementById("div2");
    const divimg3=document.getElementById("div3");
    const divimg4=document.getElementById("div4");

    const image1=document.getElementById("image1");
    const image2=document.getElementById("image2");
    const image3=document.getElementById("image3");
    const image4=document.getElementById("image4");

    const array1=[divimg1,divimg2,divimg3,divimg4];
    const array2=[image1,image2,image3,image4];

    let index=0;

    data?.data.forEach(element => {
        array2[index].setAttribute("src",element.url);
        array1[index].append(array2[index]);
        index+=1;
    });
});

dallebtn.addEventListener('click',promptgenerate);
