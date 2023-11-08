import React from 'react'
import {BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsGrid3X2GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill,BsBellFill} from 'react-icons/bs'



import { BarChart,LineChart,Line, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Routes,Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Academic } from './Academic';
import { Project } from './Project';
import { Skills } from './Skills';
import { LearningTech } from './LearningTech';
import { NotFound } from './NotFound';
import { Message } from '../components/Dashboard/Message';


function Home() {


  return (
    <main className='main-container'>
     

      <Routes>
        {/* <Route path="/" element={<Dashboard/>} /> */}


        <Route path="/" element={<Dashboard/>} >
            <Route path="/dasboard/message" element={<Message/>} />

        </Route>
        <Route path="/academic" element={<Academic/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/learningTeck" element={<LearningTech/>}/>
        <Route path="*" element={<NotFound/>}/>
        
        
      </Routes>
      


     
    

    </main>
  )
}

export default Home