import React from 'react';
import type { TechnologyCardsType } from '../../Types/TechnologycardsType';

interface TechnologiesProps {
    TechnologyCards: TechnologyCardsType[];
    handleAddToStack: (TechnologyCard: TechnologyCardsType) => void;
}

const Technologies = ({ TechnologyCards, handleAddToStack }: TechnologiesProps) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-4">

            {TechnologyCards.map((TechnologyCard: TechnologyCardsType) => {
                return (
                    <div key={TechnologyCard.id}>
                        
                        <div className="card bg-base-100 w-full shadow-sm" >
                            {/* icon+ Badge */}
                            <div className="flex items-center justify-between px-5 pt-5">
                                
                                    <img 
                                        src={TechnologyCard.icon}
                                        alt="Icons" 
                                        className="w-10 h-10 object-contain"
                                         />

                                         <span 
                                         className={`badge ${
                                            TechnologyCard.badge === "Popular"
                                            ? "bg-[#F0F9FF] text-[#0EA5E9]"
                                            : TechnologyCard.badge === "Fast"
                                            ? "bg-[#FFEDD5] text-[#EA580C]"
                                            : TechnologyCard.badge === "Essential"
                                            ? "bg-[#F0F9FF] text-[#0284C7]"
                                            : TechnologyCard.badge === "Containers"
                                            ? "bg-[#F0F9FF] text-[#0284C7]"
                                            :  "bg-[#FEE2E2] text-[#DC2626]"
                                         }`}>
                                            {TechnologyCard.badge}
                                         </span>

                                         </div>
                            {/* card body */}
                                <div className="card-body">
                                    {/* Technology name */}

                                    <h2 className="card-title">{TechnologyCard.name}</h2>

                                    <p className="text-sm text-[#64748B]">
                                        {TechnologyCard.description}</p>
                    
                                    {/* category+ dificulty+ rating */}
                                    <div className="flex items-center justify-between mt-3">
                                        <span className="badge badge-outline text-[#475569]"> 
                                            {TechnologyCard.category}
                                        </span>

                                        <span className="text-sm">
                                            {TechnologyCard.difficulty}
                                        </span>

                                        <span className="text-sm">
                                            <span>
                                                ⭐
                                            </span>
                                            {TechnologyCard.rating}
                                        </span>
                                    </div>
                                    {/* price */}
                                    <p>
                                        
                                    </p>

                                    {/* button */}

                                    <div className="card-actions mt-2">
                                        <button 
                                        type = "button"
                                        onClick={() => handleAddToStack(TechnologyCard)}
                                        className="btn btn-primary bg-[#0A0F1D] w-full">Add to Stack</button>
                                    </div>


                                    </div>
                                
                            </div>
                        </div>
                );
            })}
            </div> 
        </div>

    );
}
export default Technologies;