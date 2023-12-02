import React from 'react'
import { motion } from "framer-motion";

const Header = () => {
    return (
        <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 0.7, ease: 'easeInOut', duration: 0.7 }}
            className='absolute top-0 left-0 w-full pt-4 pb-5 bg-white/25 flex items-center pl-5 backdrop-blur-sm'>
            <p className='css-raisin-black font-medium text-3xl select-none cursor-default'>Currency Converter</p>
        </motion.div>
    )
}

export default Header
