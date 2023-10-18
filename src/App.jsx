import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import SinglePhoto from './pages/SinglePhoto'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:id' element={<SinglePhoto />} />
    </Routes>
  )
}

export default App
