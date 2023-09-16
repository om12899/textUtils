import React, { useState } from 'react'

function TextForm(props) {
    const handleUpClick = ()=>{
        console.log(props)
        //console.log("Upper Case Clicked"+text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upper case","success");
    }
    const handleLowClick = ()=>{
        //console.log("Upper Case Clicked"+text)
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleClear = ()=>{
        //console.log("Upper Case Clicked"+text)
        let newText = ""
        setText(newText)
    }

    const handleCopy = ()=>{
        
        navigator.clipboard.writeText(text);
    }

    const handleChange = (event)=>{
        setText(event.target.value)
    }
    const[text, setText] = useState("Enter Text Here");
   // console.log(text);
  return (
    <>
    <div className='container'>
        <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{props.formTitle}</h1>
<div className="mb-3 my-3">
  <textarea className="form-control " style={{backgroundColor: props.mode==='light'?'white' : '#444444', color : props.mode==='dark'?'white': 'black'}} onChange={handleChange} id="exampleFormControlTextarea1" value={text} rows="8"></textarea>
</div>
<button onClick={handleUpClick} className='btn btn-primary mx-1'>Convert to Upper Case</button>
<button onClick={handleLowClick} className='btn btn-primary mx-1'>Convert to Lower Case</button>
<button onClick={handleClear} className='btn btn-primary mx-1'>Clear</button>
<button onClick={handleCopy} className='btn btn-primary mx-1'>Copy</button>
    </div>
    <div className="container my-3">
        <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your Text Summary</h1>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.split(" ").length} words, {text.length} characters</p>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{0.008*text.split(" ").length} mins to read the compelete text</p>
        <h2 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Preview</h2>
        <p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}

export default TextForm
