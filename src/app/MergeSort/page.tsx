'use client';
import React, { useState, useRef } from 'react';
import MergeArray from './MergeArray'
import { motion } from 'framer-motion';


const page = () => {

    type ArrayItem = { id: number; value: number };
    const initialArray: ArrayItem[] = [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 },
        { id: 5, value: 5 },
        { id: 6, value: 6 },
        { id: 7, value: 7 },
        { id: 8, value: 8 },
        { id: 9, value: 9 },
    ];

    const nextId = useRef(initialArray.length + 1);
    const [arrayData, setArrayData] = useState<ArrayItem[]>(initialArray);
    const [insertValue, setInsertValue] = useState('');

    const shuffleArray = () => {
        const newArray = [...arrayData];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        setArrayData(newArray)
    };

    const resetArray = () => {
        setArrayData(initialArray)
        nextId.current = initialArray.length + 1;
    };

    const insertArray = () => {
        const value = parseInt(insertValue);
        if(!isNaN(value)){
            setArrayData(prev => [...prev, { id: nextId.current++, value }])
        }
        setInsertValue('');
    };

    return (
        <div className = 'flex flex-col items-center'>
            <motion.div  className = 'flex flex-row gap-2 m-5'>
                {arrayData.map((e)=> (<MergeArray key={e.id} data={e.value}/>))}
            </motion.div>
            <div className = 'flex flex-row items-center gap-5 '>
                <button onClick={shuffleArray} className='mb-4 px-4 py-2 bg-blue-500 text-white rounded'> Shuffle </button>
                <button onClick={resetArray} className='mb-4 px-4 py-2 bg-blue-500 text-white rounded'> Reset </button>
                <input 
                    type="number" 
                    name="insertData" 
                    value={insertValue}
                    onChange = {e => setInsertValue(e.target.value)}
                    className='rounded-lg bg-boxbg px-4 py-2 mb-4'
                />
                <button onClick={insertArray} className='mb-4 px-4 py-2 bg-blue-500 text-white rounded'> Insert </button>
            </div>
        </div>
    )
}

export default page
