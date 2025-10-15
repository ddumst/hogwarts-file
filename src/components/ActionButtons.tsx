import React from 'react'
import { motion } from 'framer-motion'

interface ActionButtonsProps {
  onPrint: () => void
  className?: string
  initial?: any
  animate?: any
  transition?: any
}

export default function ActionButtons({ 
  onPrint, 
  className = "",
  initial = { opacity: 0, x: 50 },
  animate = { opacity: 1, x: 0 },
  transition = { duration: 0.8, delay: 0.7 }
}: ActionButtonsProps) {
  return (
    <motion.div 
      className={`flex flex-col sm:flex-row items-center gap-3 ${className}`}
      initial={initial}
      animate={animate}
      transition={transition}
    >
      <motion.button
        onClick={onPrint}
        className="w-full sm:w-auto px-4 py-2 rounded-md border-2 border-[#8b7355] bg-[#2c1810] text-white text-sm shadow-lg hover:bg-[#3d2817] transition-all duration-300"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        Imprimir / Guardar PDF
      </motion.button>
      <motion.a
        href="#"
        onClick={(e) => e.preventDefault()}
        className="w-full sm:w-auto px-4 py-2 rounded-md border-2 border-red-700 text-red-700 text-sm bg-red-50 hover:bg-red-100 transition-all duration-300"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        Descargar imagen
      </motion.a>
    </motion.div>
  )
}
