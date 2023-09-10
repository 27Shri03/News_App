import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import News from './News'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [nav, changenav] = useState(false);
  const [progress , setprogress] = useState(0);
  const handlenav = () => {
    changenav(!nav);
  }
  const size = 6;
  return (
    <>
      <Router Basename='/News_App'>
        <LoadingBar color='#f11946' progress={progress} height={4} />
        <Navbar changenav={handlenav} />
        <Routes>
          <Route exact path="/" element={<News progress={setprogress} pagesize={size} category={"general"} nav={nav} key={"general"} />} />
          <Route exact path="/business" element={<News progress={setprogress} pagesize={size} category={"business"} nav={nav} key={"business"} />} />
          <Route exact path="/sports" element={<News progress={setprogress} pagesize={size} category={"sports"} nav={nav} key={"sports"} />} />
          <Route exact path="/technology" element={<News progress={setprogress} pagesize={size} category={"technology"} nav={nav} key={"technology"} />} />
          <Route exact path="/science" element={<News progress={setprogress} pagesize={size} category={"science"} nav={nav} />} key={"science"} />
          <Route exact path="/health" element={<News progress={setprogress} pagesize={size} category={"health"} nav={nav} key={"health"} />} />
          <Route exact path="/entertainment" element={<News progress={setprogress} pagesize={size} category={"entertainment"} nav={nav} key={"entertainment"} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
