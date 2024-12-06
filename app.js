//1. express 라이브러리 호출
const express =require("express"); // require가 자동으로 module에서 조회하여 사용
//2. 변수설정
const app = express();
//3. 서버 경로설정
const path = require("path");
//4. 포트 설정
const PORT = process.env.PORT || 5000;
//console.log("direction : ",__dirname);

// 5. 서버 설정
const http = require("http");
const server = http.createServer(app);

// 7. socket.io 라이브러리 호출
const socketIO = require("socket.io");
// 8. 소켓 변수 설정
const io = socketIO(server); // 9. chat.js에서 프론트 socket 코드 작성

// 6. 서버 생성
app.use(express.static(path.join(__dirname, "src")));
server.listen(PORT, ()=>console.log(`server is running http://localhost:${PORT}`))

// 10.socket 통신 실행 코드
io.on("connection", (socket)=>{
  console.log("연결 확인");
  // 12.프론트로부터 socket 통신 받는 코드
  socket.on("chating123", (data)=>{
    console.log(data);
    // 13. 프론트에 응답하는 코드
    io.emit("chating123", `from server :응답전달 ${data}`); // 14.이제 프론트에서 받는 코드 작성

  })
});