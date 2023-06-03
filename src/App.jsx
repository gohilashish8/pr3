import Home from './Pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Departments from './Pages/Departments/Departments';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Doctors from './Pages/Doctors/Doctors';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Appointment from './Pages/Appointment/Appointment';


function App() {


  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/departments' element={<Departments/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
       
      </Routes>
      <Footer/>
     </BrowserRouter>

        
      
    </>
  )
}

export default App
