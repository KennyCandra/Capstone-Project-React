import { Routes , Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import Title from './Components/title';
import Navigation from './Components/Navigation';
import AboutPage from './Pages/About';
import BookingPage from './Pages/BookingPage';

function App() {
  return (
    <>
    <Title />
    <Navigation />
    <Routes>
     <Route Component={HomePage} path='/' />
     <Route Component={AboutPage} path='/about' />
     <Route Component={BookingPage} path='bookingpage'/>
   </Routes>
    </>

  );
}

export default App;
