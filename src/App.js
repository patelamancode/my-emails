import { Routes, Route } from 'react-router-dom';

import './App.css';
import LandingPage from './components/LandingPage';
import Inbox from './pages/Inbox';
import Sent from './pages/Sent';
import IndividualEmailTemp from './pages/IndividualEmailTemp';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Routes>
        <Route path='/inbox' element={<Inbox />} />
          <Route path='/:emailID' element={<IndividualEmailTemp />}/>
        <Route path='/sent' element={<Sent />} />
      </Routes>
    </div>
  );
}

export default App;
