import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services/Services';
import Profiles from './components/Profiles/Profiles';
import Navigation from './components/Navigation/Navigation';
import Marketing from './components/Services/Marketing/Marketing';
import Gestion from './components/Services/Gestion/Gestion';
import Informatique from './components/Services/Informatique/Informatique';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/profiles' element={<Profiles/>} />
        <Route path='/services/marketing' element={<Marketing/>} />
        <Route path='/services/gestion' element={<Gestion/>} />
        <Route path='/services/informatique' element={<Informatique/>} />
      </Routes>
    </div>
  );
}

export default App;
