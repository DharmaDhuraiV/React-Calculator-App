import classes from  './App.module.css';
import Button from './Button';
import Input from './Input';
import React,{Component} from 'react';
import * as math from 'mathjs';
class App extends Component {
  state={
    clr : 'rgb(172, 163, 163)',
    text : "",
    result : ""
  }
  settext=(symbol)=>{
    this.setState((prevState)=>{
      return{text:symbol==="DEL"?this.state.text.slice(0,-1):prevState.text+symbol}
    }
    );
  }
  clearall=()=>{
    this.setState(()=>{
      return{ text: "" , result: ""}
    });
  }
  calculate=()=>{
    this.setState(()=>{
      return {result:math.evaluate(this.state.text)}
    }
    );
  }
  render() {return ( 
    <div className="App">
      <header>
        <nav className={classes.topbar}>
        Calculator 
        </nav>
      </header>
      <div className={classes.outer}>
        <Input text={this.state.text} result={this.state.result}/>
        <div className={classes.row}>
        <Button symbol="(" color={this.state.clr} settext={this.settext}/>
        <Button symbol=")" color={this.state.clr} settext={this.settext}/>
        <Button symbol="AC" color={this.state.clr} settext={this.clearall}/>
        <Button symbol="DEL" color={this.state.clr} settext={this.settext}/>
        </div>
        <div className={classes.row}>
        <Button symbol="7" settext={this.settext}/>
        <Button symbol="8" settext={this.settext}/>
        <Button symbol="9" settext={this.settext}/>
        <Button symbol="/" color={this.state.clr} settext={this.settext}/>
        </div>
        <div className={classes.row}>
        <Button symbol="4" settext={this.settext}/>
        <Button symbol="5" settext={this.settext}/>
        <Button symbol="6" settext={this.settext}/>
        <Button symbol="*" color={this.state.clr} settext={this.settext}/>
        </div>
        <div className={classes.row}>
        <Button symbol="1" settext={this.settext}/>
        <Button symbol="2" settext={this.settext}/>
        <Button symbol="3" settext={this.settext}/>
        <Button symbol="-" color={this.state.clr} settext={this.settext}/>
        </div>
        <div className={classes.row}>
        <Button symbol="." settext={this.settext}/>
        <Button symbol="0" settext={this.settext}/>
        <Button symbol="=" settext={this.calculate}/>
        <Button symbol="+" color={this.state.clr} settext={this.settext}/>
        </div>
      </div>
    </div>
  );}
}

export default App;
