import React from "react";
import classes from "./App.module.css"
const Button=({symbol,color,settext}) => {
return(
<div onClick={()=>settext(symbol)}>
    <button className={classes.buttonstyle} style={{backgroundColor: color}}>{symbol}</button>
</div>
);
}
export default Button;