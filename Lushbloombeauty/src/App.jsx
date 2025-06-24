import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import VenderStore from './Components/VenderPage/VenderStore'
import Help from './Components/HelpPage/Help'
import Contact from './Components/ContactusPage/Contact'
import Signin from './Components/SigninPage/Signin'
import HeroPage from './Components/HomePage/HeroPage'

function App() {

  return (
    <>
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HeroPage />}/>
          <Route path='/vendor-store' element={<VenderStore />}/>
          <Route path='/help' element={<Help />} />
          <Route path='/Contact-us' element={<Contact />} />
          <Route path='/Signin' element={<Signin />} />
        </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
