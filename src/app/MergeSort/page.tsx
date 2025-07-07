'use client';
import React, { useState} from 'react';
import Array from '../Structures/Visualization/Array'
import { motion } from 'framer-motion';
import { initialArray } from '../Structures/ArrayItem';
import { useArray } from '../Hooks/useArray'
import { mergeSort } from '../Algorithms/MergeSortAlgo'


const page = () => {
    const {arrayData, shuffleArray, resetArray, insertValue, setArrayData } = useArray(initialArray);
    const [input, setInput] = useState('');

    const handleInsert = () => {
        const value = parseInt(input);
        insertValue(value);
        setInput('');
    };

    const handleMerge = () => {
        const newArray = [...arrayData];
        mergeSort(newArray, 0, (newArray.length -1))
        setArrayData(newArray)
    }

    return (
        <div className = 'flex flex-col items-center'>
            <motion.div className = 'flex flex-row gap-2 m-5'>
                {arrayData.map((e)=> (<Array key={e.key} value={e.value}/>))}
            </motion.div>
            <div className = 'flex flex-row items-center gap-5 '>
                <button onClick={shuffleArray} className='mb-4 px-4 py-2 bg-blue-500 text-white rounded'> Shuffle </button>
                <button onClick={resetArray} className='mb-4 px-4 py-2 bg-blue-500 text-white rounded'> Reset </button>
                <input 
                    type="number" 
                    name="insertData" 
                    value={input}
                    onChange = {e => setInput(e.target.value)}
                    className='rounded-lg bg-boxbg px-4 py-2 mb-4'
                />
                <button onClick={handleInsert} className='mb-4 px-4 py-2 bg-blue-500 text-white rounded'> Insert </button>
                <button onClick={handleMerge} className='mb-4 px-4 py-2 bg-blue-500 text-white rounded'> MergeSort </button>
            </div>
        </div>
    )
}

export default page
