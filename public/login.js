    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
    import { getAuth , GoogleAuthProvider , signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

    const firebaseConfig = {
        apiKey: "AIzaSyCVaHMmmaN_tLIbE1G4xYoodO7AXWWE_dQ",
        authDomain: "minelitlogin.firebaseapp.com",
        databaseURL: "https://minelitlogin-default-rtdb.firebaseio.com",
        projectId: "minelitlogin",
        storageBucket: "minelitlogin.appspot.com",
        messagingSenderId: "61646284251",
        appId: "1:61646284251:web:33caeb5d67b093c077b3fe"
      };
    firebase.initializeApp(firebaseConfig);

    const app = initializeApp(firebaseConfig);

    try{
    
    // Initialize Firebase
    const auth = getAuth(app);
    
    const provider = new GoogleAuthProvider(app);
    let google_login=document.getElementById("google_login")
    google_login.addEventListener('click',(f)=>{
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    })

    }

    catch(error){
        console.log("Error Bypassed")
    }