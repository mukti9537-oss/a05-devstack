import { Suspense } from "react";
import Banner from "./component/Banner"
import Navbar from "./component/Navbar"
import TechnologyCards from "./component/Technology Cards/TechnologyCards"

const TechnologyCardsFetch = async () => {
  const res = await fetch("/public/data.json");
  const data = await res.json();
  return data;
}

function App() {
  const TechnologyCardsPromise = TechnologyCardsFetch();
 
  return (
    <>
      <Navbar />
      <Banner />

      <Suspense fallback={<h2>Loading.......</h2>}>
      <TechnologyCards TechnologyCardsPromise = {TechnologyCardsPromise} />
      </Suspense>
    </>
  )
}

export default App
