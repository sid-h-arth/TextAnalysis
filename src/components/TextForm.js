import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpclick = () => {
    console.log('UpperCase was clicked' + text)
    let ntext = text.toUpperCase()
    setText(ntext)
    props.showalert('coverted to UpperCase','success');
  }
  const handleDownClick = () => {
    console.log("lower case was clicked", +text)
    let mtext = text.toLowerCase()
    setText(mtext)
    props.showalert('coverted to LowerCase','success');
  }
  const handleerase = () => {
    console.log('erase was clicked', +text)
    let ntext = ""
    setText(ntext)
    props.showalert('Text cleared','success');
  }
  const handleOnchage = (event) => {
    console.log('onChange')
    setText(event.target.value)
  }

  const handlecopy = () =>{
    console.log('copy text was clicked');
    var text= document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showalert("copied to clipboard",'success')
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(msg)
    const toggle = document.getElementById('toggle')
    if (toggle.textContent === "Speak") {
      toggle.innerHTML = "Stop"
      props.showalert('Speaking...','success');
    }
    else {
      toggle.innerHTML = "Speak"
      if (toggle.innerHTML === "Speak") {
        window.speechSynthesis.cancel()
      }
    }
  }
  const [text, setText] = useState('')
  return (
    <>
      <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea className="form-control" value={text} onChange={handleOnchage} style={{ backgroundColor: props.mode === 'dark' ? '#27323b' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpclick}>Convert to UpperCase</button>
        <button className='btn btn-danger mx-2' onClick={handleDownClick}>Convert to Lower Case</button>
        <button className='btn btn-secondary' onClick={handleerase}>Clear Text</button>
        <button className='btn btn-success mx-2' id='toggle' onClick={speak}>Speak</button>
        <button className='btn btn-warning' id='toggle' onClick={handlecopy}>Copy to ClipBoard</button>

      </div>


      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h4>Your Text Summary</h4>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>Average time to read : {0.008 * text.split(" ").length} min.</p>
        <h4>Preview</h4>
        <p><i>{text.length>0?text:'Please enter some text in textarea for preview'}</i></p>
      </div>
    </>
  )
}
