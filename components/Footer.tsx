import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
                <h4 className="text-white text-lg font-bold mb-4">Connect Africa</h4>
                <p className="text-sm leading-relaxed max-w-sm">
                    A comprehensive report on unlocking mobile connectivity growth in Sub-Saharan Africa. 
                    Prepared for AfDB and Google by CG&R Strategy LLC.
                </p>
            </div>
            <div>
                <h5 className="text-white font-semibold mb-4">Sections</h5>
                <ul className="space-y-2 text-sm">
                    <li><a href="#intro" className="hover:text-brand-lightBlue transition-colors">Introduction</a></li>
                    <li><a href="#market" className="hover:text-brand-lightBlue transition-colors">The Usage Gap</a></li>
                    <li><a href="#cases" className="hover:text-brand-lightBlue transition-colors">Case Studies</a></li>
                    <li><a href="#strategic-blueprint" className="hover:text-brand-lightBlue transition-colors">Strategy</a></li>
                </ul>
            </div>
            <div>
                <h5 className="text-white font-semibold mb-4">Partners</h5>
                <ul className="space-y-2 text-sm">
                    <li>African Development Bank (AfDB)</li>
                    <li>Google</li>
                    <li>CG&R Strategy LLC</li>
                </ul>
            </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; 2025 Mobile Connectivity Report. All rights reserved.</p>
            <p>Data sourced from GSMA, ITU, and local market analysis.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;