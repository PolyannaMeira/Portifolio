
import GlobalStyles from '../src/styles/globalStyles';
import Header from './Componentes/Header/Header';
import About from './Componentes/About/About';
import Technologies from './Componentes/Technologies/Technologies';
import Certificates from './Componentes/Certificate/Certificates';
import Projects from './Componentes/Projects/Projects';
import Footer from './Componentes/Footer/Footer';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <About />
        <Technologies />
        <Projects />
        <Certificates />
        
      </main>
      <Footer />
    </>
  );
}

export default App;
