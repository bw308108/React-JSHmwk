import { Component } from 'react';
import Searchbox from './Components/Searchbox1';
import Navbar from './Components/Navbar1';
import Header from './Components/header1';
import './App.css';
import './styles.css'


class App extends Component {
  constructor(){
  super()
  this.state = {
    'name' : 'Brian'
  }
}

  render(){
    return (
      <div className="App-title">
        <p>Hello, this is {this.state['name']}'s Blog  </p>
      <Navbar bar='Home'/>
      <Header />
     <Searchbox/>
    </div>
  );
}
}


export default App;
