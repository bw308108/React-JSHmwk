import React from 'react'
import Navbar from "../../Components/Navbar1"
import Header from "../../Components/header1"
import Searchbox1 from "../../Components/Searchbox1"
import '../../App.css'
import "../../styles.css"

const Home = () => {
        return (
          <div className="App-title">
        <Navbar bar='Home'/>
        <Header/>
        <Searchbox1/>
      </div>
        )
      }

export default Home