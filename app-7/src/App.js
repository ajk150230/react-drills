import React from 'react';
import NewTask from './Components/NewTask'
import List from './Components/List'

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      userInput: "",
      savedstates: ['Clean']
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
        <NewTask
        handleaddinputPro={this.handleaddinput}
        pushinputPro={this.pushinput}
        />
        <List 
        savedstatesPro={this.state.savedstates}/>
      </div>
    );
  }
}
export default App;
