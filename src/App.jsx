import Home from './Pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Departments from './Pages/Departments/Departments';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {


  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/departments' element={<Departments/>} />
       
      </Routes>
      <Footer/>
     </BrowserRouter>

        
      
    </>
  )
}

export default App
