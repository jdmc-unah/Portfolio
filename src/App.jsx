// import reactLogo from './assets/react.svg'

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {

  return (
    <>
        <div>
          <Header  />
          <section id='services' ><Services/></section>
          <section id='about' ><About /></section>
          <section id='projects'><Projects /></section>
          <Footer/>
        </div>
    </>
  )
}

export default App
