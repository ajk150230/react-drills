import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={searches: "",
      foods: [
        'spaghetti',
        'burgers',
        'sandwich',
        'milkshakes'
      ]
    }
    this.filtered = this.filtered.bind(this)
  }
  filtered(findings){
    this.setState({searches: findings})
  }
  render(){
    let foodfilter = this.state.foods.filter((element, index)=>{
      return element.includes(this.state.searches)
    })
    .map((element, index, arr)=> {
      return <h6>{element}</h6>
    })
    return (
    <div className = "App">
      <input onChange={ e => this.filtered(e.target.value)}/>
      {foodfilter}
    </div>
    )
}
}

export default App;