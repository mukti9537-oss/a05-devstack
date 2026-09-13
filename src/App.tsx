import { Suspense, useMemo, useState } from "react";
import Banner from "./component/Banner"
import Navbar from "./component/Navbar"
import TechnologyCards from "./component/Technology Cards/TechnologyCards"
import type { TechnologyCardsType } from "./Types/TechnologycardsType";
import Stack from "./component/Stack/Stack";

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
      if (alreadyAdded) {
        return previousStack;
      }
      return [...previousStack, technology];
    });
  };
  //remove one technology 
  const handleRemoveFromStack = (id: TechnologyCardsType["id"]

  ) => {

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );
  };
  //remove all technology
  const handleRemoveAll = () =>{
    setStack([]);
  };

  return (
    <>
      <Navbar />
      <Banner />

      {/* tech + stack */}
      <div className="container mx-auto px-5">
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


    </>
  );
}

export default App
