






let email = document.getElementById('username')
let pw = document.getElementById("password");
let btnRegister = document.getElementById("btnRegister");
console.log(btnRegister);
let register = document.querySelector("#register")
register.addEventListener("submit", (e) => {
    e.preventDefault()


    let lowerCaseLetter = /[a-z]/g
    let upperCaseLetter = /[A-Z]/g
    let numbers = /[0-9]/g

    // let duplicate_email= (email, users)=>{
    //     for (user in users){
    //         if (email == user){
    //             return true
    //         }
    //     }
    //     return false
    // }


    if (email.value.trim().length == 0 && pw.value.trim().length == 0) {
        alert("Please input your username & password")
    }
    else if (email.value.trim().length == 0) {
        alert("Please input your usernam")
    }
    else if (pw.value.trim().length == 0) {
        alert("Please input your password")
    }
    else {
        if (localStorage.users) {
            let users = JSON.parse(localStorage.users)
            users.push({
                username: email.value.trim(),
                pw: pw.value.trim()
            })
            localStorage.setItem("users", JSON.stringify(users))
        } else {
            localStorage.setItem("users",
                JSON.stringify(
                    [
                        {
                            email: email.value.trim(),
                            pw: pw.value.trim()
                        }
                    ]));
        }
        location.replace("login.html")
    }

})
btnRegister.addEventListener('click', () => {

    createUserWithEmailAndPassword(auth, email.value, password.value)

        .then(async (userCredential) => {

            const user = userCredential.user;

            console.log(user);

            await sendEmailVerification(user);

            await updateProfile(auth.currentUser, {

                displayName: username.value,
            });

            await signOut(auth);

            alert("Please verify your email");

            location.href = "./login.html";

        })

        .catch((error) => {

            const errorCode = error.code;

            const errorMessage = error.message;

            console.log(errorCode, errorMessage);

            alert(errorCode);

        });

})
