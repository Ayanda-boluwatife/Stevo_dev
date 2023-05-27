import styled from 'styled-components';
import Header from './Portfolio/Header/Header';
import Nav from './Portfolio/Nav/Nav';
import About from './Portfolio/About/About';
import Experience from './Portfolio/Experience/Experience'
import Service from './Portfolio/Services/Service';
import Port from './Portfolio/Port/Port';
import Testimonial from './Portfolio/Testimonial/Testimonial';
import Contact from './Portfolio/Contact/Contact'
import Footer from './Portfolio/Footer/Footer';

function App() {
  return (
    <Wrapper>
      <div className="App">
        <Header />
        <Nav />
        <About />
        <Experience />
        <Service />
        <Port />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section``
export default App;










// import './App.css';
// import IndexRender from './Components/IndexRender';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import Loading from './Components/Loading';

// function App() {
//   const [isLoading, setLoading] = useState(true)

//   useEffect(()=>{
//     setTimeout(()=>{
//       setLoading(false)
//     }, 5000)
//   }, [])
//   return (
//     <>
//     {isLoading? (<Loading/>) : (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<IndexRender />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//     )}
//     </>
//   );
// }

// export default App;
