// 9. 소켓 생성
"use strict" // 변수 선언 엄근진 모드
const socket = io(); // socket 객체 생성;
//console.log(socket);
//console.dir(socket);

//자료형 샘플
const data = {
  "asd": "sesasfafqfqwqwf",
  "asdsad": "asffqfqfqwfqwg"
}
const arr = [1,2,3,4,5];
class Monster {
  constructor(name, hp, att) { 
    this.name = name;
    this.hp = hp; 
    this.att = att; 
  }
}
const monster1 = new Monster("sec",100,10);


// 프론트에서 서버로 소켓 요청
// 11. emit(채팅ID, 자료(객체, 배열, 문자열 등))
socket.emit("chating123", "from front"); // 12.이제 server.js 에서 서버가 소켓통신 받아주는 코드 작성

// 14. 소켓 통신 응답을 받는 코드
socket.on("chating123", (data)=>{
  console.log(data);
})