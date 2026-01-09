import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inicial from './telas/Inicial'
import Contador from './telas/Contador'
import { useApp } from './AppContext';
import { AppProvider } from './AppContext'

import './App.css'


function App() {
  return (
    <AppProvider>
      <InnerApp />
    </AppProvider>
  )
}

function InnerApp() {
  const { pathPadrao } = useApp()

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
