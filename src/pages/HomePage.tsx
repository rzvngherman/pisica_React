import React from 'react';
import { Sparkles, Fish, Box } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-stone-900 h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://picsum.photos/1600/900?grayscale" 
          alt="Botic Mâțescu Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
            Faceți cunoștință cu <span className="text-orange-400">Botic</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 font-light leading-relaxed drop-shadow-md">
            Conducătorul sufrageriei, cuceritorul cutiilor de carton și profesionistul în a trage un pui de somn.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Cine este Botic Mâțescu?</h2>
            <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
            <p className="text-lg text-stone-600 leading-relaxed">
              Botic Mâțescu nu este doar un motan; el este un stil de viață. Născut cu un simț al stilului impecabil și o coadă care exprimă mai mult decât ar putea vreodată cuvintele, Botic și-a dedicat cele nouă vieți căutării confortului și excelenței culinare.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Când nu supraveghează strict păsările de la pervazul ferestrei, îl puteți găsi exersând sprintul la 3 dimineața sau cerând un al doilea mic dejun cu vocalizări persuasive.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                <div className="bg-orange-100 p-3 rounded-full mb-3 text-orange-600">
                  <Fish size={24} />
                </div>
                <span className="font-semibold text-stone-800">Iubitor de elastic de par</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                <div className="bg-orange-100 p-3 rounded-full mb-3 text-orange-600">
                  <Box size={24} />
                </div>
                <span className="font-semibold text-stone-800">Expert in cutii</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                <div className="bg-orange-100 p-3 rounded-full mb-3 text-orange-600">
                  <Sparkles size={24} />
                </div>
                <span className="font-semibold text-stone-800">Fabulos</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
             <div className="absolute -inset-4 bg-orange-200 rounded-2xl transform rotate-3 transition-transform hover:rotate-2"></div>
            <img 
              src="https://picsum.photos/600/800" 
              alt="Botic Portrait" 
              className="relative rounded-xl shadow-xl w-full object-cover h-[500px] hover:scale-[1.01] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;