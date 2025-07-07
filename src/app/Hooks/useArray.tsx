import { useState, useRef } from 'react';
import { ArrayItem } from '../Structures/ArrayItem';

export function useArray(initialData: ArrayItem[]){
    const nextId = useRef(initialData.length + 1);
    const [arrayData, setArrayData] = useState<ArrayItem[]>(initialData);

    const shuffleArray = () => {
        const newArray = [...arrayData];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        setArrayData(newArray)
    };

    const resetArray = () => {
        setArrayData([...initialData])
        nextId.current = initialData.length + 1;
    };

    const insertValue = (value: number) => {
        if (!isNaN(value)) {
            setArrayData(prev => [...prev, { key: nextId.current++, value }]);
        }
    };

    return {
        arrayData,
        shuffleArray,
        resetArray,
        insertValue,
        setArrayData
    };
   }
