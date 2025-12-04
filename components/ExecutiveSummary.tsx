import React from 'react';
import { Icons } from './Icons';

const ExecutiveSummary: React.FC = () => {
  return (
    <section id="executive-summary" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="text-brand-blue font-bold tracking-widest text-xs uppercase mb-2 block">High-Level Overview</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Executive Summary</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Sub-Saharan Africa faces a critical connectivity paradox: while network coverage expands, the <strong>Usage Gap</strong> remains the widest in the world. 
            This report outlines a strategic framework to bridge this divide, unlocking <strong>$270 billion</strong> in economic value by 2030 through targeted interventions in device affordability and digital inclusion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* The Problem */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Icons.AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">The Usage Gap Crisis</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              <strong>60%</strong> of the population (~710 million people) lives within range of a mobile broadband signal but does not use mobile internet.
            </p>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-red-500 w-[60%]"></div>
            </div>
            <p className="text-xs text-slate-400 mt-2 text-right">60% Gap</p>
          </div>

          {/* The Opportunity */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Icons.TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Economic Imperative</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Closing the gap is essential for growth. The mobile ecosystem contributed <strong>$220 billion</strong> (7.7% of GDP) in 2024 and is projected to reach <strong>$270 billion</strong> by 2030.
            </p>
            <ul className="text-sm text-slate-500 space-y-2">
              <li className="flex items-center gap-2"><Icons.CheckCircle2 className="w-4 h-4 text-green-500" /> Poverty Reduction</li>
              <li className="flex items-center gap-2"><Icons.CheckCircle2 className="w-4 h-4 text-green-500" /> Job Creation</li>
            </ul>
          </div>

          {/* The Pilot */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all group md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Icons.Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">The Nigeria Pilot</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              A blueprint to migrate <strong>24 million</strong> unconnected Nigerians (30% of the target) to smartphones within 5 years.
            </p>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold text-slate-500 uppercase">Target</span>
                <span className="text-xs font-bold text-brand-blue">30% Adoption</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-brand-blue h-2 rounded-full w-[30%]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-brand-darkBlue text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lightBlue/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-8 text-center">Strategic Blueprint: Three Paths to Scale</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-lightBlue">
                  <Icons.Layers className="w-6 h-6" />
                  <h4 className="font-bold text-lg">1. Liquid Market</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Utilizing <strong>Blended Finance</strong> powered by AfDB's first-loss guarantees to de-risk lending for banks and fintechs, enabling lower interest rates for consumers.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-teal">
                  <Icons.Sun className="w-6 h-6" />
                  <h4 className="font-bold text-lg">2. Rural Play</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Integrating device financing with <strong>Harvest Cycles</strong> and solar power systems (DAERS program) to serve rural farmers and agricultural value chains.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-brand-orange">
                  <Icons.Smartphone className="w-6 h-6" />
                  <h4 className="font-bold text-lg">3. Leasing Model</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  A revolutionary "Smartphone-as-a-Subscription" model with <strong>Zero Upfront Cost</strong>, designed to overcome the barrier of down payments for low-income users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;