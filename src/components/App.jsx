import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Verify from './Verify'
import Table from './Table'


function App(){
    return(
        <div>
            
            <Router>
                <Routes>
                    <Route path='/' element={<Verify />} />
                    <Route path='/table' element={<Table />} />
                </Routes>
            </Router>
            
        </div>
    )
}


export default App;