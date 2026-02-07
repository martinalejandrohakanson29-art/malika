
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../App';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useApp();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/admin');
    } else {
      setError('Credenciales incorrectas. Intenta con admin@malika.com / 1234');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background-light dark:bg-background-dark font-manrope">
      <div className="w-full max-w-[480px] bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-zinc-700 overflow-hidden">
        <div className="px-8 pt-10 pb-6 flex flex-col items-center text-center">
          <div className="mb-5 p-3 rounded-full bg-admin/10 text-admin">
            <span className="material-symbols-outlined text-4xl">spa</span>
          </div>
          <h1 className="text-gray-900 dark:text-white text-[28px] font-bold tracking-tight leading-tight mb-1">
            Malika & MiMichos
          </h1>
          <p className="text-gray-500 dark:text-zinc-400 text-sm font-medium">
            Acceso Administrador
          </p>
        </div>

        <div className="px-8 pb-10">
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            <label className="flex flex-col gap-2 group">
              <span className="text-gray-900 dark:text-gray-200 text-sm font-semibold">Correo electrónico</span>
              <div className="relative">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border-gray-200 dark:border-zinc-600 bg-white dark:bg-zinc-900 h-14 p-4 focus:ring-admin focus:border-admin transition-all"
                  placeholder="ej. admin@malika.com" 
                  required 
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">mail</span>
              </div>
            </label>

            <label className="flex flex-col gap-2 group">
              <span className="text-gray-900 dark:text-gray-200 text-sm font-semibold">Contraseña</span>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border-gray-200 dark:border-zinc-600 bg-white dark:bg-zinc-900 h-14 p-4 focus:ring-admin focus:border-admin transition-all"
                  placeholder="••••••••" 
                  required 
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">visibility</span>
              </div>
            </label>

            {error && <p className="text-rose-500 text-xs font-bold">{error}</p>}

            <button type="submit" className="mt-4 w-full h-14 bg-admin hover:bg-orange-600 text-white text-base font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2">
              Ingresar
              <span className="material-symbols-outlined text-[20px]">login</span>
            </button>
          </form>
        </div>
      </div>
      <p className="mt-8 text-xs text-gray-400">© 2024 Malika & MiMichos. Gestión Boutique & Nails.</p>
    </div>
  );
};

export default Login;
