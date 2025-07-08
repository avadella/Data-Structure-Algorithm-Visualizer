'use client';
import React, { useState} from 'react';
import NodeList from '../Structures/Visualization/NodeList'
import { initialArray } from '../Structures/NodeItem';
import { useArray } from '../Hooks/useArray'
import { mergeSort } from '../Algorithms/MergeSortAlgo'
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";

const page = () => {
    const {arrayData, shuffleArray, resetArray, insertValue, setArrayData } = useArray(initialArray);
    const [input, setInput] = useState('');

    const [sidebarExpanded, setSidebarExpanded] = useState(false);

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

    const expandCode = () => {
        setSidebarExpanded(prev => !prev);
    }

    return (
        <main>
            <Navbar/>
            <div className = 'flex flex-row min-h-[70vh]'>
                <div className = 'flex-1 bg-borderGreen px-1.5 py-1.5 rounded-l-lg flex flex-col justify-center rounded m-3'>
                    <div className = 'bg-boxbg py-0.5 rounded-l-lg flex flex-col flex-1 justify-center rounded'>
                        <motion.div className = 'flex flex-row justify-center gap-5 m-5'>
                            {arrayData.map((e)=> (<NodeList key = {e.key} value = {e.value}/>))}
                        </motion.div>
                        <div className = 'flex flex-row justify-center gap-5'>
                            <button onClick = {shuffleArray} className = 'mb-4 px-4 py-2 bg-borderGreen text-white rounded cursor-pointer'> Shuffle </button>
                            <button onClick = {resetArray} className = 'mb-4 px-4 py-2 bg-borderGreen text-white rounded cursor-pointer'> Reset </button>
                            <input 
                                type =  'number'
                                name = 'insertData'
                                value = {input}
                                onChange = {e => setInput(e.target.value)}
                                className = 'rounded-lg bg-structureFill px-4 py-2 mb-4'
                            />
                            <button onClick = {handleInsert} className = 'mb-4 px-4 py-2 bg-borderGreen text-white rounded cursor-pointer'> Insert </button>
                            <button onClick = {handleMerge} className = 'mb-4 px-4 py-2 bg-borderGreen text-white rounded cursor-pointer'> MergeSort </button>
                        </div>
                    </div>
                </div>
                <div
                    className = {`transition-all duration-300 ${sidebarExpanded ? 'w-50' : 'w-15'} bg-navfooter flex flex-col justify-stretch mr-0.5`} style = {{ background: 'rgba(39, 33, 33, 0.35)'}}>
                    <button onClick = {expandCode} className = 'hover:scale-115 hover:cursor-pointer px-4.25 py-0.25 pt-1 transition-transform duration-200'>
                        {sidebarExpanded ? <IoArrowForwardCircle size = {25}/> : <IoArrowBackCircle size = {25}/>}
                    </button>
                    {sidebarExpanded ? (<h1 className = 'text-fontDark text-[8.5px] text-center px-0.75 font-bold'>
                        put code here lol </h1>) : 
                        (<h1 className = 'text-fontDark text-[8.5px] text-center px-0.75 font-bold'>
                        View Code </h1>)}
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default page
