import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Columins from './pages/Columins'


const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/columins' element={<Columins/>}/>

            </Routes>


        </div>
    )
}

export default App
