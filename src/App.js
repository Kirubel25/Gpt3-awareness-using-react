import React from 'react'

import {Blog,Footer,Features,Header,Possibility,Whatgpt3} from './container'
import { Cta,Brand,Navbar } from './components'

import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradiant__bg'>
            <Navbar/>
            <Header />
        </div>
        <Brand />
        <Whatgpt3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
    </div>
  )
}

export default App