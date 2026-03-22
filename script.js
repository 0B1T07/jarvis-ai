const API = "https://YOUR-BACKEND.onrender.com";

async function login() {

let email = document.getElementById("email").value;

let res = await fetch(API + "/login", {
method: "POST",
headers: {"Content-Type":"application/json"},
body: JSON.stringify({ email })
});

let data = await res.json();
alert(data.status);
}

async function send() {

let msg = document.getElementById("msg").value;

let res = await fetch(API + "/ask", {
method: "POST",
headers: {"Content-Type":"application/json"},
body: JSON.stringify({ message: msg })
});

let data = await res.json();

document.getElementById("reply").innerText = data.reply;
}