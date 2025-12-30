import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicial from './telas/Inicial'
import Contador from './telas/Contador'
import PopUpVitoria from './componentes/PopUpVitoria'
import { useApp } from './AppContext';

import './App.css'

function App() {

  const pathPadrao = "/"
  return (
    <>
      <div className=''>
        <Router>
          <Routes>
            <Route path={pathPadrao} element={<Inicial />} />
            <Route path={pathPadrao + 'contador'} element={<Contador />} />
            <Route path="*" element={<Inicial />} /> {/* mudar futuramente */}
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
