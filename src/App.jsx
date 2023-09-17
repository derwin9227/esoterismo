import './App.scss';
import { About, Carousel, Histories, Home, Navbar, Services } from './Components';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Carousel />
      <Histories />
      <About />
    </>
  )
}

export default App
