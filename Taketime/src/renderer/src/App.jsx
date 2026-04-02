import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MembersList from './screens/MembersList';
import AddMember from './screens/AddMember';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div className="p-8 text-3xl font-bold">Bienvenue sur Taketime 👋</div>} />
          <Route path="members" element={<MembersList />} />
          <Route path="add" element={<AddMember />} />
          <Route path="settings" element={<div className="p-8">Écran Paramètres</div>} />
          <Route path="about" element={<div className="p-8 text-gray-600 text-lg italic">Taketime v1.0.0 - Gestion optimisée</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;