const  databaseURL=
"https://chat-dbd9c-default-rtdb.europe-west1.firebasedatabase.app";

let userName = null;

function displayMessage (data) {
console.log("new message", data)
    let template = 
    `<div class="chatBubble ${data.userName === userName? "self": "other"}">
        <div class="userName">${data.userName}</div>
        <div class="message">${data.message}</div>
        <div class="time">${data.date}</div>
  </div>
  `;
    document.querySelector("#chat").insertAdjacentHTML("beforend", template)
}

function startChat() {
  let name = document.querySelector('[name="name"]').value;
  name = name.trim();
  if (name.length < 3) {
    document.querySelector('[name="name"]').classList.add("error");
  } else {
    document.querySelector('[name="name"]').classList.remove("error");
    userName = name;
    document.querySelector("#signUpForm").classList.add("hidden");
    document.querySelector("#chatContainer").classList.remove("hidden");
    
  }
}
async function addMessage() {
  let message = document.querySelector('[name="chatMessage"]').value;
  message = message.trim();

  let response = await fetch(
    databaseUrl + "/messages" + ".json",
    {
      method: "POST",
      body: JSON.stringify({
        userName: userName,
        message: message,
        date: new Date(),
      }),
    }
  );
}
