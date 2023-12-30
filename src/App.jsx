import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Purchases from './pages/Purchases'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/purchases' element={<Purchases/>}/>
      </Route>
    </Routes>
  )
}

export default App
