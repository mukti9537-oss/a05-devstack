import type { TechnologyCardsType } from '../../Types/TechnologycardsType';

type StackProps = {
    stack: TechnologyCardsType[];
    handleRemoveFromStack: (id: TechnologyCardsType["id"]) => void;
    handleRemoveAll: () => void;
};

const Stack = ({ stack, handleRemoveFromStack, handleRemoveAll }: StackProps) => {
    return (
        <div className="card bg-base-100 shadow-sm border border-gray-200">

            <div className="card-body">

                {/* header */}
                <div>

                    <h2 className="card-title">
                        Your Stack
                    </h2>

                    <p className="text-sm text-gray-500">
                        {stack.length} technologies selected
                    </p>
                </div>

                {/* empty stack */}
                {stack.length === 0 ? (
                    <div className="border rounded-lg p-6 text-center mt-3">
                        <p className="text-sm text-gray-400">
                            Your stack is empty
                        </p>

                        <p className="text-sm text-gray-400 mt-1">
                            Add technologics from the cards
                        </p>
                    </div>
                ) : (
                    // selected tech 
                    <div className="space-y-3 mt-3">
                        {stack.map((technology) => (
                            <div
                                key={technology.id}
                                className="border rounded-lg p-3"
                            >

                                <div className="flex items-center justify-between">

                                    {/* technology info  */}

                                    <div className="flex items-center gap-2">
                                        <img
                                            src={technology.icon}
                                            alt={technology.icon}
                                            className="w-8 h-8 object-contain"
                                        />

                                        <div>
                                            <h3 className="font-semibold text-sm">
                                                {technology.name}
                                            </h3>

                                            <p className="text-xs text-gray-500">
                                                {technology.category}
                                            </p>
                                        </div>
                                    </div>

                                    {/*  x remove button */}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            handleRemoveFromStack(technology.id)
                                        }
                                        className="text-[#94A3B8] hover:text-red-500 text-xl font-bold"
                                    >
                                        X
                                    </button>
                                </div>
                            </div>
                        ))}

                        
                        <button 
                        type="button"
                        onClick={handleRemoveAll}
                        className="btn w-full bg-[#f1d6d5] text-[#D82C20] mt-2"
                        >
                            Remove All

                        </button>
    
                    </div>
                )}

            </div>

        </div>
    );
};

export default Stack;