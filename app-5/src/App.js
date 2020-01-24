import React from 'react';
import Image from './Components/Image';

class App extends React.Component {
  constructor() {
    super();
    this.state = { cats: 'https://i.redd.it/hwv6tykb1mj01.jpg' }
  }
  render() {
    return (
      <div className="App">
        <Image
          catpictures={this.state.cats} />
      </div>
    );

  }
}

export default App;
