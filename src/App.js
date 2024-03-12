import { Routes , Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import Title from './Components/title';
import Navigation from './Components/Navigation';
import AboutPage from './Pages/About';
import BookingPage from './Pages/BookingPage';
import Footer from './Components/Footer';
import Menu from './Pages/Menu';

function App() {
  return (
    <>
    <Title />
    <Navigation />
    <Routes>
     <Route Component={HomePage} path='/' />
     <Route Component={AboutPage} path='/about' />
     <Route Component={BookingPage} path='/bookingpage'/>
     <Route Component={Menu} path='/menu' />
   </Routes>
   <Footer />
    </>

  );
}

export default App;
