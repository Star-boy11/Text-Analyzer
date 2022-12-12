import React,{useState} from 'react'

export default function Uppercase(props) {

    const[text, setText] = useState('');
    // text = "newText" // Wrong way to change the state
    // setText(newText) // Correct way to change the state


    const convert = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        console.log("clicked")
    }

    const convert1 = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
      console.log("clicked")
  }

    const ChangeText = (event)=>{
        setText(event.target.value)
    }
  
  return (
    <>
    <div className="container" style={{color:'#ec7979'}}>
      <div className="mb-3">
        <h2>Example textarea</h2>
        <textarea className="form-control" value={text} onChange={ChangeText} style={{backgroundcolour: props.mode==='#00002b'? 'dark': 'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button type="button" className="btn btn-danger mx-1" onClick={convert}>CONVERT TO UPPERCASE</button>
      <button type="button" className="btn btn-danger mx-1" onClick={convert1}>CONVERT TO LOWERCASE</button>
    </div>

    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Number of  characters and words</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
    </div>

    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
} 
