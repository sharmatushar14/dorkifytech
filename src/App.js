import React from 'react'
import Navbar from './components/navbar/navbar'
import Brand from './components/brand/brand'
import Footer from './containers/footer/footer'
import Dmac from './containers/dmac/dmac'
import Exploitdb from './containers/exploitdb/exploitdb'
import Header from './containers/header/header'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
        <Brand/>
        <Dmac/>
        <Exploitdb/>
        
      </div>
      <Footer/>
    </div>

  )
}

export default App
