
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import { SiteSettings, Appointment, AppContextType } from './types';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Services from './pages/Services';
import Login from './pages/Login';
import Admin from './pages/Admin';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};

// Fix: Use explicit props with optional children to avoid strict typing issues in some environments
const AppProvider = ({ children }: { children?: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('siteSettings');
    return saved ? JSON.parse(saved) : {
      siteName: "Malika & MiMichos",
      heroTitle: "Resaltá tu Belleza Natural",
      heroSubtitle: "Experimentá arte de uñas premium y servicios de belleza en un ambiente boutique sereno.",
      services: [
        { id: '1', name: 'Manicuría Clásica', price: '25' },
        { id: '2', name: 'Esmaltado Semipermanente', price: '35' },
        { id: '3', name: 'Capping', price: '45' },
        { id: '4', name: 'Retirado', price: '10' }
      ]
    };
  });

  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('appointments');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('siteSettings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
  }, [isLoggedIn]);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const updateSettings = (newSettings: SiteSettings) => setSettings(newSettings);

  const addAppointment = (data: Omit<Appointment, 'id' | 'status'>) => {
    const newAppointment: Appointment = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pendiente'
    };
    setAppointments([...appointments, newAppointment]);
  };

  const login = (user: string, pass: string) => {
    if (user === 'admin@malika.com' && pass === '1234') {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsLoggedIn(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <AppContext.Provider value={{ 
      settings, updateSettings, appointments, addAppointment, 
      isLoggedIn, login, logout, darkMode, toggleDarkMode 
    }}>
      {children}
    </AppContext.Provider>
  );
};

const Navbar = () => {
  const { toggleDarkMode, darkMode, settings, isLoggedIn } = useApp();
  const location = useLocation();
  const isAdminPath = location.pathname === '/admin';

  if (isAdminPath) return null;

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <span className="font-display font-bold text-2xl md:text-3xl tracking-wide text-gray-900 dark:text-white">Malika</span>
            <span className="ml-2 text-[10px] md:text-xs uppercase tracking-widest text-primary font-semibold mt-2">Nails & Beauty</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-900 dark:text-gray-100 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Inicio</Link>
            <Link to="/shop" className="text-gray-500 dark:text-gray-400 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Tienda</Link>
            <Link to="/services" className="text-gray-500 dark:text-gray-400 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">Servicios</Link>
            {isLoggedIn ? (
              <Link to="/admin" className="text-admin font-bold px-3 py-2 rounded-md text-sm">Admin</Link>
            ) : (
              <Link to="/login" className="text-gray-500 hover:text-primary px-3 py-2 text-sm">Login</Link>
            )}
            <Link to="/services" className="bg-primary text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-rose-600 transition-transform transform hover:-translate-y-0.5">Reservar Ahora</Link>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <span className="material-icons-outlined text-gray-600 dark:text-gray-300">
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleDarkMode} className="p-2">
              <span className="material-icons-outlined">{darkMode ? 'light_mode' : 'dark_mode'}</span>
            </button>
            <span className="material-icons text-gray-600 dark:text-gray-300">menu</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => {
  const location = useLocation();
  if (location.pathname === '/admin' || location.pathname === '/login') return null;
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <span className="material-icons text-gray-400 hover:text-primary cursor-pointer">photo_camera</span>
          <span className="material-icons text-gray-400 hover:text-primary cursor-pointer">facebook</span>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">© 2024 Malika & MiMichos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

// Fix: Explicitly type children as optional to resolve "missing children" errors during JSX parsing/compilation (line 176)
const ProtectedRoute = ({ children }: { children?: React.ReactNode }) => {
  const { isLoggedIn } = useApp();
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

// Fix: Remove React.FC to avoid potential children-related type conflicts in React 18
const App = () => {
  return (
    <AppProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/services" element={<Services />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </AppProvider>
  );
};

export default App;
