import React from 'react'

interface AlgorithmCardData {
    key: number;
    title: string;
    description: string;
    imagePath: string;
}

const AlgorithmCard = (props: AlgorithmCardData) => {
    return (
        <div className = 'bg-softgray rounded-lg p-4'>
            <h1 className = 'text-2xl  text-fontLight text-center mb-2'> {props.title} </h1>
            <div className = 'grid grid-cols-2 bg-boxbg rounded-md overflow-hidden'>
                <img src={props.imagePath} alt="test image" />
                <h1 className = 'px-5 py-3 text-fontDark'> {props.description} </h1>
            </div>
        </div>
    )
}

export default AlgorithmCard
