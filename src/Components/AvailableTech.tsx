import React from 'react';
import type { Itechnology } from './Types/TechType';

const AvailableTech = ({ technology }) => {
    console.log(technology, "AvailableTech");

    return <div className="grid grid-cols-3 ">

        {
            technology.map((TechType:Itechnology) => {
                return <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <img src={TechType.icon} alt={`${TechType.name} logo`} className="h-10 w-10 object-contain" />
        {TechType.badge && (
          <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-500">
            {TechType.badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{TechType.name}</h3>
      <p className="mt-1 flex-1 text-sm text-slate-500">{TechType.description}</p>

      <div className="mt-4 flex items-center gap-3 text-sm">
        <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          {TechType.category}
        </span>
        <span className="text-xs text-slate-500">{TechType.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-sm font-semibold text-slate-700">
          ★ {TechType.rating}
        </span>
      </div>

      {/* <button
        type="button"
        onClick={onAddToStack}
        className="mt-4 w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
      >
        Add to Stack
      </button> */}
    </div>
            })
        }

    </div>;
};

export default AvailableTech;