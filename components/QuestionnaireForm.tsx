import React, { useState } from 'react';
import { QUESTIONNAIRE_DATA } from '../constants';
import type { QuestionnaireItem } from '../types';

export const QuestionnaireForm: React.FC = () => {
    const [checkedState, setCheckedState] = useState<Record<number, boolean>>({});

    const handleToggle = (id: number) => {
        setCheckedState(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div className="space-y-6">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Risk Management Questionnaire</h2>
                <p className="mt-2 text-slate-600">This section covers the initial high-level questions regarding the AI system's goals, impacts, and value, aligning with core principles of AI governance.</p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
                <table className="w-full text-sm text-left text-slate-600">
                    <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                        <tr>
                            <th scope="col" className="p-4">
                                {/* Checkbox column header */}
                            </th>
                            <th scope="col" className="px-6 py-3">Nr</th>
                            <th scope="col" className="px-6 py-3 min-w-[150px]">Control Topic</th>
                            <th scope="col" className="px-6 py-3 min-w-[300px]">Description</th>
                            <th scope="col" className="px-6 py-3 min-w-[200px]">NIST Mapping</th>
                            <th scope="col" className="px-6 py-3 min-w-[200px]">AI Act Article</th>
                        </tr>
                    </thead>
                    <tbody>
                        {QUESTIONNAIRE_DATA.map((item) => {
                            const isChecked = !!checkedState[item.id];
                            return (
                                <tr 
                                    key={item.id} 
                                    className={`border-b transition-colors duration-200 ${isChecked ? 'bg-teal-50/70' : 'bg-white hover:bg-slate-50'}`}
                                >
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id={`q-checkbox-${item.id}`}
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={() => handleToggle(item.id)}
                                                className="w-4 h-4 text-teal-600 bg-slate-100 border-slate-300 rounded focus:ring-teal-500 cursor-pointer"
                                                aria-labelledby={`q-topic-${item.id}`}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-slate-800">{item.id}</td>
                                    <td id={`q-topic-${item.id}`} className={`px-6 py-4 font-semibold ${isChecked ? 'text-slate-500 line-through' : 'text-slate-800'}`}>{item.topic}</td>
                                    <td className={`px-6 py-4 ${isChecked ? 'text-slate-500' : 'text-slate-600'}`}>{item.question}</td>
                                    <td className="px-6 py-4">
                                        <span className="text-slate-700 bg-slate-200 px-2 py-1 rounded-full">{item.nist || 'N/A'}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.article ? (
                                            <span className="text-sky-800 bg-sky-100 px-2 py-1 rounded-full">{item.article}</span>
                                        ) : null}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};