import './App.scss';
import { Contact, Carousel, Histories, Home, Navbar, Services, Ws, Politicas} from './Components';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Carousel />
      <Histories />
      <Contact />
      <Politicas />
      <Ws />
    </>
  )
}

export default App
