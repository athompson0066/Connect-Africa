import { GoogleGenAI } from "@google/genai";

const REPORT_CONTEXT = `
You are an expert AI assistant for a report titled "Unlocking Mobile Connectivity Growth in Sub-Saharan Africa" by AfDB and Google.
Answer questions based strictly on the following full report text:

--- BEGIN REPORT TEXT ---
Unlocking Mobile Connectivity Growth in Sub-Saharan Africa
Understanding Growth, Challenges, and Opportunities for Development

IV. Glossary of Terms
Abbreviation/Term - Definition - Context/Relevance
AfDB - African Development Bank - Potential funding and archive source; project partner.
BNPL - Buy Now, Pay Later - Financing mechanism (identified as a potential primary driver). 52
CSF - Critical Success Factor - Key element reliably boosting digital inclusion or program success. 53
FX - Foreign Exchange - Risk factor in financial modeling (FX exposure). 54
Glo - Globacom - Mobile Network Operator (MNO) in Nigeria. 55
GSMA - Global System for Mobile Communications Association - Data source (GSMA Intelligence). 56
ITU - International Telecommunication Union - Data source for quantifying regional baselines. 57
KPIs - Key Performance Indicators - Metrics for measuring the pilot Program’s success. 58
LoIs - Letters of Intent - Non-binding agreement to secure partner commitment. 59
MNO - Mobile Network Operator - Key sponsor type and partner (e.g., MTN, Airtel, Glo, 9mobile). 60
MTN - Mobile Telephone Networks - Mobile Network Operator (MNO) in Nigeria. 61
NBS - National Bureau of Statistics (Nigeria) - Data source for quantifying regional baselines. 62
NCC - Nigerian Communications Commission - Regulator in Nigeria; data source. 63
OEM - Original Equipment Manufacturer - Key sponsor type and partner (e.g., Transsion, Samsung, Xiaomi). 64
PAYGo - Pay-As-You-Go - Device financing mechanism, often tied to device-locking. 65
USF/USO - Universal Service Fund / Universal Service Obligation - Funding for promoting connectivity (e.g., broadband expansion). 66

1. Introduction
a. Project Background and Objectives
Across Sub-Saharan Africa, the smartphone has become the single most powerful gateway to digital participation, yet the region continues to experience the world’s widest gap between mobile network coverage and actual usage. As of 2025, roughly 59 percent of people in Sub-Saharan Africa are covered by a mobile-network signal but remain offline, while 15 percent still live outside any mobile connectivity footprint. This disconnect stems less from network absence than from barriers of device affordability and user capability. For many households, even an entry-level 4G handset can represent more than 80 percent of monthly income, effectively excluding millions from the benefits of digital participation. 
The digital landscape itself is evolving rapidly. 4G is expected to reach about half of all mobile connections by 2030, while early 5G deployments will begin adding an estimated $10 billion in annual economic value. However, those gains depend on affordable, capable devices reaching first-time users rather than remaining concentrated among urban elites. At the same time, the price of connectivity has declined globally, yet Africa’s data and device costs remain among the highest relative to income. Without urgent intervention to lower these structural barriers, the region risks deepening its digital divide even as the rest of the world continues to leap forward.
Nigeria provides an ideal starting point for such intervention. It is Africa’s largest smartphone market and one of its most dynamic digital economies, yet the country still has more than 80 million unconnected adults. It has a relatively low cost of mobile data at about $0.38 per 1 gigabyte (on par with China, Brazil and Ghana) and yet it has one of the lowest mobile data consumption per capita. This suggests that there is head room for driving significantly more smartphone adoption even at current mobile data costs. Domestic demand skews toward low- and mid-range models dominated by the Transsion brands (Tecno, itel and Infinix), which collectively account for roughly two-thirds of shipments. These brands have built strong last-mile distribution networks and cater to the very demographic the program targets—first-time smartphone users. And yet 80 million adult Nigerians remain unconnected. This suggests that “business as usual” mechanisms by market operators may not achieve a dramatic change without structural interventions. By piloting in Nigeria, the program can test the suite of interventions that can catalyse rapid adoption. The assumption is that such a suite will necessarily comprise financing, distribution, and ecosystem solutions. 
The initiative unites the complementary capabilities of the African Development Bank (AfDB) and Google. 
AfDB brings financing architecture, policy leverage, and de-risking instruments through its Africa Digital Financial Inclusion Facility (ADFI), while Google contributes its Android ecosystem, digital-skills programs, and local partnerships with MNOs and fintechs. Together they can address both sides of the affordability equation: reducing the upfront cost of ownership through blended finance and micro-credit, and enhancing long-term value through connectivity, digital literacy, and local-content integration.
Accordingly, the program’s core objective is to design and validate a scalable, financially sustainable model for rapidly accelerating smartphone access—one that combines innovative financing (usage-based credit, Buy Now Pay Later (BNPL or Pay As You Go mechanisms), efficient supply chains, and user-centric support systems. Through a structured Nigeria pilot, the project seeks to demonstrate measurable increases in smartphone penetration, usage intensity, and repayment performance, thereby creating a template that can be adapted across different African market archetypes.

b. Scope of Work: Workstreams and Phases
The project was structured into four coordinated workstreams designed to move from evidence gathering to pilot execution and, ultimately, regional replication.
i. Workstream 1
The first workstream focused on a continental scan of existing smartphone-inclusion efforts, affordability initiatives, and related digital-access programs. This diagnostic phase identified common enablers and pitfalls across regions by examining penetration baselines, target segments, delivery models, and financing structures.
ii. Workstream 2
The second workstream summarized the findings into three Critical Success Factors (CSFs) for accelerating smartphone penetration which the team has termed the 3 promises.
1. Provide smartphones that a low to middle income consumer will want to buy - minimum desirable entry-level device specifications
2. At an attractive total cost of ownership - does not exceed x% of their monthly income.
3. Make such smart phones available and accessible to consumers - at the consumer’s last mile.
These three promises are made possible primarily through the seamless coordination of multiple actors such as MNOs, OEMs, Banks/Financiers, Fintechs, Merchants and Distributors who collectively contribute the following:
A. Guaranteed minimum order quantities (MoQ)
B. Inventory of the phones with the desired specs in the right volumes
C. Delivered final device price in line with the promise
D. Device finance interest rates in line with the promise
E. Device locking and other risk mitigation mechanisms
F. Deep distribution to the last mile especially in peri-urban and rural areas
G. Open architecture that leverages capabilities from multiple parties
Workstream 3
The third workstream delivered the Nigeria Pilot Blueprint, the central design output of the project. It specifies target states and population segments, rollout sequencing, minimum device specifications, last-mile price bands, and distribution channels.
iii. Workstream 4
Finally, the fourth workstream extends beyond Nigeria to formulate a Continental Market Archetype Framework. By clustering countries according to their digital maturity, credit readiness, and regulatory context, the framework provides a structured approach for scaling.

c. Data Gathering Methodologies
The evidence base for the program relies on a combination of quantitative intelligence, qualitative insights, and structured validation exercises.
The first layer draws on secondary data sources from global and regional bodies such as the GSMA, ITU, AfDB, and the World Bank.
The second layer incorporates a comparative program review, examining both successful and unsuccessful initiatives.
The third layer focuses on financial structuring inputs, leveraging AfDB and Africa Digital Financial Inclusion Facility (ADFI) documentation.
Finally, the fourth layer involves primary research through direct stakeholder engagement (interviews with MNOs, OEMs, Fintechs).

2. Workstream 1 - Africa -Wide Scan - Smartphone Ownership and Digital Inclusion Programs
Context and the Economic Imperative
Africa faces a critical connectivity deficit, with internet usage at 38%, significantly below the global average of 68%.
The mobile ecosystem contributes $220 billion (7.7% of GDP) in 2024. This is projected to rise to $270 billion by 2030.
Poverty Reduction: In Senegal, 3G access was linked to a 14% increase in household consumption and a 10% decline in extreme poverty.
Usage Gap: Even where 4G/5G networks are present, a significant "usage gap" exists—the difference between the number of people covered by a mobile broadband network and those actually using mobile internet do not align. The current Usage Gap is 60%—the highest in the world.
Investment Intervention Segmentation:
Central Africa: Coverage Gap (39% outside coverage). Recommended: Hard Infrastructure CAPEX.
Southern, West, & East Africa: Usage Gap (Only ~12% outside coverage). Recommended: Consumer-Facing Policies.

Barriers to Adoption:
1. Device Affordability: Average entry-level 4G smartphone in SSA costs $71.
2. Digital Illiteracy: Lack of digital literacy prevents users from utilizing smartphones. Solution: Native Language AI Agents.
3. Gender Gap: Mobile internet gender gap stands at 32%.

Market Data (Baseline 2020 -> Endline 2025):
Unique Mobile Subscribers: 477M (2020) -> 614M (2025). (+28.7%)
Tech Mix: 4G set to become dominant (50% by 2030). 5G to reach 17% by 2030.

Case Studies (Workstream 1 Findings):
Intelligra (BNPL Pioneer): 200k+ subscribers. Uses two-app ecosystem and device locking. Daily repayments from mobile money. Partnered with MTN.
Yellow Solar (Energy + Digital): 800k families. Hybrid model (Solar + Phone). High effective interest (80-100%). Uses "Local Underwriter" model.
MTN Nigeria (Telco Orchestrator): Targeting 300k devices/year. De-risks finance using balance sheet. Uses airtime loan history for credit scoring.
Leadway Assurance (Agri-InsureTech): Target 1M farmers. Phones enable digital crop insurance. First-loss guarantee to MFBs. Bundled with solar charging.

3. Workstream 2 - Critical Success Factors (CSFs)
Target: 30% of 80M unconnected Nigerians (24M people) migrated to smartphones in 5 years.
Structural CSFs:
1. Desirable Specs: 4G LTE, Multi-Sim, 5.5-6.0" HD+, 4000-5000mAh Battery, 32GB Storage.
2. Affordable TCO: Target device cost $45-$55 via duty waivers.
Behavioural CSF: Eliminating friction and overcoming inertia.

4. Technical Blueprint Design for Nigeria Pilot
Option 1: Liquid Market. Blended financing powered by AFDB’s first loss guarantee. Open architecture.
Option 2: Rural Play. Aligned with harvest cycles.
Option 3: Smartphone-as-a-Lifetime-Subscription (Lease). Zero upfront cost. Low device cost (<$30) premise.
Key Risks (Option 3): Consumer Inertia (Mitigation: Lower downpayment), Distrust (Mitigation: Simple price), Missed Payments (Mitigation: Auto-debit, Gentle Lock).

Roll-out Phasing:
Prioritize states with dense 4G coverage but low smartphone penetration (e.g., Kano, Kaduna, Ogun).
Target Demographics: Youth (20-30 years old), Mobility/Delivery drivers.

Monitoring and Governance:
Central Hub (PMO) vs Spokes (Individual Participants).
Common KPIs defined by Hub.
--- END REPORT TEXT ---
`;

