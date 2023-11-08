import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  const [opneSidebarToggle,setOpenSidebarToggle] = useState(false);


  const OpenSideBar = ()=>{
    setOpenSidebarToggle(!opneSidebarToggle);
  }

  return (
    <Router>
      <div className='grid-container'>
        <Header OpenSideBar={OpenSideBar}/>
        <Sidebar opneSidebarToggle={opneSidebarToggle} OpenSideBar={OpenSideBar}/>
        <Home/>

      </div>

    </Router>
  )
}

export default App
