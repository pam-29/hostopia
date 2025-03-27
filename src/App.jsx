import './App.css'
import Header from './components/Header'
import Hero from './pages/Hero'
import Hotels from './pages/Hotels'
import Room from './pages/Room'
import Value from './pages/Valeurs'
import Footer from './components/Footer'


function App() {
  return(
    <div className="App">
      <div id='accueil'>
        <Header/>
        <Hero />
      </div>

      <div id='hotels'>
        <Hotels />
      </div>

        <Room />

      <div id='value'>
        <Value/>
      </div>

      <div id='contact'>
        <Footer />
      </div>
    </div>
  )
}

export default App
