import React, {ReactNode, useState } from 'react';
import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";


    interface MyComponentProps {
        children?: ReactNode;
    }

const VisualizerBlock = (props: MyComponentProps) => {
    const [sidebarExpanded, setSidebarExpanded] = useState(false);
    const expandCode = () => {
        setSidebarExpanded(prev => !prev);
    }
    return (
        <div className = 'flex flex-row min-h-[70vh]'>
            <div className = 'flex-1 bg-borderGreen px-1.5 py-1.5 rounded-l-lg flex flex-col justify-center rounded m-3'>
                <div className = 'bg-boxbg py-0.5 rounded-l-lg flex flex-col flex-1 justify-center rounded'>
                    {props.children}
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
    )
}

export default VisualizerBlock
