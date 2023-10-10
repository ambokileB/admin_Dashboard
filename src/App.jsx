import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

function App() {

  const [opneSidebarToggle,setOpenSidebarToggle] = useState(false);


  const OpenSideBar = ()=>{
    setOpenSidebarToggle(!opneSidebarToggle);
  }

  return (
    <>
      <div className='grid-container'>
        <Header OpenSideBar={OpenSideBar}/>
        <Sidebar opneSidebarToggle={opneSidebarToggle} OpenSideBar={OpenSideBar}/>
        <Home/>

      </div>

    </>
  )
}

export default App
