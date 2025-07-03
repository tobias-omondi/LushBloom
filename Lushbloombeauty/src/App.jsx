import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Help from './Components/HelpPage/Help'
import HeroPage from './Components/HomePage/HeroPage'
import VenderHomePage from './Components/VenderPage/VenderHomePage'
import Signin from './Components/SigninPage/Signin'

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
          <Route path='/signin' element={<Signin />} />
        </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
