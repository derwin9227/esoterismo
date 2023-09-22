import './App.scss';
import { Contact, Carousel, Histories, Home, Navbar, Services, Ws} from './Components';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Carousel />
      <Histories />
      <Contact />
      <Ws />
    </>
  )
}

export default App
