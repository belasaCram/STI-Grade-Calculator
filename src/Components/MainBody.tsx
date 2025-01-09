import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GradeCard from './GradeCard';


const MainBody = () => {
    const [gradeCards, setGradeCards] = useState([{ id: 0 }]);
    const [scrollOnAdd, setScrollOnAdd] = useState(false);
    const gradeCardContainerRef = useRef<HTMLDivElement>(null);

    const addGradeCard = () => {
        const newId = gradeCards.length;
        setGradeCards([...gradeCards, { id: newId }]);
    };

    const removeGradeCard = (id: number) => {
        setGradeCards(gradeCards.filter((card) => card.id !== id));
    };

    const removeAllGradeCards = () => {
        setGradeCards([]);
    };

    const computeGWA = () => {

    }

    useEffect(() => {
        if (gradeCardContainerRef.current) {
            gradeCardContainerRef.current.scrollTo({
                top: gradeCardContainerRef.current.scrollHeight,
                behavior: 'smooth',
            });
            setScrollOnAdd(false);
        }
    }, [gradeCards, scrollOnAdd]);

    return (
        <div className="relative px-4 py-4 lg:px-6 max-w-5xl mx-auto">
            {/* Introduction Section */}
            <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
                <p className="text-gray-600 text-center">
                    Analyze and track your grades effortlessly. Stay updated on your progress!
                </p>
            </div>

            {/* Grade Card Section */}
            <div
                ref={gradeCardContainerRef}
                className="bg-white p-6 rounded-lg shadow-lg mb-6 overflow-y-auto max-h-[50vh] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 drop-shadow-lg"
            >
                <AnimatePresence>
                    {gradeCards.length === 0 ? (
                        <motion.div
                            key="no-cards"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center text-gray-600"
                        >
                            <p>No grade cards currently displayed. Please add a grade card.</p>
                        </motion.div>
                    ) : (
                        gradeCards.map((card) => (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <GradeCard id={card.id} onRemove={removeGradeCard} />
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>

            {/* Event Sections */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    {/* GWA Display */}
                    <div className="flex items-center space-x-2">
                        <h2 className="text-2xl font-bold text-gray-700">GWA:</h2>
                        <span className="text-2xl font-bold text-white bg-blue-600 px-3 py-1 rounded-full shadow">
                           {/* {gwa} */}
                        </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-center justify-center">
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-2">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-red-600 transition"
                                onClick={removeAllGradeCards}
                            >
                                Reset
                            </button>
                            <button
                                onClick={addGradeCard}
                                className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-green-600 transition"
                            >
                                Add
                            </button>
                            <button 
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-blue-600 transition"
                                onClick={computeGWA}                                
                                >
                                Calculate GWA
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBody;
