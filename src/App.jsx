import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Error404 from './pages/Error404'
import LayoutDefault from './assets/layout/LayoutDefault/LayoutDefault'
import Blog from './pages/Blog/Blog'
import BlogNew from './pages/Blog/BlogNew'
import BlogRelated from './pages/Blog/BlogRelated'
import BlogAll from './pages/Blog/BlogAll'
import BlogDetail from './pages/Blog/BlogDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>  {/* Sử dụng outlet để hiển thị nội dụng => dùng trong LayOutDefault  */}
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} >{/* Router lồng nhau */}
            {/* Dùng index khong dùng path
              Index để load component con cung component  cha
          */}
            <Route index element={<BlogAll />} />
            <Route path="news" element={<BlogNew />} />
            <Route path="related" element={<BlogRelated />} />
            {/* Dynamic routes */}
            <Route path="detail/:id" element={<BlogDetail />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  )
}

export default App