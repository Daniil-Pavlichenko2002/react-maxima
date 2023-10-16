import Slider from './components/Slider/Slider'
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Block2 from './components/Block2/Block2';
import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import SwiperSlider from './components/SwiperSlider/SwiperSlider';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Banner />,
//   },
//   {
//     path: "/block2",
//     element: <Block2/>,
//   },
//   {
//     path: "/",
//     element: <Gallery />,
//   },
//   {
//     path: "/slider",
//     element: <Slider />,
//   },
// ]);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Banner />}/>
            <Route path='/block2' element={<Block2 />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/slider' element={<SwiperSlider />}/>
          </Routes>

          {/* <Banner />
          <Block2 slide={slide} index={index} setIndex={setIndex} /> При подключении Link ошибка
          <Gallery />
          <Slider /> */}
          {/* <RouterProvider router={router} /> */}
        </div>
      </main>
    </div>
  );
}

export default App;