// Helper to safely retrieve API Key from various environments without crashing
const getApiKey = (): string | undefined => {
  // 1. Try Import Meta (Vite/Modern Bundlers)
  // @ts-ignore
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    // @ts-ignore
    const v = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_API_KEY || import.meta.env.Gemini_API_Key || import.meta.env.GEMINI_API_KEY;
    if (v) return v;
  }
  
  // 2. Try Global Process (Webpack/Node/Next.js)
  // We wrap this in try-catch because simply accessing 'process' in some strict browser environments can throw ReferenceError
  try {
    if (typeof process !== 'undefined' && process.env) {
      return process.env.API_KEY || process.env.GEMINI_API_KEY || process.env.Gemini_API_Key || process.env.REACT_APP_GEMINI_API_KEY;
    }
  } catch (e) {
    // Ignore errors if process is not defined
  }
  
  return undefined;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const apiKey = getApiKey();
    
    if (!apiKey) {
      console.warn("API Key missing. Checked: API_KEY, GEMINI_API_KEY, Gemini_API_Key");
      return "API Key is missing. If you are seeing this, please ensure you have added 'Gemini_API_Key' to your Vercel Environment Variables.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: REPORT_CONTEXT,
      }
    });

    return response.text || "I couldn't generate a response based on the report data.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request. Please ensure your API Key is valid.";
  }
};