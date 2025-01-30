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
import Footer from './components/Footer';
import Preferences from './components/Preferences';
import ScrollToTop from './components/ScrollToTop';
import Test from './components/Test';
import Playlist from './components/Playlist'
import ConfettiEffect from './components/ConfettiEffect';
import BirthdayCountdown from './components/BirthdayCountdown';
import DreamsAndGoals from './components/Goals';
import Places from './components/Places';
import GiftBox from './components/GiftBox';
import Quotes from './components/Quotes';
import Jokes from './components/Jokes';


function App() {
  function importAllImages(r) {
    return r.keys().map(r);
  }

  const images = importAllImages(require.context('./images/places/', false, /\.(png|jpe?g|svg)$/));

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      
      <Routes>
      <Route path='/' element={
          <div className="App p-4 p-md-4 mx-0 mx-md-5">
            <Navbar />
            <ConfettiEffect />
            <Hero />
            <Cake />
            <GalleryFeaturette />
            <JourneyFeaturette />
            <Places images={images}/>
            <Jokes/>
            <ScrollToTop />
            <Footer />
          </div>
        }></Route>

        <Route path='/usinfinity' element={
          <div className="App p-4 p-md-4 mx-0 mx-md-5">
            <Navbar/>
            <ConfettiEffect />
            <Hero />
            <Cake />
            <GalleryFeaturette />
            <JourneyFeaturette />
            <Places images={images}/>
            <Jokes/>
            <ScrollToTop />
            <Footer />
          </div>
        }></Route>

        <Route path='gallery' element={
          <div className="App p-4 p-md-4 mx-0 mx-md-5">
            <Navbar />
            <Gallery />
            <ScrollToTop />
            <Footer />
          </div>
        }></Route>

        <Route path='journey' element={
          <div className="App p-4 p-md-4 mx-0 mx-md-5">
            <Navbar />
            <Journey />
            <ScrollToTop />
            <Footer />
          </div>
        }></Route>

        <Route path='about' element={
          <div className="App p-4 p-md-4 mx-0 mx-md-5">
            <Navbar />
            <About />
            <Preferences />
            <DreamsAndGoals/>
            <ScrollToTop />
            <Footer />
          </div>
        }></Route>

        <Route path='quiz' element={
          <div className="App p-4 p-md-4 mx-0 mx-md-5">
            <Navbar />
            <Test />
            <ScrollToTop />
            <Footer />
          </div>
        }></Route>

        <Route path='playlist' element={
          <div className="App p-4 p-md-4 mx-0 mx-md-5">
            <Navbar />
            <Playlist />
            <Quotes/>
            <ScrollToTop />
            <Footer />
          </div>
        }></Route>

        <Route path='countdown' element={
          <div className="App" style={{maxHeight:'100vh', overflowY:'hidden'}}>
            <BirthdayCountdown/>
          </div>
        }></Route>

        <Route path='gift' element={
          <div className="App p-4 p-md-4 mx-0 mx-md-5">
            <Navbar />
            <GiftBox/>
            <ScrollToTop />
            <Footer />
          </div>
        }></Route>



      </Routes>

    </Router>
  );
}

export default App;
