import { useState } from 'react';
import NumberFormatInput from './Utilities/NumberFormatInput';
// import GetGradeStatus from './Utilities/GetGradeStatus';
import { FiX } from 'react-icons/fi';

interface GradeCardProps {
    id: number;
    onRemove: (id: number) => void;
}

function GradeCard({ id, onRemove }: GradeCardProps) {

    const terms = ["Prelim", "Midterm", "PreFinals", "Finals"];

    const [grades, setGrades] = useState<{ [key: string]: number }>({
        Prelim: (0),
        Midterm: 0,
        PreFinals: 0,
        Finals: 0,
    });

    const handleGradeChange = (term: string, value: string) => {
        setGrades((prevGrades) => ({
            ...prevGrades,
            [term]: parseFloat(value), // Ensure numeric parsing
        }));
    };

    const totalGrade = Object.values(grades).reduce((acc, grade) => acc + (isNaN(grade) ? 0 : grade), 0);

    const totalAverage = totalGrade / 4;

    // const totalAverage =
    //     (grades.Prelim * 0.2) +
    //     (grades.Midterm * 0.2) +
    //     (grades.PreFinals * 0.2) +
    //     (grades.Finals * 0.6);

    return (
        <div className="border rounded-lg p-6 mb-4 shadow-lg max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto bg-white">

            {/* Header Section */}
            <div className="border-b pb-4 mb-4">
                <div className="grid grid-cols-12 gap-4 items-center">
                    <input
                        className="col-span-10 sm:col-span-11 border-0 border-b-2 border-gray-200 text-lg sm:text-xl md:text-2xl font-semibold text-gray-700"
                        type="text"
                        placeholder="Course"
                    />
                    <button
                        onClick={() => onRemove(id)}
                        className="col-span-2 sm:col-span-1 text-gray-500 hover:text-red-600 flex justify-center"
                    >
                        <FiX size={30} />
                    </button>
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse text-gray-700">
                    <thead className="bg-gray-100">
                        <tr>
                            {terms.map((term, index) => (
                                <th
                                    key={index}
                                    className="px-2 sm:px-4 py-2 text-center text-xs sm:text-sm md:text-base font-medium border-b"
                                >
                                    {term.toUpperCase()}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {terms.map((term, index) => (
                                <td
                                    key={index}
                                    className="px-2 sm:px-4 py-2 text-center border-b"
                                >
                                    <NumberFormatInput
                                        value={grades[term] === 0 ? '' : grades[term].toString()}
                                        onValueChange={(value) => handleGradeChange(term, value)}
                                        min={5}
                                        max={100}
                                        placeholder="0.00"
                                    />
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Remarks Section */}
            <div className="mt-4">
                <p className="text-base sm:text-lg font-semibold text-gray-700">
                    Final Grade 
                    <span className="text-blue-600">{totalAverage.toFixed(2)}</span>
                </p>
            </div>
        </div>

    );
}

export default GradeCard;