import React from 'react';
import banner from '../../assets/banner-stack.png'

const Banner = () => {
    return (
        <div className="flex justify-between items-center container mx-auto py-10">
            <div>
                <div>
                    <h1 className="text-5xl font-extrabold text-slate-900 ">Build Your Ideal</h1>
                    <h1 className="text-5xl bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 bg-clip-text text-transparent font-extrabold">
                        Development Stack
                    </h1>
                    <p className="mt-6 max-w-xl text-lg text-slate-600">Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                    <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold px-5 py-2.5 rounded-md">
                        Explore Technologies →
                    </button>
                    <button className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">Learn More</button>
                </div>
            </div>
            <div className="pr-20">
                <img src={banner} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;