import React, { useState } from 'react';
import { Icons } from './Icons';

const ReportIntroduction: React.FC = () => {
  const [showGlossary, setShowGlossary] = useState(false);

  const glossary = [
    { term: "AfDB", def: "African Development Bank", context: "Potential funding and archive source; project partner." },
    { term: "BNPL", def: "Buy Now, Pay Later", context: "Financing mechanism (identified as a potential primary driver)." },
    { term: "CSF", def: "Critical Success Factor", context: "Key element reliably boosting digital inclusion or program success." },
    { term: "FX", def: "Foreign Exchange", context: "Risk factor in financial modeling (FX exposure)." },
    { term: "GSMA", def: "Global System for Mobile Communications Association", context: "Data source (GSMA Intelligence)." },
    { term: "ITU", def: "International Telecommunication Union", context: "Data source for quantifying regional baselines." },
    { term: "KPIs", def: "Key Performance Indicators", context: "Metrics for measuring the pilot Program’s success." },
    { term: "MNO", def: "Mobile Network Operator", context: "Key sponsor type and partner (e.g., MTN, Airtel, Glo, 9mobile)." },
    { term: "NCC", def: "Nigerian Communications Commission", context: "Regulator in Nigeria; data source." },
    { term: "OEM", def: "Original Equipment Manufacturer", context: "Key sponsor type and partner (e.g., Transsion, Samsung, Xiaomi)." },
    { term: "PAYGo", def: "Pay-As-You-Go", context: "Device financing mechanism, often tied to device-locking." },
    { term: "USF/USO", def: "Universal Service Fund / Universal Service Obligation", context: "Funding for promoting connectivity." },
  ];

  return (
    <section id="introduction" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Glossary Toggle */}
        <div className="flex justify-end mb-8">
            <button 
                onClick={() => setShowGlossary(!showGlossary)}
                className="flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-darkBlue transition-colors"
            >
                <Icons.BookOpen className="w-4 h-4" />
                {showGlossary ? "Hide Glossary" : "View Glossary of Terms"}
            </button>
        </div>

        {/* Glossary Section */}
        {showGlossary && (
            <div className="mb-16 bg-slate-50 rounded-xl p-6 border border-slate-200 animate-in slide-in-from-top-4 fade-in">
                <h3 className="text-xl font-bold mb-6 text-brand-darkBlue">IV. Glossary of Terms</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {glossary.map((item, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-bold text-brand-blue">{item.term}</span>
                            </div>
                            <p className="text-xs font-semibold text-slate-900 mb-1">{item.def}</p>
                            <p className="text-xs text-slate-500 italic">{item.context}</p>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* Intro Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <span className="text-brand-blue font-bold tracking-widest text-xs uppercase mb-2 block">1. Introduction</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Project Background and Objectives
          </h2>
          <div className="prose prose-lg text-slate-600 leading-relaxed text-justify">
            <p className="mb-4">
              Across Sub-Saharan Africa, the smartphone has become the single most powerful gateway to digital participation, 
              yet the region continues to experience the world’s widest gap between mobile network coverage and actual usage. 
              As of 2025, roughly <strong>59 percent</strong> of people in Sub-Saharan Africa are covered by a mobile-network signal but remain offline, 
              while 15 percent still live outside any mobile connectivity footprint.
            </p>
            <p className="mb-4">
              Nigeria provides an ideal starting point for such intervention. It is Africa’s largest smartphone market and one of its most dynamic digital economies, 
              yet the country still has more than <strong>80 million unconnected adults</strong>.
            </p>
            <p>
              The initiative unites the complementary capabilities of the <strong>African Development Bank (AfDB)</strong> and <strong>Google</strong>. 
              AfDB brings financing architecture, policy leverage, and de-risking instruments through its Africa Digital Financial Inclusion Facility (ADFI), 
              while Google contributes its Android ecosystem, digital-skills programs, and local partnerships. Together they can address both sides of the affordability equation.
            </p>
          </div>
        </div>

        {/* Workstreams */}
        <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">b. Scope of Work: Workstreams and Phases</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                {
                id: 1,
                title: "Continental Scan",
                desc: "Focused on a continental scan of existing smartphone-inclusion efforts, identifying common enablers and pitfalls across regions.",
                icon: Icons.Globe
                },
                {
                id: 2,
                title: "Critical Success Factors",
                desc: "Summarized findings into three Critical Success Factors (CSFs) or 'The 3 Promises' for accelerating smartphone penetration.",
                icon: Icons.Target
                },
                {
                id: 3,
                title: "Nigeria Pilot Blueprint",
                desc: "Delivered the Nigeria Pilot Blueprint, specifying target states, rollout sequencing, and financial architecture.",
                icon: Icons.FileText
                },
                {
                id: 4,
                title: "Market Archetype",
                desc: "Formulate a Continental Market Archetype Framework to guide how pilot lessons are localized for other markets.",
                icon: Icons.Layers
                }
            ].map((ws) => (
                <div key={ws.id} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center text-brand-blue mb-4">
                    <ws.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Workstream {ws.id}</h4>
                <p className="font-semibold text-sm text-slate-800 mb-2">{ws.title}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{ws.desc}</p>
                </div>
            ))}
            </div>
        </div>

        {/* Methodology */}
        <div className="bg-brand-darkBlue text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">c. Data Gathering Methodologies</h3>
              <p className="text-slate-300 mb-6 text-sm">
                The evidence base relies on a layered combination of quantitative intelligence and qualitative insights, progressing from secondary data synthesis to targeted primary engagement.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1"><Icons.Layers className="w-4 h-4 text-brand-lightBlue" /></div>
                  <span className="text-sm text-slate-200"><strong>Layer 1:</strong> Secondary data from GSMA, ITU, AfDB, World Bank, NCC, and NBS.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1"><Icons.Layers className="w-4 h-4 text-brand-lightBlue" /></div>
                  <span className="text-sm text-slate-200"><strong>Layer 2:</strong> Comparative program review of successful/unsuccessful initiatives (e.g., GSMA Device Affordability Coalition).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1"><Icons.Layers className="w-4 h-4 text-brand-lightBlue" /></div>
                  <span className="text-sm text-slate-200"><strong>Layer 3:</strong> Financial structuring inputs leveraging AfDB and ADFI documentation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1"><Icons.Layers className="w-4 h-4 text-brand-lightBlue" /></div>
                  <span className="text-sm text-slate-200"><strong>Layer 4:</strong> Primary research through direct stakeholder engagement (MNOs, OEMs, Fintechs) and consumer surveys.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm border border-white/10">
               <div className="flex items-center gap-4 mb-4 border-b border-white/10 pb-4">
                 <div className="text-5xl font-bold text-brand-orange">4</div>
                 <div className="text-sm font-semibold">Layers of <br/>Evidence</div>
               </div>
               <p className="text-xs text-slate-300 italic leading-relaxed">
                 "Every design choice is anchored in real-world data and market behavior. The methodology is layered to progress from secondary data synthesis to targeted primary engagement."
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportIntroduction;
