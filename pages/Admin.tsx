
import React, { useState } from 'react';
import { useApp } from '../App';
import { Link, useNavigate } from 'react-router-dom';

// Fix: Remove React.FC to align with modern React standards and avoid implicit children issues
const Admin = () => {
  const { settings, updateSettings, appointments, logout } = useApp();
  const navigate = useNavigate();
  const [localSettings, setLocalSettings] = useState(settings);
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    updateSettings(localSettings);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handlePriceChange = (id: string, newPrice: string) => {
    const newServices = localSettings.services.map(s => s.id === id ? { ...s, price: newPrice } : s);
    setLocalSettings({ ...localSettings, services: newServices });
  };

  return (
    <div className="flex h-screen w-full bg-background-light dark:bg-zinc-950 font-manrope transition-colors">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 z-50 flex items-center gap-3 bg-white dark:bg-zinc-800 px-6 py-4 rounded-lg shadow-2xl border-l-4 border-green-500 animate-bounce">
          <span className="material-symbols-outlined text-green-500">check_circle</span>
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">Cambios Guardados</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">La configuración se actualizó correctamente.</p>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-72 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 h-full flex-shrink-0">
        <div className="p-6 border-b border-gray-200 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 rounded-full h-10 w-10 flex items-center justify-center">
               <span className="material-icons-outlined text-primary">dashboard</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-gray-900 dark:text-white text-base font-bold leading-normal">Panel Control</h1>
              <p className="text-gray-500 text-xs font-normal">Malika & MiMichos</p>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-admin/10 text-admin font-medium">
            <span className="material-symbols-outlined text-xl">settings</span>
            <span className="text-sm">Configuración General</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors">
            <span className="material-symbols-outlined text-xl">schedule</span>
            <span className="text-sm">Turnos Recibidos</span>
          </button>
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors mt-auto">
            <span className="material-symbols-outlined text-xl">home</span>
            <span className="text-sm">Volver al Sitio</span>
          </Link>
          <button onClick={() => { logout(); navigate('/'); }} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-colors">
            <span className="material-symbols-outlined text-xl">logout</span>
            <span className="text-sm">Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 lg:px-12 bg-gray-50 dark:bg-zinc-950">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8 pb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-gray-900 dark:text-white text-3xl font-black tracking-tight mb-2">Gestión de Boutique & Nails</h2>
              <p className="text-gray-500 dark:text-zinc-400 text-base">Administra la identidad de tu marca y actualiza precios.</p>
            </div>
            <button onClick={handleSave} className="bg-admin hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-admin/20 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">save</span>
              Guardar Cambios
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Site Identity Card */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-zinc-800">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-admin">tune</span>
                    Identidad del Sitio
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-600 dark:text-zinc-400">Nombre del Sitio</label>
                      <input 
                        className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 dark:text-white" 
                        type="text" 
                        value={localSettings.siteName}
                        onChange={(e) => setLocalSettings({...localSettings, siteName: e.target.value})}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-600 dark:text-zinc-400">Título Principal (Hero)</label>
                      <input 
                        className="w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 dark:text-white" 
                        type="text" 
                        value={localSettings.heroTitle}
                        onChange={(e) => setLocalSettings({...localSettings, heroTitle: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-gray-600 dark:text-zinc-400">Subtítulo Hero</label>
                      <textarea 
                        className="w-full h-24 p-4 rounded-xl bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 dark:text-white"
                        value={localSettings.heroSubtitle}
                        onChange={(e) => setLocalSettings({...localSettings, heroSubtitle: e.target.value})}
                      />
                  </div>
                </div>
              </div>

              {/* Appointments List */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-zinc-800">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-admin">calendar_month</span>
                    Turnos Solicitados
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-50 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 text-xs uppercase font-bold border-b dark:border-zinc-700">
                      <tr>
                        <th className="px-6 py-4">Servicio</th>
                        <th className="px-6 py-4">Fecha/Hora</th>
                        <th className="px-6 py-4">Teléfono</th>
                        <th className="px-6 py-4">Estado</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y dark:divide-zinc-700">
                      {appointments.length === 0 ? (
                        <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-400">No hay turnos registrados.</td></tr>
                      ) : (
                        appointments.map(a => (
                          <tr key={a.id} className="hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors">
                            <td className="px-6 py-4 text-sm font-bold dark:text-white">{a.service}</td>
                            <td className="px-6 py-4 text-sm dark:text-zinc-300">{a.date} - {a.time}</td>
                            <td className="px-6 py-4 text-sm dark:text-zinc-300">{a.phone}</td>
                            <td className="px-6 py-4">
                              <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-[10px] font-bold uppercase">{a.status}</span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Quick Pricing Card */}
              <div className="bg-zinc-900 dark:bg-zinc-900 text-white rounded-2xl shadow-xl p-8 flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-1">Precios Rápidos</h3>
                  <p className="text-zinc-400 text-sm">Actualiza los precios de servicios en tiempo real.</p>
                </div>
                <div className="space-y-4">
                  {localSettings.services.map(s => (
                    <div key={s.id} className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{s.name}</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">$</span>
                        <input 
                          type="text" 
                          value={s.price}
                          onChange={(e) => handlePriceChange(s.id, e.target.value)}
                          className="w-full pl-8 pr-4 py-3 bg-zinc-800 border-zinc-700 rounded-xl text-white font-bold focus:ring-admin"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Summary */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 p-8 text-center">
                 <div className="text-4xl font-black text-admin mb-2">{appointments.length}</div>
                 <p className="text-gray-500 dark:text-zinc-400 text-sm font-bold uppercase tracking-wider">Turnos Pendientes</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
