import React, { Component } from 'react';
import Display from './Display';

class Dashboard extends Component {
    state = {
        strike: 0,
        ball: 0,
        foul: 0,
    }

    render() {
        return (
            <>
            <Display bball = {this.state}/>
            <div className = "dashboard">
            <div><button onClick={this.strikeClick}>Strike</button></div>
            <div><button onClick={this.ballClick}>Ball</button></div>
            <div><button onClick={this.foulClick}>Foul</button></div>
            <div><button onClick={this.hitClick} >Hit</button></div>
            <div><button onClick={this.hitClick}>Reset</button></div>
            </div>
            </>
        );
    }

    strikeClick = () => {
        this.setState(prevState => {
            if (this.state.strike < 3){
                return { ...this.state, strike: prevState.strike + 1 }
            } else {
                return {
                    strike: 0, 
                    ball: 0,
                    foul: 0 }
            }
      })
    }

    ballClick = () => {
        this.setState(prevState => {
            if (this.state.ball < 4){
                return { ...this.state, ball: prevState.ball + 1 }
            } else {
                return { 
                    strike: 0,
                    ball: 0,
                    foul: 0 }
            }
        })
    }

    foulClick = () => {
        this.setState(prevState => {
            if (this.state.strike < 2 ){
                return { 
                    ...this.state, 
                    strike: prevState.strike + 1 ,
                    foul: prevState.foul + 1 
                }
            }  else {
                return{
                    ...this.state,
                    strike: 2,
                    foul: prevState.foul + 1
                }
            }
        })
    }

    hitClick = () => {
        this.setState({
            strike: 0,
            ball: 0,
            foul: 0,
        })
    }


}

export default Dashboard;