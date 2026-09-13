import { Suspense, useMemo } from "react";
import Banner from "./Components/Hero-Section/Banner";
import Navbar from "./Components/Navbar";
import Technology from "./Components/Technologies/Technology";
import type { Itechnology } from "./Components/Types/TechType";

const techFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const techPromise = useMemo(() => techFetch(), []);

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <Technology techPromise={techPromise} />
      </Suspense>
    </>
  );
}

export default App;