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
  return (
    <>

                  {/* Rendering the Header component */}
      <Header />
                  {/* Rendering the Nav component */}
      <Nav />
                  {/* Rendering the About component */}
      <About />
                  {/* Rendering the Experience component */}
      <Experience />
                  {/* Rendering the Services component */}
      <Services />
                  {/* Rendering the Portfolio component */}
      <Portfolio />
                  {/* Rendering the Contact component */}
      <Contact />
                  {/* Rendering the Footer component */}
      <Footer />

    </>
  )
}

export default App