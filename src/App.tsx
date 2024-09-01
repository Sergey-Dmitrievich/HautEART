import './App.css'
import About from './components/about/about'
import Paints from './components/paints/paints'
import {Routes, Route, Link} from 'react-router-dom'
import { paintsContext } from './contexts/paintsContexts'
import { paintsMassiv } from './contexts/paintsMassiv'
import { useState } from 'react'
import Home from './components/home/home'



function App() {
  const [grad, setGrad] = useState("linear-gradient(to right, #2a1641, #7b40be, #2c1744) fixed")
  return (
  <div className='App__main'>
    <paintsContext.Provider value={paintsMassiv}>
    <header style={{ background:grad}}>
      <div className="header__nav" style={{ background:grad}}>
      <div className="header1" style={{ background:grad}}>
        <h1><span>H</span>aut<span>e Art</span></h1>
      </div>
      <div className="header2" style={{ background:grad}} >
      <Link to = "/" onClick={()=>{
        setGrad("linear-gradient(to right, #2a1641, #7b40be, #2c1744) fixed")
      }}>Главная </Link>
      <Link to = "/paints" onClick={()=>{
        setGrad("linear-gradient(to right, black, #3e2061, black) fixed")
      }}>Картины</Link>
      <Link to = "/about" onClick={()=>{
        setGrad("linear-gradient(to right, #2a1641, #7b40be, #2c1744) fixed")
      }}>&nbsp;О нас&nbsp;</Link>
      </div>
      </div>
    </header>
    <main>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/paints" element={<Paints/>}/>
      <Route path = "/about" element={<About/>}/>
    </Routes>
    </main>
    <footer style={{ background:grad}}>
        <p>Для приобретения картины напишите на почту smzr@mail.ru</p>
    </footer>
    </paintsContext.Provider>
  </div>
  );
}

export default App
