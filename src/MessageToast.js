import React, { useState, useEffect } from 'react';
import { Toast } from 'react-bootstrap';
import io from 'socket.io-client';
import 'bootstrap/dist/css/bootstrap.min.css';

const socket = io('http://localhost:3001');

function ToastComponnet({title,content,time,animation}) {
    const [show,SetShow] = useState(false);
    useEffect(()=>{
        SetShow(true);
    },[]);
    return (
        <div style={{marginBottom:'5px'}}>
            <Toast show={animation === true ? show : true} animation={true}>
                <Toast.Header closeButton={false}> 
                    <strong className="mr-auto">{title}</strong>
                    <small>{time}</small>
                </Toast.Header>
                <Toast.Body>{content}</Toast.Body>
            </Toast>
        </div>
    )
}
export default function MessageToast() {
    const [Data, SetData] = useState([]);

    useEffect(() => {
        socket.removeAllListeners();
        socket.on('data', (recv_data) => {
            SetData(Data.concat(recv_data)); 
        });
    }, [Data])
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',flexDirection:'column'}}>

            {Data.map((v,i) => {
                console.log((i === Data.length - 1));
          return <ToastComponnet key={`data-${i}`} title={v.title} content={v.content} time={v.time} animation={(i === Data.length - 1) ? true : false}/>
 } )}
        </div>
    )
}