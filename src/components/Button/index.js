import React from "react";
import "./button.css"

const Button = ({content}) => {
    return (<div className= {`Button ${content==="0" ? "zeroBtn" : ""}`}><btn>{content}</btn></div>)
}
export default Button;