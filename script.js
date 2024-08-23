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
