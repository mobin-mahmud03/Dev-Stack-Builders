import React, { use } from 'react';
import type { Itechnology } from '../Types/TechType';
import AvailableTech from '../AvailableTech';

interface techProps {
    techPromise: Promise<Itechnology[]>;
}

const technology = ({ techPromise }: techProps) => {
    const technology = use(techPromise);
    console.log(technology, "technology");
    return (
        <div className="container mx-auto">

            <div>
                <h2 className="text-4xl font-extrabold text-slate-900">
                    Explore the <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold">Technologies</span>
                </h2>
                <p className="mt-2 text-slate-500">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>


            <AvailableTech technology={technology} />
        </div>
    );
};

export default technology;