import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Introduction', href: '#introduction' },
    { label: 'Market Intelligence', href: '#market' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Blueprint', href: '#strategic-blueprint' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`font-bold text-xl flex items-center gap-2 ${scrolled ? 'text-brand-darkBlue' : 'text-white'}`}>
            <Icons.Signal className={scrolled ? 'text-brand-blue' : 'text-brand-lightBlue'} />
            Connect<span className={scrolled ? 'text-brand-blue' : 'text-brand-lightBlue'}>Africa</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
                <a 
                    key={link.label} 
                    href={link.href} 
                    className={`text-sm font-medium hover:text-brand-lightBlue transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
                >
                    {link.label}
                </a>
            ))}
            <button className={`px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg ${scrolled ? 'bg-brand-darkBlue text-white hover:bg-brand-blue' : 'bg-white text-brand-darkBlue hover:bg-slate-100'}`}>
                Download PDF
            </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen 
                ? <Icons.X className={scrolled ? 'text-slate-900' : 'text-white'} /> 
                : <Icons.Menu className={scrolled ? 'text-slate-900' : 'text-white'} />
            }
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 lg:hidden animate-in slide-in-from-top-5">
                 {navLinks.map((link) => (
                    <a 
                        key={link.label} 
                        href={link.href} 
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-slate-700 font-medium py-3 border-b border-slate-100"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;