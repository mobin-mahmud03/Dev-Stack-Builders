import TechnologyCard from "../Card/TechnologyCard";

 function Technology({ technologies, stack, onAddToStack }: any) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {technologies.map((tech: any) => {
        const isAdded = stack.some((item: any) => item.id === tech.id);
        return (
          <TechnologyCard
            key={tech.id}
            tech={tech}
            isAdded={isAdded}
            onAddToStack={() => onAddToStack(tech)}
          />
        );
      })}
    </div>
  );
}

export default Technology;