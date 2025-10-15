import React from 'react'
import { motion } from 'framer-motion'

interface MagicalSparksProps {
  count?: number
  largeCount?: number
  delay?: number
  duration?: number
  size?: 'sm' | 'md' | 'lg'
  color?: string
  className?: string
}

export default function MagicalSparks({
  count = 8,
  largeCount = 3,
  delay = 1.5,
  duration = 2.5,
  size = 'md',
  color = 'bg-yellow-300',
  className = ''
}: MagicalSparksProps) {
  const sizeClasses = {
    sm: 'w-1 h-1',
    md: 'w-1 h-1',
    lg: 'w-2 h-2'
  }

  const largeSizeClasses = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  }

  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      {/* Small magical sparkles */}
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${sizeClasses[size]} ${color} rounded-full`}
          style={{
            left: `${15 + (i * (85 / count))}%`,
            top: `${10 + (i * (80 / count))}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 1, 0],
            y: [0, -20, 0],
            x: [0, Math.sin(i) * 10, 0],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Large magical particles */}
      {[...Array(largeCount)].map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className={`absolute ${largeSizeClasses[size]} ${color === 'bg-yellow-300' ? 'bg-yellow-400' : color} rounded-full`}
          style={{
            left: `${25 + (i * (50 / largeCount))}%`,
            top: `${20 + (i * (60 / largeCount))}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: duration + 1.5,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  )
}
