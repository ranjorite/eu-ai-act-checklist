
import React from 'react';

interface ChecklistItemProps {
  id: string;
  title: string;
  description: string;
  isChecked: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}

export const ChecklistItem: React.FC<ChecklistItemProps> = ({ id, title, description, isChecked, onToggle, children }) => {
  return (
    <div className={`bg-white p-5 rounded-lg shadow-sm border transition-all duration-300 ${isChecked ? 'border-teal-300 bg-teal-50/50' : 'border-slate-200'}`}>
      <div className="flex items-start space-x-4">
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={onToggle}
          className="h-5 w-5 rounded border-slate-300 text-teal-600 focus:ring-teal-500 mt-1 cursor-pointer"
        />
        <div className="flex-1">
          <label htmlFor={id} className="cursor-pointer">
            <h3 className={`font-bold text-lg ${isChecked ? 'text-slate-500 line-through' : 'text-slate-800'}`}>{title}</h3>
            <p className={`mt-1 text-slate-600 ${isChecked ? 'text-slate-500' : ''}`}>{description}</p>
          </label>
          {children}
        </div>
      </div>
    </div>
  );
};