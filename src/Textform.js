import React from 'react';

import { useState } from 'react';



export default function Textform(props) {
    
    const[data,setdata]=useState('');

    const [mode,setmode]=useState({
        color:'white',
        backgroundColor:'black'
    });

    const [text,settext]=useState('Enable Dark Mode');

    function togglemode(){
        if(mode.color==='white'){
            setmode({
                color:'black',
                backgroundColor:'white'
            })
            settext('Enable Dark Mode')
        }
        else{
            setmode({
                color:'white',
                backgroundColor:'black'
            })
            settext('Enable white Mode')
        }
    }


    function handlechange(e){
        setdata(e.target.value);
    }
    function handleUp(){
        let item=data.toUpperCase();
        setdata(item);
    }
    function handleDown(){
        let item=data.toLowerCase();
        setdata(item);
    }
    function speak () {
        let msg = new SpeechSynthesisUtterance();
        msg.data = data;
        window.speechSynthesis.speak(msg);
    }

   

  return (
    <div style={mode} >
        
        <div>{mode.color}</div>
    <input type="text" placeholder="Enter here" value={data} onChange={handlechange}/><br />
    <button onClick={handleUp}>Uppercase</button>
    <button onClick={handleDown}>Lowercase</button>
    <button type="submit" onClick={speak}>Speak</button>

    <button onClick={togglemode}>{text}</button>

    </div>
  )
}
