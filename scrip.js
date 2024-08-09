let login = document.getElementById("login");
login.addEventListener("submit", (e) => {
  e.preventDefault();

  let users = JSON.parse(firebase.users);

  let email = document.getElementById("username");
  let pw = document.getElementById("password");
  check = false;
  for (index of users) {
    if (index.email == email.value.trim() && index.pw == pw.value.trim()) {
      check = true;
      break;
    }
  }
  // let check = users.map(index => index.email == email.value.trim() && index.pw == pw.value.trim())

  if (check == true) {
    window.location.href = "../trangchu/trangchu.html";
  } else {
    alert("Please input again");
  }
});
