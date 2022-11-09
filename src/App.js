import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Components/MainComponent/pages/Profile/Profile';
import Documents from './Components/MainComponent/pages/DocumentBank/Documents';
import RotaManagement from './Components/MainComponent/pages/RotaManagement';
import StaffBank from './Components/MainComponent/pages/StaffBank';
import Locum from './Components/MainComponent/pages/Locum';
import Finance from './Components/MainComponent/pages/Finance';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Header/Navbar';
import {useState} from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Router>
        <Navbar onClick={toggle} />
        <Sidebar isOpen={isOpen}>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/docs" element={<Documents />} />
            <Route path="/rota" element={<RotaManagement />} />
            <Route path="/staff" element={<StaffBank />} />
            <Route path="/locum" element={<Locum />} />
            <Route path="/finance" element={<Finance />} />
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
