

import React, { useState, useMemo } from 'react';
import { DOCUMENTATION_DATA } from '../constants';
import { ChecklistItem } from './ChecklistItem';
import type { DocumentationItem } from '../types';

const DocumentationItemComponent: React.FC<{
    item: DocumentationItem;
    isChecked: boolean;
    onToggle: () => void;
}> = ({ item, isChecked, onToggle }) => {
    return (
        <ChecklistItem
            id={item.id}
            title={item.controlName}
            description={item.documentation}
            isChecked={isChecked}
            onToggle={onToggle}
        >
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs items-center">
                <div>
                    <span className="font-semibold text-slate-500 mr-2">Target:</span>
                    <span className="text-indigo-700 bg-indigo-100 px-2 py-1 rounded-full">{item.target}</span>
                </div>
                <div>
                    <span className="font-semibold text-slate-500 mr-2">Articles:</span>
                    <span className="text-teal-700 bg-teal-100 px-2 py-1 rounded-full">{item.articles}</span>
                </div>
            </div>
        </ChecklistItem>
    );
};

export const DocumentationForm: React.FC = () => {
    const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});

    const handleToggle = (id: string) => {
        setCheckedState(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const groupedData = useMemo(() => {
        return DOCUMENTATION_DATA.reduce((acc, item) => {
            const { scope } = item;
            if (!acc[scope]) {
                acc[scope] = [];
            }
            acc[scope].push(item);
            return acc;
        }, {} as Record<string, DocumentationItem[]>);
    }, []);

    return (
        <div className="space-y-6">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Technical Documentation Requirements</h2>
                <p className="mt-2 text-slate-600">This checklist outlines the specific documentation needed for the AI system and its data governance, from provenance to post-market monitoring, to ensure transparency and accountability.</p>
            </div>
            <div className="space-y-8">
                {Object.entries(groupedData).map(([scope, items]) => (
                    <section key={scope} aria-labelledby={`scope-header-${scope}`}>
                        <div className="sticky top-[145px] bg-slate-50/80 backdrop-blur-sm z-10 py-3">
                           <h3 id={`scope-header-${scope}`} className="text-lg font-bold text-sky-800 border-b-2 border-sky-200 pb-2">
                                {scope} Requirements
                           </h3>
                        </div>
                        <div className="space-y-4 mt-4">
                            {items.map(item => (
                                <DocumentationItemComponent
                                    key={item.id}
                                    item={item}
                                    isChecked={!!checkedState[item.id]}
                                    onToggle={() => handleToggle(item.id)}
                                />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};