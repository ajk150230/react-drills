import React from 'react';
import Todo from './Component/Todo'

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      userInput: "",
      savedstates: []
    }
    this.handleaddinput = this.handleaddinput.bind(this)
    this.pushinput = this.pushinput.bind(this)
  }
  handleaddinput(input){
    this.setState({userInput: input})
  }
  pushinput(){
    this.setState({savedstates:[...this.state.savedstates, this.state.userInput],
    userInput: ""
    })
  }
  render() {
    let list = this.state.savedstates.map((element, index)=>{
      return <p>{element}</p>
    })
    return (
      <div className="App">
        <Todo />
        <input 
        value={this.state.userInput}
        onChange={(e)=>this.handleaddinput(e.target.value)}/>
        <button onClick={this.pushinput}>Add Task</button>
        {console.log(this.state.userInput)}
        {list}
      </div>
    );
  }
}
export default App;
