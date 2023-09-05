let frontdisplay=((data,n)=>{
    let divimg1,divimg2,divimg3,divimg4;
    let image1,image2,image3,image4;

    const divimgs=[divimg1,divimg2,divimg3,divimg4];
    const imgs=[image1,image2,image3,image4];
    let count=0;

    for (let index = 0; index < 4; index++) {
        divimgs[index]=document.getElementById(`div${index+1}`);
        imgs[index]=document.getElementById(`image${index+1}`);
    }

    if (n==1) {
        data.forEach(element => {
            imgs[count].setAttribute("src",element);
            divimgs[count].append(imgs[count]);
            divimgs[count].style.display="block";
            count+=1;
        });
    }
    else{
        data?.data.forEach(element => {
            imgs[count].setAttribute("src",element.url);
            divimgs[count].append(imgs[count]);
            divimgs[count].style.display="block";
            count+=1;
        });
    }

    for (let index = count; index < 4; index++) {
        divimgs[index].style.display="none";
    }
    

})

module.exports=frontdisplay;