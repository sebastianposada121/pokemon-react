import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import PokemonList from './views/PokemonList';

function App() {
  return (
    <div className='h-lvh overflow-auto' style={{ background: "radial-gradient(circle, rgba(241,241,241,1) 51%, rgb(81 81 81) 100%)" }}>
      <Router>
        <Routes>
          <Route>
            <Route path='/' element={<PokemonList/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
