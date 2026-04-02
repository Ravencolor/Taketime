import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function AddMember() {
  const [form, setForm] = useState({ first_name: '', last_name: '', subscription_type: 'Mensuel' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('members').insert([form]);
    if (!error) navigate('/members');
    else alert("Erreur lors de l'ajout");
  };

  return (
    <div className="p-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Inscrire un nouveau membre</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Prénom</label>
          <input required className="w-full p-2 border rounded" onChange={e => setForm({...form, first_name: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Nom</label>
          <input required className="w-full p-2 border rounded" onChange={e => setForm({...form, last_name: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Type d'abonnement</label>
          <select className="w-full p-2 border rounded" onChange={e => setForm({...form, subscription_type: e.target.value})}>
            <option>Mensuel</option>
            <option>Annuel</option>
            <option>10 Séances</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition">
          Enregistrer le membre
        </button>
      </form>
    </div>
  );
}