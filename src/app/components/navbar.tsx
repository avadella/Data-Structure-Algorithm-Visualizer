import React from 'react'
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { TiHome } from "react-icons/ti";

const navbar = () => {
  return (
    <nav className = 'mx-auto py-5 flex items-center justify-between bg-navfooter text-bold text-fontLight rounded-lg'>
        <div className = 'text-fontLight font-bold px-5'>Algorithm Visualizer</div>
        <div className="flex flex-nowrap items-center">
            <Link href = "/Algorithm" className = 'px-2.5'>Algorithm</Link>
            <Link href = "/DataStructure" className = 'px-2.5'>Data Structure</Link>
            <Link href = "/" className = 'px-2.5' aria-label="Github"><TiHome size={25}/></Link>
            <Link href = "https://github.com/avadella/Data-Structure-Visualizer" className = 'px-2.5 pr-5' aria-label="Home"><IoLogoGithub size={25}/></Link>
        </div>
    </nav>
  )
}

export default navbar
