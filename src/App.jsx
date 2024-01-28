import { Container } from "./styles/Layout"
import Nav from "./components/Header/Header"
import Search from "./components/Search/Search"
import OfferSpecial from "./components/OfferSpecial/OfferSpecial"
import About from "./components/About/About"
import Recomendation from "./components/Recomentation/Recomentation"

function App() {


  return (
    <>
      <Container>
        <Nav />
        <Search />
      </Container>
      <OfferSpecial />
      <About />
      <Recomendation />
    </>

  )
}

export default App
