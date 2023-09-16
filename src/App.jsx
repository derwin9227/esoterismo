import './App.scss';
import { About, Carrousel, Histories, Home, Navbar, Services } from './Components';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Carrousel />
      <Histories />
      <About />
    </>
  )
}

export default App
