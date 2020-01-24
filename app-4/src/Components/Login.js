import React from 'react'


export default class Login extends React.Component{
    constructor(){
        super();
        this.state= {username: "",
    password:""}
    this.handleChange = this.handleChange.bind(this)
    this.handleChangePass = this.handleChangePass.bind(this)
    this.handleClick = this.handleClick.bind(this)
    }
    handleChange(userInfo){ this.setState({username: userInfo})}
    handleChangePass(userInfo){ this.setState({password: userInfo})}
    handleClick(){
        alert(this.state.username + " " + this.state.password)
    }
    
    render(){
        return(
            <div>
                <input onChange={ e => this.handleChange(e.target.value)}/>
                <input onChange={ p => this.handleChangePass(p.target.value)}/>
                <button onClick={ this.handleClick}>Login</button>
            </div>
        )
    }
}
