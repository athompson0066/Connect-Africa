import React from 'react';
import { Icons } from './Icons';

const Hero: React.FC = () => {
  return (
    <div id="intro" className="relative bg-slate-900 text-white min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
          alt="African connectivity" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/30 backdrop-blur-md">
            <Icons.Signal className="w-4 h-4 text-brand-lightBlue" />
            <span className="text-xs font-semibold text-brand-lightBlue tracking-widest uppercase">Prepared for AfDB and Google</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight font-display">
            Unlocking Mobile <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lightBlue to-brand-teal">Connectivity Growth</span> <br/>
            in Sub-Saharan Africa
          </h1>
          
          <div className="h-1 w-24 bg-brand-orange rounded-full"></div>

          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-light">
            Understanding Growth, Challenges, and Opportunities for Development. 
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <a href="#executive-summary" className="px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-darkBlue transition-all shadow-lg shadow-brand-blue/20 flex items-center justify-center gap-2">
              Read Executive Summary <Icons.ChevronRight className="w-5 h-5" />
            </a>
            <a href="#strategic-blueprint" className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white font-medium rounded-lg transition-all backdrop-blur-sm">
              View Strategic Blueprint
            </a>
          </div>
        </div>

        {/* Decorative stats card */}
        <div className="md:col-span-4 hidden md:block">
           <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl relative overflow-hidden group hover:bg-white/10 transition-all duration-500">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl group-hover:bg-brand-blue/30 transition-all"></div>
              
              <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-2">The Defining Problem</h3>
              <p className="text-4xl font-bold text-white mb-6">The Usage Gap</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-orange/20 rounded-lg text-brand-orange">
                     <Icons.Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">60%</div>
                    <div className="text-xs text-slate-400">Of SSA Population</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-teal/20 rounded-lg text-brand-teal">
                     <Icons.TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">710 Million</div>
                    <div className="text-xs text-slate-400">People covered but offline</div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;