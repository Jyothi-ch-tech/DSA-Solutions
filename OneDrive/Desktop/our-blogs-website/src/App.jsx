import './App.css'
import Login from './Pages/Login/Login'
import Registration from './Pages/Registration/Registration'
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import CategoryBlogs from './Pages/CategoryBlogs/CategoryBlogs';
import DedicatedBlog from './Pages/DedicatedBlog/DedicatedBlog';
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
function App() {
  let path = window.location.pathname;
  let locations = ['/Login', '/Registration']
  return (
    <>
      {!locations.includes(path) && <Navbar />}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/Blogs/:category' element={<CategoryBlogs />} />
        <Route path='/Blog/:id' element={<DedicatedBlog />} />
      </Routes>

      {!locations.includes(path) && <Footer />}


    </>
  )
}

export default App
