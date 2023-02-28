import { Route, Routes } from 'react-router'
import './App.css';
import Landing from '../Landing/Landing';
import Browse from '../Browse/Browse';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/browse' element={<Browse />}/>
      </Routes>
    </main>
  );
}

export default App;
