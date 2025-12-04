import React, { useState } from 'react';
import { Icons } from './Icons';

const cases = [
  {
    id: 'intelligra',
    title: "Intelligra",
    role: "BNPL Pioneer",
    stats: { main: "200k+", label: "Subscribers", sub: "Nigeria, Rwanda, Tanzania" },
    desc: "Intelligra's core business model is a Buy-Now-Pay-Later (BNPL) scheme where smartphone cost is bundled with airtime and insurance. They utilize a proprietary two-app ecosystem for sales/underwriting and a device locking mechanism for risk mitigation.",
    details: [
      "Customers pre-qualified based on telco network history (anonymized data).",
      "Daily Repayments: Deducted from mobile money accounts to align with daily wages.",
      "Device Locking Technology: Locks device immediately upon missed payment (virtual collateral).",
      "Partnership with MTN Nigeria targeting 1,000 units daily.",
      "Rwanda OTCP: Target migrating 14,500 individuals. Catalytic fund of $2-3M from AfDB crowds in >$6M commercial capital."
    ],
    color: "blue"
  },
  {
    id: 'yellow',
    title: "Yellow Solar",
    role: "Energy + Digital",
    stats: { main: "800k", label: "Families Served", sub: "7 Markets (Malawi, Uganda...)" },
    desc: "A hybrid model leveraging existing solar Pay-As-You-Go (PAYGo) infrastructure to finance smartphones. Yellow takes on full credit risk, serving the hardest-to-reach rural customers.",
    details: [
      "Operational in 7 markets including Malawi, Madagascar, DRC.",
      "Finances $100-$120 devices (Transsion/Samsung). Avoids low-end phones to prevent breakage/default.",
      "High effective interest rate (80-100% APR) reflects high risk and cost of capital.",
      "Proprietary 2-app model: Sales & Underwriting App + Customer Device App.",
      "Transitioning from 'Local Underwriter' to data-enhanced scoring (KYC, Telco data)."
    ],
    color: "orange"
  },
  {
    id: 'mtn',
    title: "MTN Nigeria",
    role: "Telco Orchestrator",
    stats: { main: "300k", label: "Target Devices/Year", sub: "Ecosystem Orchestration" },
    desc: "MTN acts as an orchestrator, using its balance sheet to de-risk finance and connecting OEMs, Financiers, and Retailers.",
    details: [
      "De-risking Finance: Uses credit rating to secure extended credit windows (90-120 days) from OEMs.",
      "Credit Scoring: Uses Airtime Loan services (MTN XtraTime) to assess risk.",
      "Distribution: Partners with financiers who stock existing retail stores (Slot, Microstation).",
      "Bundling: Offers up to 100% bonus data for six months to lower TCO.",
      "Goal: Transition millions to 4G/5G. Default rate target: 2-3%."
    ],
    color: "yellow"
  },
  {
    id: 'leadway',
    title: "Leadway Assurance",
    role: "Agri-InsureTech",
    stats: { main: "1M", label: "Farmer Target", sub: "Rural Resilience" },
    desc: "Distributing smartphones to farmers to enable digital crop insurance. The phone becomes a productive asset for agricultural data digitization.",
    details: [
      "Digital Insurance Nexus: Smartphones enable transition to accurate parametric insurance.",
      "Title to Farm Produce: Phone enables digital traceability and identity.",
      "Risk Sharing: Leadway provides Partial Credit Guarantee (20-30% first-loss) to MFBs.",
      "Integration with Power: Bundled with low-cost solar charging via DAERS program.",
      "Incentive: Timely repayment unlocks discounted insurance and future credit."
    ],
    color: "green"
  }
];

const UseCases: React.FC = () => {
  const [activeCase, setActiveCase] = useState(cases[0]);

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="text-brand-blue font-bold tracking-widest text-xs uppercase mb-2 block">2.1.3.3. Case Study Overview</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Case Studies: Device Financing Solutions</h2>
          <p className="text-slate-600 mt-4 max-w-2xl">
            Insights gained from interviews with Intelligra, Yellow Solar, MTN, and Leadway. These models demonstrate how to overcome the affordability barrier.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {cases.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCase(c)}
                className={`p-6 text-left rounded-xl transition-all border ${
                  activeCase.id === c.id
                    ? 'bg-slate-50 border-brand-blue shadow-md translate-x-2'
                    : 'bg-white border-slate-100 hover:bg-slate-50'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className={`font-bold text-lg ${activeCase.id === c.id ? 'text-brand-blue' : 'text-slate-700'}`}>
                    {c.title}
                  </h3>
                  <span className="text-xs font-semibold px-2 py-1 bg-slate-100 rounded-md text-slate-500">{c.role}</span>
                </div>
                <p className="text-sm text-slate-500 line-clamp-2">{c.desc}</p>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
             <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 h-full animate-fadeIn">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-slate-200">
                    <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">{activeCase.title}</h3>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Icons.Globe className="w-4 h-4" />
                            {activeCase.stats.sub}
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                        <div className="text-4xl font-bold text-brand-darkBlue">{activeCase.stats.main}</div>
                        <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">{activeCase.stats.label}</div>
                    </div>
                </div>

                <div className="mb-8">
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                        <Icons.FileText className="w-5 h-5 text-brand-teal" />
                        Core Business Model
                    </h4>
                    <p className="text-slate-700 leading-relaxed text-lg">
                        {activeCase.desc}
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Icons.CheckCircle2 className="w-5 h-5 text-brand-orange" />
                        Key Success Factors & Operational Details
                    </h4>
                    <ul className="grid gap-3">
                        {activeCase.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0"></span>
                                <span className="text-slate-700 text-sm">{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
