import React from 'react';
import type { Itechnology } from './Types/TechType';
import TechnologyCard from './Card/TechnologyCard';

type AvailableTechProps = {
    Technology: Itechnology[];
};

const AvailableTech = ({ Technology }: AvailableTechProps) => {
    return (
        <div className="grid grid-cols-3 ">
            {Technology.map((TechType: Itechnology) => (
                <TechnologyCard key={TechType.name} technology={TechType} />
            ))}
        </div>
    );
};

export default AvailableTech;