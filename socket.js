const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(cors());

server.listen(3001, () => console.log('Server on 3001'));

io.on('connection',(socket) =>{
    console.log(socket);
    socket.on('msg',(data) =>{
        console.log('data',data);
    })
});

app.post('/message',(req,res)=>{
    console.log({msg:req.body.msg});
    io.emit('msg',{msg:req.body.msg});
    res.json({succ:1});
}
);