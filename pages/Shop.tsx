
import React from 'react';

const products = [
  { id: 1, name: 'Calzas Soft', price: '$45,00', cat: 'Ropa Deportiva', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZG-fP-la8cbpidFmGDDemAd_RzC3UfB9h1Zap2JRt25vQChBbhlh8yDdr0k56_2F6cLrfVVq5OZ9D8FmhmGelKoRka66CLw3vTqQNE10Bo1qS0pChLOjKVfHF-79sb5HRsvOxYSgs8-VD15IFPxu9F0GrGCLbc4BtxOBWM7ymjBKPo6IGqHTG6yQHPMxgdZLTYfV4FMZhmV53LGCI8ex5PgbSAkyWmi4dtHiVbB19ZkIT__fSjaHb242hSfRLybG_FOznQDJ1X6s' },
  { id: 2, name: 'Mat Ecológico', price: '$62,00', cat: 'Yoga', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlhOyw34bjYrE530RdYPv7B0CKqZLEDBWIheXeogIqggeM9qjQnt7Jxv9XEU0VCyjC7erfrOXUN-vYFU4xi60C13bKXMAgRpfkLbqK_NmuOpHi8j72tTCWSDE_45jK5q_QeSDOZWCBrz1SBoZDsvdOKVATiVCcIWDzG4j5NjtHKOUr-4n-kO21pOTnvW9bsF3_B3l81lkeCJK8baN398jWuYRtwaxGm7lp-Ce8lZ45eZrDsIpwSrMp0mLVaP270fY2ced8LQ5Lews' },
  { id: 3, name: 'Florero Artesanal', price: '$38,00', cat: 'Decoración', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAPRIsqxVWNd_-jT5hNT0sE3klyzQSKO3Hh9WryidAE9DqigFUn1DUcJHqkT9fwk1pinayOz9r9RawYAS7W53yFYsqZyY8cvZfE83wwd96Y6sINxsQwo8_SYoFPxLEknD9-Igr41RXZnEa3JKukgPj_v97mIsZNgq6hmd3CQ6LW_AuOJ06hiIxMM_ObH1H_MUvvIhhRG4CHDZL8VwACkRzwMpl0uEM-J8mSYGLtmuCFAh7Dl3ae_Nx1eRMeqQEYKwtuO3QXDk_2js' },
  { id: 4, name: 'Gatito de Apego', price: '$12,50', cat: 'Mascotas', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVaKYPv387vOdP6PX8jw24dhKv9DO8G9FF-HlL-1JJM3pDGUX7l-TSN8nWRKExGR1aGein97uwGFUDgMgOm_5Uzls9wS6o5DXgwH1soH2zFZPrOF962dOvxEx7mnCsyAZyWVXUgCGDLbv_sX62H6Oxd7dKhtvYUBfrTo351YRVeKPAH3qrHibN4-3KlKd3rvmkWgMhZltNRlffp4eK3qW2IQxVxmqDvLJLi5EOnC1mJP6WXMsQE7quyurNS-vSv0zbN7bHaIkB8ro' },
  { id: 5, name: 'Vela de Soja', price: '$24,00', cat: 'Decoración', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACms7mfOcYhqV3F5_Iom5vZ0QJtlFVens0UrHvvJzbsnTIStocYkOV2CovBh4hp6iJeSw6hhwVZ-487TenbXA3f02Gin4oYKUgpAAuu5dSboMs-va_57bk_Dxi2UkP9M2rjYWMGJ9TGCV-9VUEWTjLXoKtHZdJcsCC7XVZL9E4Ney-97KURz1Zm-EmObLzGuCom66hWIwA7Z8p4GEFeWWrm9xaPQslUm0vy6KyL1qpnDwf_0KwV_r4tKCDP1TKinrDJ49flC4QBjA' },
  { id: 6, name: 'Top Deportivo', price: '$35,00', cat: 'Ropa Deportiva', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCm-aVRBayqzoSgGsMWOgAA6-Gpneb2IEnsIqDZvX4eDhbqGS8glvu2BLBdTHFkN2VugxyiR1Wb3kqYiD5ghpoeI2unqbbsgVfvqYJJ3TjmseQsR75bNCyE9WJOs9qHSHBl_rjRtAbQIafxkqshAfJzYGqmFRZE9n24AsAUTlcUtcwg5-AlDCJpGjNFxDxsSZRwdmkf-ODKY2THdZ4BoynXaEHxRHFp6Qe5J-O5LH7Wqr65azhiafdZWfBXFXO6ULws-p9O7jjHyig' },
];

const Shop: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
        <div>
          <h1 className="text-4xl font-quicksand font-bold text-gray-900 dark:text-white mb-2">MiMichos Boutique</h1>
          <p className="text-gray-500 dark:text-gray-400">Encontrá los mejores regalos y decoración seleccionada.</p>
        </div>
        <div className="flex items-center space-x-4">
           <span className="material-icons-round text-secondary">filter_list</span>
           <select className="bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 rounded-lg text-sm">
             <option>Recomendados</option>
             <option>Menor Precio</option>
             <option>Mayor Precio</option>
           </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(p => (
          <div key={p.id} className="group bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-zinc-700 flex flex-col">
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-zinc-900">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 bg-white/90 dark:bg-zinc-900/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-secondary">{p.cat}</div>
              <button className="absolute top-3 right-3 p-2 bg-white/80 dark:bg-black/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-rose-500 transition-colors">
                <span className="material-icons-round">favorite_border</span>
              </button>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="font-quicksand font-bold text-xl mb-1 group-hover:text-secondary transition-colors">{p.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Calidad premium seleccionada a mano.</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-2xl font-bold">{p.price}</span>
                <button className="p-3 bg-secondary text-white rounded-xl hover:bg-opacity-90 transition-colors shadow-md">
                  <span className="material-icons-round">add_shopping_cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
