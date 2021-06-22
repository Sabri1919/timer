import React from 'react'
import { Button } from 'react-bootstrap'
import './Timer.css'

class Timer extends React.Component {
    state ={
        timer:0,
        stopped:true,
        interval: null,  
    }

    compt = () => {
        this.setState({ timer : this.state.timer + 1 });
    }



    checkButton =() => {
        this.setState({
            stopped : !this.state.stopped
        });
        console.log(this.state.stopped)
        this.startTimer();
    }
// fonction start
    startTimer =() => {
        this.state.stopped ?
        this.interval = setInterval(this.compt,1000) : 
        clearInterval(this.interval)
    
	}


// // fonction stop
//     stopTimer = () =>{
//         this.interval = setInterval(this.setState({timer:this.state.timer, stopped:true, word:"false"}));
//     }

// fonction reset
    resetTimer = () =>{
        this.setState({timer:0, stopped:true});
        clearInterval( this.interval );
        
    }


    render() {
        console.log("Component render")
        return (
            <div>
                <h1>{this.state.timer}</h1>
                <div className="timerContent">
                    {
                        this.state.stopped ?
                        <Button variant="secondary" onClick={this.checkButton}>start</Button> :
                        <Button variant="secondary" onClick={this.checkButton}>stop</Button>
                    }
                    <Button variant="secondary" onClick={this.resetTimer}>Reset</Button>
                </div>
            </div>
        )
    }
}

export default Timer
