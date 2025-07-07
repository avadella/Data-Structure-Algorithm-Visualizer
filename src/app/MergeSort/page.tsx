'use client';
import React, { useState} from 'react';
import Array from '../Structures/Visualization/Array'
import { initialArray } from '../Structures/ArrayItem';
import { useArray } from '../Hooks/useArray'
import { mergeSort } from '../Algorithms/MergeSortAlgo'
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const page = () => {
    const {arrayData, shuffleArray, resetArray, insertValue, setArrayData } = useArray(initialArray);
    const [input, setInput] = useState('');

    const handleInsert = () => {
        const value = parseInt(input);
        insertValue(value);
        setInput('');
    }

    const handleMerge = () => {
        const newArray = [...arrayData];
        mergeSort(newArray, 0, (newArray.length -1))
        setArrayData(newArray)
    }

    return (
        <main>
            <Navbar/>
            <div className = 'min-h-[70vh] bg-softgray m-3 px-1.5 py-1.5'>
                <div className = 'min-h-[70vh] bg-boxbg px-0.5 py-0.5'>
                    <motion.div className = 'flex flex-row justify-center gap-5 m-5'>
                        {arrayData.map((e)=> (<Array key = {e.key} value = {e.value}/>))}
                    </motion.div>
                    <div className = 'flex flex-row justify-center gap-5 '>
                        <button onClick = {shuffleArray} className = 'mb-4 px-4 py-2 bg-softgray text-white rounded cursor-pointer'> Shuffle </button>
                        <button onClick = {resetArray} className = 'mb-4 px-4 py-2 bg-softgray text-white rounded cursor-pointer'> Reset </button>
                        <input 
                            type="number" 
                            name="insertData" 
                            value={input}
                            onChange = {e => setInput(e.target.value)}
                            className = 'rounded-lg bg-structureFill px-4 py-2 mb-4'
                        />
                        <button onClick = {handleInsert} className = 'mb-4 px-4 py-2 bg-softgray text-white rounded cursor-pointer'> Insert </button>
                        <button onClick = {handleMerge} className = 'mb-4 px-4 py-2 bg-softgray text-white rounded cursor-pointer'> MergeSort </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default page
