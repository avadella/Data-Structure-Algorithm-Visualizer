import React from 'react'
import Link from "next/link";


const navbar = () => {
  return (
    <nav className = 'mx-auto py-5 flex items-center justify-between bg-navfooter text-bold text-fontLight rounded-lg'>
        <div className = 'text-fontLight font-bold px-5'>Algorithm Visualizer</div>
        <div>
            <Link href = "/Algorithm" className = 'px-5'>Algorithm</Link>
            <Link href = "/DataStructure" className = 'px-5'>Data Structure</Link>
            <Link href = "/Github" className = 'px-5'>Github</Link>
            <Link href = "/" className = 'px-5'>Home</Link>
        </div>
    </nav>
  )
}

export default navbar
