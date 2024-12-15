import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect } from 'react';
import AOS from "aos";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GalleryFeaturette from './components/GalleryFeaturette';
import Gallery from './components/Gallery';
import Cake from './components/Cake';
import JourneyFeaturette from './components/JourneyFeaturette';
import Journey from './components/Journey';
import About from './components/About';
import Todo from './components/Todo';
import Footer from './components/Footer';
import Preferences from './components/Preferences';
import ScrollToTop from './components/ScrollToTop';
import Test from './components/Test';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path='/usinfinity' element={
          <div className="App p-4 p-md-4 mx-0 mx-md-5">
            <Navbar />
            <Hero />
            <Cake />
            {/* <Explore/> */}
            <JourneyFeaturette />
            <GalleryFeaturette />
            <ScrollToTop/>
            <Footer />
          </div>
        }></Route>

        <Route path='/gallery' element={
          <div className="App p-4 p-md-4 mx-0 mx-md-5">
            <Navbar />
            <Gallery/>
            <ScrollToTop/>
            <Footer />
          </div>
        }></Route>

        <Route path='/journey' element={
          <div className="App p-4 p-md-4 mx-0 mx-md-5">
            <Navbar />
            <Journey/>
            <ScrollToTop/>
            <Footer />
          </div>
        }></Route>

        <Route path='/about' element={
          <div className="App p-4 p-md-4 mx-0 mx-md-5">
            <Navbar />
            <About/>
            <Preferences/>
            <ScrollToTop/>
            <Footer />
          </div>
        }></Route>

        <Route path='/todo' element={
          <div className="App p-4 p-md-4 mx-0 mx-md-5">
            <Navbar />
           <Test/>
            <ScrollToTop/>
            <Footer />
          </div>
        }></Route>


      </Routes>

    </Router>
  );
}

export default App;
