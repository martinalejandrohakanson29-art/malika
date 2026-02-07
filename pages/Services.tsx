
import React, { useState } from 'react';
import { useApp } from '../App';

const Services: React.FC = () => {
  const { settings, addAppointment } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    service: settings.services[0].name,
    date: '',
    time: '10:00 AM',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date || !formData.phone) {
        alert("Por favor completa todos los campos.");
        return;
    }
    addAppointment(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ ...formData, date: '', phone: '' });
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Mimate a vos misma</h2>
          <p className="mt-2 text-4xl leading-8 font-display font-bold text-gray-900 dark:text-white sm:text-5xl">
            Nuestros Servicios y Precios
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-10 border border-gray-100 dark:border-zinc-700">
            <h3 className="font-display text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <span className="material-icons mr-3 text-primary">spa</span> Menú de Belleza
            </h3>
            <div className="space-y-6">
              {settings.services.map(s => (
                <div key={s.id} className="flex justify-between items-center border-b border-gray-100 dark:border-zinc-700 pb-4">
                  <div>
                    <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{s.name}</span>
                    <p className="text-xs text-gray-400">Servicio premium garantizado</p>
                  </div>
                  <span className="text-2xl font-display font-bold text-primary">${s.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 bg-rose-50 dark:bg-rose-900/10 rounded-xl">
               <p className="italic text-gray-600 dark:text-gray-400">"Cada detalle cuenta. Nos tomamos el tiempo necesario para que tus manos luzcan perfectas."</p>
            </div>
          </div>

          <div className="bg-primary rounded-2xl shadow-2xl overflow-hidden flex flex-col text-white">
            <div className="p-10 flex-grow">
              <h3 className="font-display text-3xl font-bold mb-4">Reservá tu Turno</h3>
              <p className="text-rose-100 mb-8">¿Lista para transformar tus uñas? Elegí una fecha y hora. Recomendamos reservar con 2-3 días de anticipación.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5 text-gray-900">
                <div>
                  <label className="block text-sm font-medium text-rose-100 mb-1">Elegí el servicio</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full rounded-xl border-none h-14 px-4 focus:ring-2 focus:ring-amber-200"
                  >
                    {settings.services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-rose-100 mb-1">Fecha preferida</label>
                  <input 
                    type="date" 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full rounded-xl border-none h-14 px-4 focus:ring-2 focus:ring-amber-200"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-rose-100 mb-1">Hora</label>
                    <select 
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full rounded-xl border-none h-14 px-4 focus:ring-2 focus:ring-amber-200"
                    >
                      <option>10:00 AM</option>
                      <option>11:30 AM</option>
                      <option>01:00 PM</option>
                      <option>02:30 PM</option>
                      <option>04:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-rose-100 mb-1">Teléfono</label>
                    <input 
                      type="tel" 
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full rounded-xl border-none h-14 px-4 focus:ring-2 focus:ring-amber-200"
                    />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-zinc-900 text-white font-bold h-14 rounded-xl hover:bg-black transition-all transform active:scale-95 shadow-lg"
                >
                  Confirmar Turno
                </button>
              </form>

              {submitted && (
                <div className="mt-6 p-4 bg-green-500/20 border border-green-500 rounded-xl text-center font-bold animate-pulse">
                  ¡Turno solicitado con éxito!
                </div>
              )}
            </div>
            <div className="p-8 bg-black/10 border-t border-white/10">
              <div className="flex items-center space-x-3 opacity-80">
                <span className="material-icons">location_on</span>
                <span className="text-sm">123 Beauty Lane, Distrito de la Moda</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
