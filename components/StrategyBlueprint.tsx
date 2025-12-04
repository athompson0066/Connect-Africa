import React, { useState } from 'react';
import { Icons } from './Icons';

const StrategyBlueprint: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const csfs = [
    {
      title: "Desirable Specs",
      desc: "Minimum specs: 4G LTE, Multi-Sim, 5.5-6.0\" HD+ Screen, 4000mAh Battery, 32GB Storage.",
      icon: Icons.Cpu
    },
    {
      title: "Attractive TCO",
      desc: "Total Cost of Ownership must be affordable. Target device cost: $45-$55 via duty waivers and MoQ commitments.",
      icon: Icons.TrendingUp
    },
    {
      title: "Last Mile Access",
      desc: "Available at the consumer's last mile. Deep distribution in peri-urban and rural areas.",
      icon: Icons.Globe
    }
  ];

  const strategies = [
    {
      id: "option1",
      name: "Option 1: Liquid Market",
      tagline: "Blended Finance & Open Architecture",
      desc: "Aligns with AfDB’s proposed device financing for a Liquid Market model. It is built upon blended financing powered by AFDB’s first loss guarantee, technology-driven risk mitigation, and strong collaboration among multiple partners.",
      participants: "AfDB, Google, MNOs, Fintechs, OEMs, Distributors, Retailers, Aggregators, Insurance",
      mechanics: [
         "Open architecture allowing multiple parties to participate.",
         "Blended finance offer powered by AfDB's first loss guarantee.",
         "Max annualized interest rates agreed between AfDB and banks.",
         "Publish performance progress on KPIs for transparency."
      ]
    },
    {
      id: "option2",
      name: "Option 2: Rural Play",
      tagline: "Agricultural Value Chain Integration",
      desc: "Tailored for rural farmers, similar to the Leadway Assurance use case. It integrates device financing with rural income cycles (harvests) and addresses the lack of power infrastructure.",
      participants: "Leadway Assurance, MFBs, Agritech, Solar Providers (DAERS)",
      mechanics: [
        "Repayment structures aligned with harvest seasons.",
        "Bundled with solar charging kits (Productive Use Asset).",
        "Phone enables digital crop insurance and title to farm produce.",
        "MFBs manage loan origination; Insurance acts as risk buffer."
      ]
    },
    {
      id: "option3",
      name: "Option 3: Leasing Model",
      tagline: "Smartphone-as-a-Lifetime-Subscription",
      desc: "Flips consumer adoption intent from ownership to a lease. Aimed at low-income African consumers who may consider even a 10% downpayment a barrier.",
      participants: "AfDB, Google, MNOs, Fintechs, OEMs (Consignment)",
      mechanics: [
        "Zero upfront cost / Zero deposit.",
        "Simple tiered pricing (Subscription).",
        "Bundled maintenance and regular upgrades.",
        "Premise: AfDB guarantee on MoQ enables OEMs to price devices </=$30."
      ]
    }
  ];

  const risks = [
    { 
      area: "Consumer inertia and friction",
      challenge: "Psychological barrier to large upfront expenditures.",
      mitigation: "No Upfront Cost: Implement zero deposit and instant approval. Daily framing (e.g., 'Your subscription costs only ₦100 per day')." 
    },
    { 
        area: "Consumer inertia and friction",
        challenge: "Consumer distrust due to hidden charges or complex contracts.",
        mitigation: "A Single, Simple, All-Inclusive Price. No hidden charges. The monthly price is framed to feel like paying for airtime, not a loan." 
    },
    { 
        area: "Payment Default Risk",
        challenge: "Missed subscription payments due to volatility.",
        mitigation: "Implement default enrollment in auto-debit. Pre-empt missed payments using 'micro-savings pockets' (smart wallet nudges)." 
    },
    { 
        area: "Payment Default Risk",
        challenge: "Single-point payment failure causing loss of service.",
        mitigation: "Multi-channel payment redundancy: Default triggers include airtime reversal, primary mobile money deduction, and backup relative's number." 
    },
    { 
        area: "Payment Default Risk",
        challenge: "Negative behavioral response to harsh penalties.",
        mitigation: "Gentle, Value-Preserving Penalty: Avoid harsh penalties. Instead, use loss aversion by reducing the next monthly data allocation by 50%." 
    },
    { 
        area: "Asset Management Risk",
        challenge: "Failure to retrieve old devices after the 5-year period.",
        mitigation: "Strong Reinforcement with Guaranteed Reward: Use the endowment effect and loss aversion by guaranteeing rewards for return (e.g., instant 5GB data boost)." 
    }
  ];

  return (
    <section id="strategic-blueprint" className="py-20 bg-brand-darkBlue text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="container mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="text-brand-lightBlue font-bold tracking-widest text-xs uppercase mb-2 block">4. Technical Blueprint Design</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Blueprint: Nigeria Pilot</h2>
                <p className="text-slate-300 max-w-2xl mx-auto">
                    Translating insights into action. From Critical Success Factors (CSFs) to three distinct operational models for the Nigeria pilot.
                </p>
            </div>

            {/* CSFs */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
                {csfs.map((csf, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl">
                        <div className="w-12 h-12 bg-brand-lightBlue/20 rounded-full flex items-center justify-center mb-4 text-brand-lightBlue">
                            <csf.icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-xl mb-2">{csf.title}</h3>
                        <p className="text-sm text-slate-300">{csf.desc}</p>
                    </div>
                ))}
            </div>

            {/* Strategy Options */}
            <div className="bg-white text-slate-900 rounded-2xl overflow-hidden shadow-2xl mb-16">
                <div className="grid lg:grid-cols-12 min-h-[600px]">
                    {/* Tabs */}
                    <div className="lg:col-span-4 bg-slate-50 border-r border-slate-200 p-6 flex flex-col gap-2">
                        <h3 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-4 px-4">Pilot Options</h3>
                        {strategies.map((s, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`p-4 text-left rounded-lg transition-all border-l-4 ${
                                    activeTab === idx 
                                    ? 'bg-white border-brand-blue shadow-sm' 
                                    : 'border-transparent hover:bg-slate-100 text-slate-500'
                                }`}
                            >
                                <h4 className={`font-bold ${activeTab === idx ? 'text-brand-darkBlue' : 'text-slate-700'}`}>{s.name}</h4>
                                <p className="text-xs mt-1 opacity-80">{s.tagline}</p>
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-8 p-8 md:p-12">
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 rounded-full bg-brand-lightBlue/10 text-brand-darkBlue text-xs font-bold uppercase mb-4">
                                {strategies[activeTab].tagline}
                            </span>
                            <h3 className="text-3xl font-bold text-brand-darkBlue mb-4">{strategies[activeTab].name}</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {strategies[activeTab].desc}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <Icons.Users className="w-5 h-5 text-brand-orange" /> Participants
                                </h4>
                                <p className="text-sm text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-100">
                                    {strategies[activeTab].participants}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <Icons.Layers className="w-5 h-5 text-brand-teal" /> Key Mechanics
                                </h4>
                                <ul className="space-y-2">
                                    {strategies[activeTab].mechanics.map((m, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                            <Icons.CheckCircle2 className="w-4 h-4 text-brand-teal mt-0.5 flex-shrink-0" />
                                            {m}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Risk Mitigation Table (Focused on Option 3 per text) */}
            <div className="mb-20">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Icons.ShieldCheck className="w-8 h-8 text-brand-lightBlue" />
                    Option 3: Risks & Mitigation Strategies
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {risks.map((r, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">{r.area}</span>
                            </div>
                            <h4 className="font-bold text-white text-lg mb-3 leading-tight">{r.challenge}</h4>
                            <div className="h-px w-full bg-white/10 mb-3"></div>
                            <p className="text-sm text-slate-300 leading-relaxed"><strong className="text-brand-lightBlue">Mitigation:</strong> {r.mitigation}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Roll-out Phasing */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
                <div className="order-2 lg:order-1">
                    <span className="text-brand-lightBlue font-bold tracking-widest text-xs uppercase mb-2 block">Implementation</span>
                    <h3 className="text-2xl font-bold mb-6">Roll-out Phasing</h3>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                        A smartphone requires a minimum of 4G coverage. We recommend a phased roll out primarily driven by the density of 4G coverage across the 36 States.
                    </p>
                    <div className="space-y-4">
                        <div className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center text-brand-blue flex-shrink-0">
                                <Icons.Signal className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Priority: Dense 4G Coverage</h4>
                                <p className="text-sm text-slate-400">Prioritize states like Lagos, Kano, and Rivers where 4G coverage is high but penetration is under 100%.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                            <div className="w-10 h-10 bg-brand-orange/20 rounded-lg flex items-center justify-center text-brand-orange flex-shrink-0">
                                <Icons.Users className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Target: Youth & Mobility</h4>
                                <p className="text-sm text-slate-400">Youth (20-30) comprise 40% of workforce but 60% of drivers. Leveraging mobility platforms is a win-win.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 lg:order-2 bg-white rounded-2xl overflow-hidden p-2">
                    <img 
                        src="https://www.nperf.com/en/map/NG/-/3196.Airtel/signal?ll=20&lg=0&zoom=3" // Placeholder or static image is better if iframe not allowed
                        alt="Nigeria 4G Coverage Map" 
                        className="w-full h-64 md:h-80 object-cover rounded-xl bg-slate-200"
                        onError={(e) => {
                            e.currentTarget.src = "https://placehold.co/600x400/1e293b/ffffff?text=Nigeria+4G+Coverage+Map";
                        }}
                    />
                    <p className="text-slate-500 text-xs text-center mt-2">Source: nPerf 4G Coverage Map</p>
                </div>
            </div>

            {/* Monitoring and Governance */}
            <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Monitoring and Governance</h3>
                <p className="text-center text-slate-300 mb-8 max-w-3xl mx-auto">
                    A "Hub and Spoke" model allows individual participants independence while optimizing overarching program performance via a central traffic control tower.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-brand-darkBlue p-6 rounded-xl border border-white/10">
                        <h4 className="text-xl font-bold text-brand-lightBlue mb-4 flex items-center gap-2">
                            <Icons.Target className="w-5 h-5" /> Central (Hub)
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-lightBlue mt-1.5"></div>Managing an overarching PMO office.</li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-lightBlue mt-1.5"></div>Definition of common KPIs and adjustments.</li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-lightBlue mt-1.5"></div>Selection and onboarding of participants.</li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-lightBlue mt-1.5"></div>Setting maximum annualized interest rates.</li>
                        </ul>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Icons.Users className="w-5 h-5" /> Individual / Group (Spokes)
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-300">
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>Managing own individual project office.</li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>Setting company specific KPIs (performance based on common KPIs).</li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>Banks/BNPL may create risk/interest tiers (within max limits).</li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5"></div>May organize into groups/collaborations.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};

export default StrategyBlueprint;