import { Route, Routes } from 'react-router'
import './App.css';
import Landing from '../Landing/Landing';
import Browse from '../Browse/Browse';
import DrinkDeets from '../DrinkDeets/DrinkDeets';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/browse' element={<Browse />}/>
        <Route path='/favorites' element={<Browse />} />
        <Route path='/drink/:id/:favorite' element={<DrinkDeets />} />
        <Route path='/' element={<Landing />}/>
      </Routes>
    </main>
  );
}

export default App;
