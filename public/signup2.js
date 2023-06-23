
let signup2_btn=document.getElementById("login_btn2");


let y=function e() {
    let fnametbx=document.getElementById("fname").value;
    let lnametbx=document.getElementById("lname").value;
    let country=document.getElementById("country").value;
    let dob=document.getElementById("dob").value;

    window.localStorage.setItem("fname",fnametbx);
    window.localStorage.setItem("lname",lnametbx);
    window.localStorage.setItem("country",country);
    window.localStorage.setItem("dob",dob);

    function loadScript(src) {
        const script=document.createElement("script");
        script.type="module"
        script.src=src
        document.body.appendChild(script)
    }

    loadScript('signup3.js')
}

//what is redux toolkit


try {
    signup2_btn.addEventListener('click',y)
} catch (error) {
    console.log("Error Bypassed 2")
}