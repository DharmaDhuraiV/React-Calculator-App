import React from "react";
import classes from "./App.module.css";
const Input=({text,result})=>{
    return(
        <div className={classes.input}>
            <div className={classes.text}>
                {text}
            </div>
            <div className={classes.result}>
                {result}
            </div>
        </div>
    );
}
export default Input;