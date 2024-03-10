import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/header/Navbar'
import Home from './components/routes/Home'
import Blogs from './components/routes/Blogs'
import AboutUs from './components/footer/AboutUs'
import Tours from './components/routes/Tours'
import BlogPage from './components/routes/BlogPage'

function App() {

  return (
    <div className='overflow-contain'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path={`/blogs/:id`} element={<BlogPage />} />
      </Routes>
      <AboutUs />
    </div>
  )
}

export default App
