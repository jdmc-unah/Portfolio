// import reactLogo from './assets/react.svg'

import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {

  return (
    <>
        <div>
          <Header  />
          <section id='services' ><Services/></section>
          <section id='about' ><About /></section>
          <section id='projects'><Projects /></section>
          
          <footer style={{height:50, backgroundColor:window.primary, color: window.custom.white, display:'flex', 
            justifyContent:'center', alignItems:'center'  }  } > 2025 </footer>
        </div>
    </>
  )
}

export default App
