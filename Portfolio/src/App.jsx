import NavBar from './Components/NavBar'
import './App.css'
 import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <NavBar />
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <ToastContainer />
    </>
  )
}

export default App
