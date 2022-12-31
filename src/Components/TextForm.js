import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [wordCount,setWordCount]=useState(3 );
  const handleLoClick= () =>{
    let result = text.toLowerCase();
    setText(result);
    props.showAlert("Converted to Lower Case","success");
  }
  const handleUpClick = () => {
    let result = text.toUpperCase();
    setText(result);
    props.showAlert("Converted to Upper Case","success");
  };
  const handleClear = () => {
    setText('');
    props.showAlert("Text Cleared","success");
  };
  const onChangeHandler = (event) => {
    setText(event.target.value);

  };
  return (
    <div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="form-group" >
          <textarea
            style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}}
            className="form-control"
            value={text}
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary my-3" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>
          Clear text
        </button>
      </div>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}} >
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=> element.length!==0).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element)=> element.length!==0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter text in the above box'}</p>
      </div>
    </div>
  );
}
