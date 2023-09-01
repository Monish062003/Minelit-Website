let signup3_btn=document.getElementById("login_btn3");

let z=()=>{
    // let industry =document.getElementById("industry").value;
    // let purpose =document.getElementById("purpose").value;
    let emailtbx = window.localStorage.getItem("email")
    let passwordtbx = window.localStorage.getItem("password")
    let dob = window.localStorage.getItem("dob")
    let country = window.localStorage.getItem("country")
    let fnametbx = window.localStorage.getItem("fname")
    let lnametbx = window.localStorage.getItem("lname")
    
    firebase.database().ref("users/").child(emailtbx).set({
        email : emailtbx,
        password : passwordtbx,
        firstname : fnametbx,
        lastname : lnametbx,
        country : country,
        DOB : dob,
    });
}


try{
    signup3_btn.addEventListener('click',z);
}
catch(error){
    console.log("Error Bypassed 4")
}
