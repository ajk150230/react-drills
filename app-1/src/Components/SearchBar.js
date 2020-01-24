import React from 'react'


export default class SearchBar extends React.Component{
    constructor(){
        super();
        this.state = {userInput:""};
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        this.setState({userInput: e.target.value})
    }
    render(){
        return(
            <div>
                <h6>{this.state.userInput}</h6>
                <input onChange={(e)=>this.handleChange(e)}/>
            </div>
        )
    }
}