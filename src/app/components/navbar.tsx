import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { TiHome } from "react-icons/ti";

const navbar = () => {
  return (
    <nav className = 'mx-auto py-3 flex items-center justify-between bg-navfooter text-bold text-fontLight rounded-lg'>
        <div className = 'text-fontLight font-bold px-2.5'>
          <Image 
            src="/color-logo.png" 
            alt="Algorithm Visualizer" 
            width={200} 
            height={200}
            className="h-12 w-auto"
          />
        </div>
        <div className="flex flex-nowrap items-center">
          <div className="relative group">
            <button className="px-2.5">Algorithm</button>
              <div className="absolute mt-0.5 w-30 bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-10">
                <Link href="/Algorithm/example1" className="block px-4 py-2 hover:bg-gray-200 hover:font-bold transition-all duration-300 ease-in-out">example 1</Link>
                <Link href="/Algorithm/example2" className="block px-4 py-2 hover:bg-gray-200 hover:font-bold transition-all duration-300 ease-in-out">example 2</Link>
              </div>
            </div>
            <div className="relative group">
            <button className="px-2.5">Data Structure</button>
              <div className="absolute mt-0.5 w-30 bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-10">
                <Link href="/DataStructure/Array" className="block px-4 py-2 hover:bg-gray-200 hover:font-bold transition-all duration-300 ease-in-out">Array</Link>
                <Link href="/DataStructure/List" className="block px-4 py-2 hover:bg-gray-200 hover:font-bold transition-all duration-300 ease-in-out">List</Link>
                <Link href="/DataStructure/Stack" className="block px-4 py-2 hover:bg-gray-200 hover:font-bold transition-all duration-300 ease-in-out">Stack</Link>
                <Link href="/DataStructure/Tree" className="block px-4 py-2 hover:bg-gray-200 hover:font-bold transition-all duration-300 ease-in-out">Tree</Link>
                <Link href="/DataStructure/Queue" className="block px-4 py-2 hover:bg-gray-200 hover:font-bold transition-all duration-300 ease-in-out">Queue</Link>
              </div>
            </div>
            <Link href = "/" className = 'px-2.5 hover:scale-115 transition-all duration-300 ease-in-out' aria-label="Github"><TiHome size = {25}/></Link>
            <Link href = "https://github.com/avadella/Data-Structure-Visualizer" className = 'px-2.5 pr-5 hover:scale-115 transition-all duration-300 ease-in-out' aria-label="Home"><IoLogoGithub size = {25}/></Link>
        </div>
    </nav>
  )
}

export default navbar
