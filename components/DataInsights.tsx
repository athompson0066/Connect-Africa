import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import { Icons } from './Icons';

const gapData = [
  { name: 'North America', gap: 24, coverage: 99 },
  { name: 'Latin America', gap: 30, coverage: 92 },
  { name: 'Asia Pacific', gap: 48, coverage: 90 },
  { name: 'Sub-Saharan Africa', gap: 60, coverage: 83 },
];

const subscriberData = [
    { name: 'Unique Subscribers', baseline: 477, endline: 614 },
    { name: 'Total Connections', baseline: 520, endline: 670 }
];

const techMixData = [
    { name: '2020 Baseline', legacy: 58, fourG: 15, fiveG: 0 },
    { name: '2030 Projection', legacy: 33, fourG: 50, fiveG: 17 }
];

const countryPenetration = [
    { name: 'Nigeria', penetration: 38.1 },
    { name: 'Kenya', penetration: 60 }, // "Strong adoption" inferred
    { name: 'South Africa', penetration: 72.3 },
];

const DataInsights: React.FC = () => {
  return (
    <section id="market" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-brand-blue font-bold tracking-widest text-xs uppercase mb-2 block">2. Workstream 1 Findings</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Context and the Economic Imperative</h2>
            <p className="text-slate-600">
                Africa faces a critical connectivity deficit, with internet usage at 38%. Closing this gap is not just a social goal but a fundamental economic imperative.
            </p>
        </div>

        {/* Economic Imperative Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="w-12 h-12 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <Icons.TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">$220B</h3>
                <p className="text-sm font-semibold text-slate-500 uppercase">Contribution to GDP (2024)</p>
                <p className="text-xs text-slate-400 mt-2">7.7% of GDP</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center relative overflow-hidden ring-2 ring-brand-blue ring-opacity-50">
                <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-2 py-1 rounded-bl-lg">2030 GOAL</div>
                <div className="w-12 h-12 mx-auto bg-blue-100 text-brand-blue rounded-full flex items-center justify-center mb-4">
                    <Icons.Target className="w-6 h-6" />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">$270B</h3>
                <p className="text-sm font-semibold text-slate-500 uppercase">Projected Value (2030)</p>
                <p className="text-xs text-slate-400 mt-2">Driven by 4G/5G deployment</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="w-12 h-12 mx-auto bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Icons.AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">60%</h3>
                <p className="text-sm font-semibold text-slate-500 uppercase">The Usage Gap Crisis</p>
                <p className="text-xs text-slate-400 mt-2">Highest in the world</p>
            </div>
        </div>

        {/* The 60% Usage Gap Crisis */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 h-full">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Icons.Globe className="text-brand-blue w-5 h-5" />
                    Global Usage Gap Comparison
                </h3>
                <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={gapData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                        <XAxis type="number" hide />
                        <YAxis type="category" dataKey="name" width={120} tick={{fontSize: 12, fill: '#64748b'}} />
                        <Tooltip cursor={{fill: '#f1f5f9'}} />
                        <Bar dataKey="gap" name="Usage Gap %" radius={[0, 4, 4, 0]}>
                            {gapData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.name === 'Sub-Saharan Africa' ? '#ef4444' : '#94a3b8'} />
                            ))}
                        </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-sm text-slate-500 mt-4 italic text-center">
                    "Sub-Saharan Africa is the only region where coverage consistently outpaces usage."
                </p>
            </div>
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">The Tripartite Barriers to Adoption</h3>
                <p className="text-slate-600">The 60% Usage Gap is sustained by three interlinked structural barriers that require simultaneous reform.</p>
                
                <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
                        <div className="flex-shrink-0 w-10 h-10 bg-red-50 text-red-500 rounded-lg flex items-center justify-center">
                            <Icons.CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">1. Device Affordability (Price Chasm)</h4>
                            <p className="text-sm text-slate-600 mt-1">Average entry-level 4G smartphone is <strong>$71</strong>, representing &gt;80% of monthly income for the poorest. Feature phones are only <strong>$6</strong>.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
                        <div className="flex-shrink-0 w-10 h-10 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center">
                            <Icons.BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">2. Digital Illiteracy (Language Barrier)</h4>
                            <p className="text-sm text-slate-600 mt-1">Traditional literacy programs are often English-led. Solution: <strong>Native Language AI Agents</strong>.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center">
                            <Icons.Users className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900">3. Gender Gap (Social Barrier)</h4>
                            <p className="text-sm text-slate-600 mt-1">Mobile internet gender gap stands at a stubborn <strong>32%</strong> in SSA. Targeted USF funding is required.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Market Evolution */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-16">
            <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">Baseline (2020) to Endline (2025) Analysis</h3>
                <p className="text-slate-400 max-w-3xl">
                   By the 2025 Endline, the SSA unique user base is projected to surpass half a billion individuals. 
                   Smartphones are expected to account for over 60% of connections.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                   <h4 className="font-bold text-brand-lightBlue mb-6">Unique Mobile Subscribers (Millions)</h4>
                   <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={subscriberData} layout="vertical">
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#334155" />
                            <XAxis type="number" stroke="#94a3b8" />
                            <YAxis type="category" dataKey="name" width={140} stroke="#94a3b8" />
                            <Tooltip contentStyle={{backgroundColor: '#1e293b', border: 'none', color: '#fff'}} />
                            <Legend />
                            <Bar dataKey="baseline" name="2020 Baseline" fill="#475569" />
                            <Bar dataKey="endline" name="2025 Projected" fill="#48cae4" />
                        </BarChart>
                    </ResponsiveContainer>
                   </div>
                   <p className="text-xs text-slate-500 mt-2">Projected Growth: +28.7%.</p>
                </div>

                <div>
                    <h4 className="font-bold text-brand-teal mb-6">Tech Mix Evolution (2030 Forecast)</h4>
                    <div className="space-y-6">
                        {/* 4G */}
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-brand-lightBlue bg-brand-blue/20">
                                    4G Dominance
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-brand-lightBlue">
                                        50%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-slate-700">
                                <div style={{ width: "50%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brand-lightBlue"></div>
                            </div>
                        </div>
                        {/* 5G */}
                         <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-brand-teal bg-brand-teal/20">
                                    5G Emergence
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-brand-teal">
                                        17%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-slate-700">
                                <div style={{ width: "17%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brand-teal"></div>
                            </div>
                        </div>
                        {/* Legacy */}
                         <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-400 bg-slate-700">
                                    Legacy (2G/3G)
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-slate-400">
                                        33%
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-slate-700">
                                <div style={{ width: "33%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-slate-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-700">
                 <h4 className="font-bold text-white mb-6 text-center">Smartphone Penetration by Country (2022/2023)</h4>
                 <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                         <BarChart data={countryPenetration} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                            <XAxis dataKey="name" stroke="#94a3b8" />
                            <YAxis stroke="#94a3b8" unit="%" />
                            <Tooltip contentStyle={{backgroundColor: '#1e293b', border: 'none', color: '#fff'}} cursor={{fill: 'rgba(255,255,255,0.05)'}} />
                            <Bar dataKey="penetration" name="Penetration %" fill="#e9c46a" barSize={60} radius={[4, 4, 0, 0]} />
                         </BarChart>
                    </ResponsiveContainer>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default DataInsights;
