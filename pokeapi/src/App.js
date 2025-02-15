import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css';

import ListeName from './component/ListeName';
import ListeMove from './component/ListeMove';
import ListeImage from './component/ListeImage';
import ListeType from './component/ListeType';



function App() {
  return (
    <>
     <Router>
      <nav>
      <Link to="/ListeName">Nom</Link>
      <Link to="/ListeMove">Move</Link>
      <Link to="/ListeImage">Image</Link>
      <Link to="/ListeType">Type</Link>
    </nav>
   
      <div className="App">
        <Routes>
          <Route path="/ListeName" element={<ListeName/>} />
          <Route path="/ListeMove" element={<ListeMove/>} />
          <Route path="/ListeImage" element={<ListeImage/>} />
          <Route path="/ListeType" element={<ListeType/>} />
          </Routes>
          </div>

        </Router>
        </>
          );
   
};

export default App;
