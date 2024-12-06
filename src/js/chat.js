"use strict" // 변수 선언 엄근진 모드
const socket = io(); // socket 객체 생성;
//console.log(socket);
//console.dir(socket);
const userName = document.querySelector(".user-name");
const chattingList = document.querySelector(".chatting-list");
const chattingInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");

// userName.addEventListener("change", onChangeUserName)
// function onChangeUserName(event){
  
//   console.log(userName.value);
// }
sendButton.addEventListener("click", onClickSendButton )
function onClickSendButton(){
  const responseDate = {
    name : userName.value,
    message : chattingInput.value,
  };
  socket.emit("chatroom1", responseDate); 
}

socket.on("chatroom1", (data)=>{
  //console.log(typeof(data));
  console.log(data);
  const li = document.createElement("li");
  li.className = "chat-message";
  li.innerText = `${data.name}:${data.message}`;
  chattingList.appendChild(li);
})







// const uuid = crypto.randomUUID();
// console.log(uuid);

//자료형 샘플
// const data = {
//   "asd": "sesasfafqfqwqwf",
//   "asdsad": "asffqfqfqwfqwg"
// }
// const arr = [1,2,3,4,5];
// class Monster {
//   constructor(name, hp, att) { 
//     this.name = name;
//     this.hp = hp; 
//     this.att = att; 
//   }
// }
// const monster1 = new Monster("sec",100,10);