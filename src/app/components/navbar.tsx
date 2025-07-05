import React from 'react'
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { TiHome } from "react-icons/ti";

const navbar = () => {
  return (
    <nav className = 'mx-auto py-5 flex items-center justify-between bg-navfooter text-bold text-fontLight rounded-lg'>
        <div className = 'text-fontLight font-bold px-5'>Algorithm Visualizer</div>
        <div className="flex flex-nowrap items-center">
          <div className="relative group">
            <button className="px-2.5">Algorithm</button>
              <div className="absolute mt-0.75 w-30 bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-10">
                <Link href="/Algorithm/example1" className="block px-4 py-2 hover:bg-gray-200">example 1</Link>
                <Link href="/Algorithm/example2" className="block px-4 py-2 hover:bg-gray-200">example 2</Link>
              </div>
            </div>
            <div className="relative group">
            <button className="px-2.5">Data Structure</button>
              <div className="absolute mt-0.75 w-30 bg-white text-black shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-10">
                <Link href="/DataStructure/example1" className="block px-4 py-2 hover:bg-gray-200">example 1</Link>
                <Link href="/DataStructure/example2" className="block px-4 py-2 hover:bg-gray-200">example 2</Link>
              </div>
            </div>
            <Link href = "/" className = 'px-2.5' aria-label="Github"><TiHome size = {25}/></Link>
            <Link href = "https://github.com/avadella/Data-Structure-Visualizer" className = 'px-2.5 pr-5' aria-label="Home"><IoLogoGithub size = {25}/></Link>
        </div>
    </nav>
  )
}

export default navbar
