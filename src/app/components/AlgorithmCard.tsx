import { link } from "fs";
import Link from "next/link";
import React from 'react'

interface AlgorithmCardData {
    key: number;
    title: string;
    description: string;
    routerPath: string
    imagePath: string;
}

const AlgorithmCard = (props: AlgorithmCardData) => {
    return (
        <Link href = {props.routerPath}>
            <div className = 'bg-borderGreen rounded-lg p-4 hover:scale-99 transition-all duration-300 ease-in-out hover:shadow-xl'>
                <h1 className = 'text-2xl text-fontLight text-center font-bold mb-2'> {props.title} </h1>
                <div className = 'grid grid-cols-2 bg-boxbg rounded-md overflow-hidden'>
                    <img src={props.imagePath} alt="test image"/>
                    <h1 className = 'px-5 py-3 text-fontDark'> {props.description} </h1>
                </div>
            </div>
        </Link>
    )
}

export default AlgorithmCard
