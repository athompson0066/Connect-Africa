import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ExecutiveSummary from './components/ExecutiveSummary';
import ReportIntroduction from './components/ReportIntroduction';
import DataInsights from './components/DataInsights';
import UseCases from './components/UseCases';
import StrategyBlueprint from './components/StrategyBlueprint';
import ChatAssistant from './components/ChatAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 scroll-smooth">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        <ExecutiveSummary />
        <ReportIntroduction />
        <DataInsights />
        <UseCases />
        <StrategyBlueprint />
      </main>

      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default App;