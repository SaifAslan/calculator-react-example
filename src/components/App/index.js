import React from "react"
import "./App.css"
import Button from "../Button"
function App() {
  const btns = ["AC","±","%","÷","7","8","9","×","4","5","6","-","1","2","3","+","0",",","="];
  return(<div className="App">
    <div className="top">4:43</div>
    <div className="display">0</div>
    <div className="buttons">
    {btns.map(btn=><Button content={btn}/>)}
    </div>
    <div className="botton">-</div>
  </div>)
}

export default App;
