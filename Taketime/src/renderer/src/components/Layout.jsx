import { Link, Outlet } from 'react-router-dom';
import { Users, Home, Settings, Info, PlusCircle } from 'lucide-react';

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <nav className="w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-slate-800">Taketime</div>
        <div className="flex-1 p-4 space-y-2">
          <Link to="/" className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded"><Home size={20}/> Accueil</Link>
          <Link to="/members" className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded"><Users size={20}/> Membres</Link>
          <Link to="/add" className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded"><PlusCircle size={20}/> Inscription</Link>
        </div>
        <div className="p-4 border-t border-slate-800">
          <Link to="/settings" className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded"><Settings size={20}/> Paramètres</Link>
          <Link to="/about" className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded"><Info size={20}/> À propos</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}