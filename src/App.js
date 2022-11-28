// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Reference from './pages/Reference';
import Contact from './pages/Contact';

import {Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/reference">Reference</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reference" element={<Reference/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
