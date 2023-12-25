import {Routes,Route} from 'react-router-dom'
import Home from "./components/home"
import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Aboutus from './components/Aboutus'
import Services from './components/services'
import InquiryForm from './components/inquiry'

function App() {
  
  return (
    <>
      <Navbar/>  
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/inquiry' element={<InquiryForm/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
