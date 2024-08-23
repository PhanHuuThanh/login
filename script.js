// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  addDoc,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
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
console.log("1111111");
const db = getFirestore(app);

const products = collection(db, "products");
const querySnapshot = await getDocs(products);
querySnapshot.forEach((doc) => {
  let product = doc.data();
  console.log("🚀 ~ querySnapshot.forEach ~ product:", product)
  document.getElementById("products").innerHTML += `
    <li class="product-item">
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <div class="product-details">
          <div class="product-title">${product.title}</div>
          <div class="product-description">${product.desc}</div>
          <div class="product-price">${product.price}</div>
        </div>
    </li>
        `;
});
// document.querySelector("form").addEventListener("submit", async (event) => {
//   event.preventDefault();

//   const title = document.querySelector("#title").value;
//   // const title2= document.getElementById("title").value;
//   const description = document.querySelector("#description").value;

//   try {
//     const docRef = await addDoc(collection(db, "posts"), {
//       title,
//       description,
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// });

// const querySnapshot2 = await getDocs(collection(db, "users"));
// querySnapshot2.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
