import { Routes , Route } from 'react-router-dom';
import HomePage from './Pages/Home';
import Title from './Components/title';
import Navigation from './Components/Navigation';
import AboutPage from './Pages/About';

function App() {
  return (
    <>
    <Title />
    <Navigation />
    <Routes>
     <Route Component={HomePage} path='/' />
     <Route Component={AboutPage} path='/about' />
   </Routes>
    </>

  );
}

export default App;
