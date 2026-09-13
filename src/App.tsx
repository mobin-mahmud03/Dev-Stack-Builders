import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Hero-Section/Banner";
import Technology from "./Components/Technologies/Technology";
import YourStack from "./Components/Card/YourStack";
import Footer from "./Components/Footer/Footer";

function App() {
  const [technologies, setTechnologies] = useState<any[]>([]);
  const [stack, setStack] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);

  function handleAddToStack(tech: any) {
    const alreadyExists = stack.some((item) => item.id === tech.id);
    if (alreadyExists) {
      toast.warning(`${tech.name} is already added!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to stack!`);
  }

  function handleRemove(id: string) {
    setStack(stack.filter((item) => item.id !== id));
  }

  function handleRemoveAll() {
    setStack([]);
  }

  return (
    <>
      <Navbar />
      <Banner />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-6 items-start">
          <Technology technologies={technologies} stack={stack} onAddToStack={handleAddToStack} />
          <aside className="lg:sticky lg:top-24">
            <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
          </aside>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
      <Footer />
    </>
  );
}

export default App;