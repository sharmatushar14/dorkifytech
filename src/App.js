import React from 'react'
import Navbar from './components/navbar/navbar'
import Brand from './components/brand/brand'
import Footer from './containers/footer/footer'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar/>
        <Brand/>
        
      </div>
      <Footer/>
    </div>

  )
}

export default App
