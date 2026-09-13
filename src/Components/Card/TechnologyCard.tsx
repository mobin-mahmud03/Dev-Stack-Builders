 function TechnologyCard({ tech, isAdded, onAddToStack }: any) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={`${tech.name} logo`} className="h-10 w-10 object-contain" />
        {tech.badge && (
          <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-500">
            {tech.badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{tech.name}</h3>
      <p className="mt-1 flex-1 text-sm text-slate-500">{tech.description}</p>

      <div className="mt-4 flex items-center gap-3 text-sm">
        <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
          {tech.category}
        </span>
        <span className="text-xs text-slate-500">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-sm font-semibold text-slate-700">
          ★ {tech.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={onAddToStack}
        disabled={isAdded}
        className={`mt-4 w-full rounded-xl py-3 text-sm font-semibold transition-colors ${
          isAdded ? "bg-slate-100 text-slate-400" : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;