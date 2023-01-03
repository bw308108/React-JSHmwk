import { Routes, Route } from 'react-router-dom'
import Home from './Routes/Home/Home';
import React from 'react'


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutMe' element={<aboutMe/>}/>
    </Routes>
  )
}

// class App extends Component {
//   constructor(){
//   super()
//   this.state = {
//     'name' : 'Brian'
//   }
// }

// render(){
//   return (
//     <div className="App-title">
//       <p>Hello, this is {this.state['name']}'s Blog  </p>
//     <Navbar bar='Home'/>
//     <Header />
//    <Searchbox/>
//   </div>
// );
// }
// }


export default App;
