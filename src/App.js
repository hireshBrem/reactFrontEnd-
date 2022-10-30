//Styling
import './App.css';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Map from './components/Map';
import MediaBar from './components/MediaBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'
import Page, { useEffect, useState } from 'react';

//Pages
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';

import ReactLoading from 'react-loading';

function App() {
  // const[loaded, setLoaded] = useState(false)

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     setLoaded(true)
  //   }, 2000)
  // }, [])

  return (
    
    <BrowserRouter>
    {
    <div className='transition-opacity ease-in duration-700'>
    <Navbar />
      <MediaBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <div className='h-32'></div>
      <Map />
      <Footer />
    </div>
    // : <ReactLoading color="blue" height={307} width={375} />
    }
    </BrowserRouter>
  );
}

export default App;
