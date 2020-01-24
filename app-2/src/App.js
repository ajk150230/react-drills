import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      foods: [
        'Spaghetti',
        'Burgers',
        'Sandwich',
        'Milkshakes'
      ]
    }
  }
  render(){
    let list = this.state.foods.map((element, index, arr)=> {
      return <h6>{element}</h6>
    })
    return (
    <div className = "App">
      {list}
      {console.log(list)}
    </div>
    )
}
}

export default App;
