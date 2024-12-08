
const express =require("express"); // require가 자동으로 module에서 조회하여 사용
const app = express();
const path = require("path");
const PORT = process.env.PORT || 5000;
//console.log("direction : ",__dirname);


const http = require("http");
const server = http.createServer(app);

const socketIO = require("socket.io");
const moment = require("moment");

const io = socketIO(server); // 9. chat.js에서 프론트 socket 코드 작성


app.use(express.static(path.join(__dirname, "src")));
server.listen(PORT, ()=>console.log(`server is running http://localhost:${PORT}`))


io.on("connection", (socket)=>{
  console.log("연결 확인");
  socket.on("chatroom1", (data)=>{
    console.log(data);
    const {name, message} = data;
    io.emit("chatroom1", {
      name,
      message,
      time: moment(new Date()).format("h:ss A")
    }); 
  })
});