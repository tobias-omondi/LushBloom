import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Help from './Components/HelpPage/Help'
import Signin from './Components/SigninPage/Signin'
import HeroPage from './Components/HomePage/HeroPage'
import VenderHomePage from './Components/VenderPage/VenderHomePage'

function App() {

  return (
    <>
      <div>
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HeroPage />}/>
          <Route path='/vendor-store' element={<VenderHomePage />}/>
          <Route path='/help' element={<Help />} />
          <Route path='/Signin' element={<Signin />} />
        </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
