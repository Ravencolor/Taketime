import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Trash2, Edit, Search } from 'lucide-react';

export default function MembersList() {
  const [members, setMembers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => { fetchMembers() }, []);

  async function fetchMembers() {
    const { data } = await supabase.from('members').select('*').order('last_name');
    setMembers(data || []);
  }

  async function deleteMember(id) {
    if (window.confirm("Supprimer ce membre ?")) {
      await supabase.from('members').delete().eq('id', id);
      fetchMembers();
    }
  }

  const filtered = members.filter(m => 
    `${m.first_name} ${m.last_name}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Liste des membres</h1>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input 
            type="text" placeholder="Rechercher..." 
            className="pl-10 pr-4 py-2 border rounded-lg w-64"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-4">Nom</th>
              <th className="p-4">Abonnement</th>
              <th className="p-4">Statut</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(m => (
              <tr key={m.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4 font-medium">{m.last_name.toUpperCase()} {m.first_name}</td>
                <td className="p-4 text-gray-600">{m.subscription_type}</td>
                <td className="p-4">
                  <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">Actif</span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <button className="p-2 hover:bg-blue-50 text-blue-600 rounded"><Edit size={18}/></button>
                  <button onClick={() => deleteMember(m.id)} className="p-2 hover:bg-red-50 text-red-600 rounded"><Trash2 size={18}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}