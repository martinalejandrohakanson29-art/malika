
import React from 'react';
import { useApp } from '../App';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { settings } = useApp();

  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <div className="inline-block mb-4 p-2 bg-rose-100 dark:bg-rose-900/30 rounded-full">
            <span className="text-primary font-bold text-xs uppercase tracking-wider px-3">Cuidado Profesional</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {settings.heroTitle.split(' ')[0]} <br/>
            <span className="italic text-primary">{settings.heroTitle.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="mt-4 max-w-lg mx-auto md:mx-0 text-xl text-gray-500 dark:text-gray-400 font-light">
            {settings.heroSubtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/services" className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-rose-600 md:text-lg shadow-lg hover:shadow-xl transition-all">
              Agendar Turno
            </Link>
            <Link to="/shop" className="flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-800 hover:bg-gray-50 dark:hover:bg-zinc-700 md:text-lg transition-all">
              Ver Boutique
            </Link>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-80 h-80 md:w-96 md:h-96 bg-white dark:bg-zinc-800 rounded-full shadow-2xl flex items-center justify-center p-8 border-4 border-rose-50 dark:border-zinc-700 overflow-hidden">
            <div className="text-center z-10">
              <img 
                alt="Logo Malika" 
                className="w-32 h-32 mx-auto mb-4 opacity-90 rounded-full" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPc8ZNL8O0PhPzEGqGhIvMdoxiivAnIf7u6pOP9ePJQC_IpuLMWvlc6801JQgCwMZsEfRO2tJe4_ZwBRhihKoU4pH14gzHzyY97MaYNMOImarf7WdBIPILdZUKY9WrV4l6Y00JQsaj_O22YYBlYMvnXVMxbp5b8h-Ee4fVBzoVOa0gIthlsAd2vt7L3GOgKd6zusgkL-sfdDvcmofdKohPQLMLsfyigkQsck33uI4FtzAI3Ne-8wlUebh5xOWK_Jh510pmYBXYdiA" 
              />
              <h2 className="font-display text-4xl text-gray-800 dark:text-white font-bold">{settings.siteName}</h2>
              <p className="text-xs uppercase tracking-widest mt-2 text-gray-500 dark:text-gray-400">Nails & Beauty & Boutique</p>
            </div>
            {/* Split background effect inside circle */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-rose-50/50 dark:bg-rose-900/10 -z-10"></div>
          </div>
          <div className="absolute top-0 right-10 w-24 h-24 bg-rose-100 dark:bg-rose-900/40 rounded-full -z-10 blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-amber-100 dark:bg-amber-900/40 rounded-full -z-10 blur-xl"></div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white dark:bg-zinc-800 py-12 border-y border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-3xl font-display font-bold text-primary">500+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">Clientas Felices</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-primary">5+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-primary">100%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">Sanitizado</div>
            </div>
            <div>
              <div className="text-3xl font-display font-bold text-primary">4.9</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 uppercase tracking-wide">Calificación</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mixed Preview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-4xl font-bold">Uñas y Estilo</h2>
            <p className="text-gray-600 dark:text-gray-400">Nuestro salón ofrece lo último en técnicas de manicuría, desde el clásico esmaltado hasta diseños personalizados de vanguardia.</p>
            <div className="grid grid-cols-2 gap-4">
              <img className="rounded-xl shadow-md h-48 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbV5cIg_IwX1xOCO8VHQSkJYiKLu-kJHm8nHiZc28t4EfwJKuxx2olQh5ihoMqsdFTGTjQa2CJ1kCC45w2SdlHuvEX_ee6c6VHhaK72TZursYnpVlS6cIQfWf3JWD7G01qqlP1hRkCRLyMEZqgiE1oXZG2sWl29zpJ85yKHI1DTcNDezPpeRti40vpnwd2153Zx97WR5eq878oyTyo6yJ3wg1U2N5xgRtKXCe6WKv9O3JIKqDn90CfjzBdQ0FaPRso5icBGLaa7t4" alt="Nails 1" />
              <img className="rounded-xl shadow-md h-48 w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKDq4uq6pFLEy72xUlz2VioAVhYXXlMEDDX4kDwwJzRRltu2gRiLLJ_PBqMfc9CNPpQ3qldXR9FbAwXlDdwfpviXeEChAdl2rQxDG0hjKJgmVXsVMls2lbL5eKQkWvEdB8Z2VWPgL0RoZ0_2xWKHn457dLukmt6TMUbvK1dND_JQKGGKJIx_alA_Xv_OQ8jSqnKV3z9uAD97pGsaMg3M3IfR23aaS5qy53uqJwCxoF97T5un5EIttmQXb93hDJxQuv7O4qQ58_qmQ" alt="Nails 2" />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="font-display text-4xl font-bold">MiMichos Boutique</h2>
            <p className="text-gray-600 dark:text-gray-400">Explorá nuestra selección curada de regalos, decoración para el hogar y ropa deportiva cómoda para tu día a día.</p>
            <div className="bg-amber-50 dark:bg-amber-900/10 p-8 rounded-2xl border border-amber-100 dark:border-amber-800">
               <div className="flex items-center space-x-4 mb-4">
                 <span className="material-icons text-secondary text-3xl">pets</span>
                 <span className="font-pacific text-2xl text-secondary">MiMichos</span>
               </div>
               <p className="italic text-gray-700 dark:text-gray-300">"Objetos que cuentan historias y traen calidez a tu hogar."</p>
               <Link to="/shop" className="inline-block mt-4 text-secondary font-bold hover:underline">Ir a la Tienda →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
