//ATTACK OF THE SOBA NOODLES

// Importing React library to use JSX syntax
import React from 'react'

// Importing individual components
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

// Defining app component
const App = () => 
{
  // Returning JSX for the App component
  return 
  (
    <>
        <Header />    //Rendering the Header component
        <Nav/>        //Rendering the Nav component
        <About/>      //Rendering the About component
        <Experience/> //Rendering the Experience component
        <Services/>   //Rendering the Services component
        <Portfolio/>  //Rendering the Portfolio component
        <Contact/>    //Rendering the Contact component
        <Footer/>     //Rendering the Footer component
    </>
  )
}

export default App