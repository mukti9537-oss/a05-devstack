import { use } from 'react';
import type { TechnologyCardsType } from '../../Types/TechnologycardsType';
import Technologies from './Technologies';


interface TechnologyCardsProps {
    TechnologyCardsPromise: Promise<TechnologyCardsType[]>;
    handleAddToStack: (technology: TechnologyCardsType) => void;
    stack: TechnologyCardsType[];
}

const TechnologyCards = ({ TechnologyCardsPromise, handleAddToStack , stack }: TechnologyCardsProps) => {
    const TechnologyCards = use(TechnologyCardsPromise);

    return (
        <div className=" container max-w-7xl mx-auto py-5">
            <div>
                <h2 className='font-extrabold text-4xl'>Explore the <span className="h-14 bg-linear-65 from-purple-500 to-pink-500 bg-clip-text text-transparent">Technologies</span></h2>
                <p className="text-[#64748B]">Pick one technologies per category to build your ideal stack</p>
            </div>

            <Technologies 
            TechnologyCards={TechnologyCards}
            handleAddToStack = {handleAddToStack}
            Stack={stack}
            />

        </div>
    );
};

export default TechnologyCards;