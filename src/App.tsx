import { Suspense, useMemo, useState } from "react";
import Banner from "./component/Banner"
import Navbar from "./component/Navbar"
import TechnologyCards from "./component/Technology Cards/TechnologyCards"
import type { TechnologyCardsType } from "./Types/TechnologycardsType";
import Stack from "./component/Stack/Stack";
import Footer from "./component/Footer";
import { ToastContainer , toast } from "react-toastify";
import "react-toastify/ReactToastify.css"

const TechnologyCardsFetch = async (): Promise<TechnologyCardsType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  const TechnologyCardsPromise = useMemo(() => TechnologyCardsFetch(), []);

  // stack state 
  const [stack, setStack] = useState<TechnologyCardsType[]>([]);

  // add technology to stack 
  const handleAddToStack = (technology: TechnologyCardsType) => {
    
    setStack((previousStack) => {

      // same card not repeat
      const alreadyAdded = previousStack.some(
        (item) => item.id === technology.id
      );

    if(alreadyAdded){
      toast.warning(`${technology.name} is already in your stack!`)
      return previousStack;
    }
 toast.success(`${technology.name} added to stack`);

      return [...previousStack, technology];
    });
  };

  //remove one technology 
  const handleRemoveFromStack = (id: TechnologyCardsType["id"]

  ) => {

    setStack((previousStack) => {
      const removeTechnology = previousStack.find(
        (item) => item.id === id
      );
      if (removeTechnology) {
        toast.error (`${removeTechnology.name} removed from stack!`);
      }
      return previousStack.filter(
        (item) => item.id !== id
      );

    });
  };

  //remove all technology
  const handleRemoveAll = () =>{
    if(stack.length === 0 ) {
      toast.info("stack is already empty!");
      return ;
    }
    setStack([]);
    toast.success("All technology removed!")
  };

  return (
    <>
      <Navbar />
      <Banner />
      

      {/* tech + stack */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-4 gap-4 items-start">
          {/* tech cards */}

          <div className="col-span-3">

            <Suspense fallback={<h2>Loading.......</h2>}>
              <TechnologyCards
                 TechnologyCardsPromise = {TechnologyCardsPromise} 
                 handleAddToStack = {handleAddToStack} 
              />
            </Suspense>
          </div>
          {/* stack */}
          <div className="col-span-1">
            <Stack
            stack={stack}
            handleRemoveFromStack = {handleRemoveFromStack} 
            handleRemoveAll = {handleRemoveAll}
            /> 

          </div>

        </div>

      </div>

       <Footer />

       <ToastContainer />


    </>
  );
}

export default App
