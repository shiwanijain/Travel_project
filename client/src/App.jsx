import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/header/Navbar'
import Home from './components/routes/Home'
import Blogs from './components/routes/Blogs'

function App() {

  return (
    <div className='overflow-contain'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
    </div>
  )
}

export default App
