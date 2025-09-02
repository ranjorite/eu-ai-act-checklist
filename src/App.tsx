
import React, { useState } from 'react';
import { QuestionnaireForm } from './components/QuestionnaireForm';
import { DocumentationForm } from './components/DocumentationForm';
import { TabButton } from './components/TabButton';
import { LogoIcon } from './components/icons';

type View = 'questionnaire' | 'documentation';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('questionnaire');

  return (
    <div className="min-h-screen font-sans">
      <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-20 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <LogoIcon />
              <h1 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                EU AI Act Compliance Checklist
              </h1>
            </div>
          </div>
          <nav className="-mb-px flex space-x-6">
            <TabButton 
              isActive={activeView === 'questionnaire'} 
              onClick={() => setActiveView('questionnaire')}
            >
              Questionnaire
            </TabButton>
            <TabButton 
              isActive={activeView === 'documentation'} 
              onClick={() => setActiveView('documentation')}
            >
              Documentation
            </TabButton>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {activeView === 'questionnaire' && <QuestionnaireForm />}
        {activeView === 'documentation' && <DocumentationForm />}
      </main>

      <footer className="text-center p-4 text-slate-500 text-sm">
        <p>Built with React and Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;