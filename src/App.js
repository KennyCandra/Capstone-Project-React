import { Routes , Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import Title from './Components/title';
import Navigation from './Components/Navigation';
import AboutPage from './Pages/About';
import BookingPage from './Pages/BookingPage';
import Footer from './Components/Footer';
import Menu from './Pages/Menu';
import Context from './Components/context/Context';
import SideBar from './Components/SideBar'
import Layout from './Components/Layout';
import Reservation  from './Pages/Reservation';
import ReservationFormContext from './Components/context/ReservationFormContext';
import CheckOut from './Pages/CheckOut';
import { useMediaQuery } from '@chakra-ui/react';
import NavgationMobile from './Components/NavigationMobile';

function App() {

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  return (
    <Context>
      <ReservationFormContext>
        <Layout>
          <Title />
          {!isLargerThan768 && <NavgationMobile />}
          {isLargerThan768 && <SideBar />}
          {isLargerThan768 && <Navigation />}
          <Routes>
            <Route Component={HomePage} path='/' />
            <Route Component={AboutPage} path='/about' />
            <Route Component={BookingPage} path='/bookingpage'/>
            <Route Component={Menu} path='/menu' />
            <Route Component={Reservation} path='/reservation' />
            <Route Component={CheckOut} path='/checkout' />
          </Routes>
        <Footer />
        </Layout>
      </ReservationFormContext>
    </Context>

  );
}

export default App;
