import React from 'react'
import { motion } from 'framer-motion';
import { NodeItem } from '../NodeItem';

const NodeList = (props : NodeItem) => {
  return (
    <motion.div 
        layout
        transition = {{ type: "spring", damping: 30, stiffness: 200 }}
        className = 'bg-structureFill w-16 h-16 border-2 border-black flex items-center justify-center text-black text-xl font-semibold'
    >
        {props.value}
    </motion.div>
  )
}

export default NodeList

