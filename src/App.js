import React,{useEffect} from 'react';
import './App.css';
import io from 'socket.io-client';
function App() {
  useEffect(()=>{

    const socket = io('http://localhost:3001');
    socket.on('msg',(data) =>{
      console.log(data);
    })
  },[])
  return (
   <div>
     a
   </div>
  );
}

export default App;
