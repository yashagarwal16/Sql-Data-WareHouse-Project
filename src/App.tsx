import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Architecture from './components/Architecture';
import Analytics from './components/Analytics';
import DataFlow from './components/DataFlow';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <Architecture />
        <DataFlow />
        <Analytics />
      </main>
      <Footer />
    </div>
  );
}

export default App;