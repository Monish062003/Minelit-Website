
let signup1_btn=document.getElementById("login_btn1");

let x = function e() {
    let passwordtbx=document.getElementById("password").value;
    let emailtbx=document.getElementById("email").value;

    window.localStorage.setItem("email",emailtbx);
    window.localStorage.setItem("password",passwordtbx);

    function loadScript(src) {
        const script=document.createElement("script");
        script.type="module"
        script.src=src
        document.body.appendChild(script)
    }
    loadScript('signup2.js')
}

try {
    signup1_btn.addEventListener('click', x)
} catch (error) {
    console.log("Error Bypassed 1")
}