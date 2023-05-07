import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import Nav from './components/Nav'
import About from './components/About'
import Service from './components/Service'
import Work from './components/Work'
import Contact from './components/Contact'


function App() {
  
  return (
    <>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <section>
          <Header />
        </section>
        
        <section id='home'>
          <Banner  />
        </section>

        <section>
          <Nav />
        </section>

        <section id='about' >
          <About />
        </section>

        <section id='service'>
          <Service />
        </section>

        <section id='work'>
          <Work />
        </section>

        <section id='contact'>
          <Contact />
        </section>    
        
        <div className='h-[4000px]'></div>
      </div>
    </>
  )
}

export default App
