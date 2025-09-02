
import React from 'react';

export const LogoIcon: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-sky-500">
        <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 7L12 12M22 7L12 12M12 22V12M17 4.5L7 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// Fix: Add and export AiAssistantIcon component to resolve import error.
export const AiAssistantIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M12 2.5L13.84 8.66L20 10.5L13.84 12.34L12 18.5L10.16 12.34L4 10.5L10.16 8.66L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M5 18.5L6 16.5L8 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M16 15.5L18 16.5L19 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);

// Fix: Add and export CloseIcon component to resolve import error.
export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} stroke="currentColor">
        <path d="M18 6L6 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// Fix: Add and export LoadingIcon component to resolve import error.
export const LoadingIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`animate-spin h-8 w-8 text-slate-500 ${className ?? ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);
