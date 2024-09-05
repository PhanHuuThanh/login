// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6t-mCTJG3nXau-LUJx5TbOcjqsJaCJyg",
  authDomain: "phivutrieudo-f54c0.firebaseapp.com",
  projectId: "phivutrieudo-f54c0",
  storageBucket: "phivutrieudo-f54c0.appspot.com",
  messagingSenderId: "693709761960",
  appId: "1:693709761960:web:b7cabbb5ed93f2eccb019d",
  measurementId: "G-D9PESBNNFZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const email = document.getElementById('email')
const password = document.getElementById("password");


const btnLogin = document.getElementById('btnLogin');
if (btnLogin) {
  btnLogin.addEventListener('click', function () {
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(async (userCredential) => {

        if (!user.emailVerified) {
          signOut(auth);
          throw { code: "Email not verified", message: "" }
        }
        else {
          const user = userCredential.user;
          location.href = "/homepage/index.html";
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  })
}
