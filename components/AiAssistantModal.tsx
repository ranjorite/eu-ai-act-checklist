
import React, { useState, useEffect } from 'react';
import { getAiExplanation } from '../services/geminiService';
import { AiAssistantIcon, CloseIcon, LoadingIcon } from './icons';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  details: string;
  context: string;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose, title, details, context }) => {
  const [explanation, setExplanation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isOpen) {
      const fetchExplanation = async () => {
        setIsLoading(true);
        setError('');
        setExplanation('');

        const prompt = `
          You are an expert consultant on the EU AI Act.
          A user is asking for clarification on a checklist item.

          Checklist Item Title: "${title}"
          Checklist Item Details: "${details}"

          Your task: ${context}

          Format your response in simple markdown. Use headings and bullet points for clarity.
        `;

        try {
          const result = await getAiExplanation(prompt);
          setExplanation(result);
        } catch (err) {
          setError('Failed to fetch explanation.');
        } finally {
          setIsLoading(false);
        }
      };
      
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      fetchExplanation();
    }
  }, [isOpen, title, details, context]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col transform transition-all duration-300 ease-out scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
        style={{ animationName: 'fade-in-scale', animationDuration: '0.3s', animationFillMode: 'forwards' }}
      >
        <div className="flex items-center justify-between p-5 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="bg-sky-100 p-2 rounded-full">
              <AiAssistantIcon className="text-sky-600" />
            </div>
            <h2 className="text-xl font-bold text-slate-800">AI Assistant</h2>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 text-slate-500">
            <CloseIcon />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <h3 className="font-semibold text-lg text-slate-900">{title}</h3>
          <p className="text-sm text-slate-500 italic mt-1">"{details}"</p>

          <hr className="my-4" />

          {isLoading && (
            <div className="flex flex-col items-center justify-center space-y-3 text-slate-600 h-40">
              <LoadingIcon />
              <span>Thinking...</span>
            </div>
          )}
          {error && <div className="text-red-600 bg-red-100 p-3 rounded-md">{error}</div>}
          {explanation && (
            <div 
              className="prose prose-sm max-w-none text-slate-700"
              dangerouslySetInnerHTML={{ __html: explanation.replace(/\n/g, '<br />') }}
            />
          )}
        </div>
      </div>
      <style>{`
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
