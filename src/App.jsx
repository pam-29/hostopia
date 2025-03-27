import './App.css'
import Header from './components/Header'
import Hero from './pages/Hero'
import Hotels from './pages/Hotels'
import Room from './pages/Room'
import Footer from './pages/Footer'

function App() {
  return(
    <div className="App">
      <div>
        <Header/>
        <Hero />
      </div>
        <Hotels />
        <Room />

    </div>
  )
}

export default App
