import './App.css';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Calculator from './components/Calculator/Calculator';
import { Route,  Routes, } from 'react-router-dom';
import SwiperSlider from './components/SwiperSlider/SwiperSlider';
import PersonalArea from './components/PersonalArea/PersonalArea';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Banner />}/>
            <Route path='/calculator' element={<Calculator />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/slider' element={<SwiperSlider />}/>
            <Route path='/personalArea' element={<PersonalArea />}/>
          </Routes>

          {/* <Banner />
          <Calculator slide={slide} index={index} setIndex={setIndex} /> При подключении Link ошибка
          <Gallery />
          <Slider /> */}
          {/* <RouterProvider router={router} /> */}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
