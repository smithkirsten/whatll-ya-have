import { Route, Routes } from 'react-router'
import './App.css';
import Landing from '../Landing/Landing';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Landing />}/>

      </Routes>
    </main>
  );
}

export default App;
