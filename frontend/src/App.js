import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import ViewMembers from './pages/ViewMembers';
import MemberDetails from './pages/MemberDetails';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddMember />} />
          <Route path="/members" element={<ViewMembers />} />
          <Route path="/members/:id" element={<MemberDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
