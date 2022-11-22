import{useEffect,useState}from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"
import PreLoad from './components/PreLoad'


function App() {
  const [pre,setPre]=useState(true)

  return (
    <div className="">
      {pre &&
      <PreLoad
      setPre={setPre}
      />}
      <Header/>
      <Main
      />
      <Footer/>
    </div>
  )
}

export default App
