import React from 'react'
import { motion } from 'framer-motion'
import expediente from './data/expediente.json'
import MagicalSparks from './components/MagicalSparks'
import ActionButtons from './components/ActionButtons'

interface House {
  name: string
  icon: string
  largeLogo: string
}

interface StudentRecord {
  name: string
  house: House
  cohort: string
  graduation: string
  favoriteSubject: string
  patronus: string
  patronusDescription: string
  patronusProfessor: string
  patronusYear: string
  patronusClassification: string
  boggart: string
  wand: string
  mischief: string
  mischiefDescription: string
  mischiefConsequences: string
  professorComment: string
  professorName: string
  likes: string
  skills: string
}

export default function App() {
  const data = expediente as StudentRecord
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2c1810] via-[#3d2817] to-[#2c1810] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Magical background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>
      
      <motion.main 
        className="w-full max-w-5xl relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div 
          className="relative bg-gradient-to-br from-[#f4f1e8] via-[#f7f1e3] to-[#efe3cf] shadow-2xl rounded-2xl overflow-hidden border-4 border-[#8b7355]"
          initial={{ scale: 0.9, rotateY: -15 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Parchment texture overlay */}
          <div className="absolute inset-0 opacity-40">
            <div className="w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(212,196,168,0.1)_1px,transparent_1px)] bg-[length:100px_100px]"></div>
          </div>
          
          {/* Aged paper effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#8b7355]/5 to-[#8b7355]/10"></div>
          
          <div className="relative p-6 md:p-10 z-10">
            <motion.header 
              className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Logo and title section */}
              <motion.div 
                className="flex flex-col items-center lg:flex-row lg:items-center gap-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.div 
                  className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center bg-gradient-to-br from-red-700 to-red-900 rounded-full shadow-inner border-2 border-yellow-400 relative overflow-hidden"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Magical glow effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-transparent rounded-full"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  
                  {/* Golden ring pulse */}
                  <motion.div
                    className="absolute inset-0 border-2 border-yellow-400/50 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1
                    }}
                  ></motion.div>
                  
                  {/* Gryffindor crest */}
                  <motion.div
                    className="w-12 h-12 md:w-16 md:h-16 relative"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 1.2, 
                      delay: 0.8,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.6 }
                    }}
                  >
                    <img 
                      src="/src/data/gryffindor-logo.svg" 
                      alt="Gryffindor Crest"
                      className="w-full h-full object-contain drop-shadow-lg"
                      style={{ 
                        filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.5)) brightness(1.2) saturate(1.3)'
                      }}
                    />
                  </motion.div>
                  
                  {/* Magical sparkles */}
                  <MagicalSparks 
                    count={8}
                    largeCount={3}
                    delay={1.5}
                    duration={2.5}
                    size="md"
                    color="bg-yellow-300"
                  />
                </motion.div>
                <div className="text-center lg:text-left">
                  <motion.h1 
                    className="text-2xl md:text-3xl font-serif font-semibold text-[#2c1810]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    Expediente Hogwarts
                  </motion.h1>
                  <motion.p 
                    className="text-sm md:text-base text-[#5a4a3a]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    {data.name} — {data.house.name} • Cohorte {data.cohort} — Graduación {data.graduation}
                  </motion.p>
                </div>
              </motion.div>

              {/* Buttons for desktop - right aligned in same row */}
              <div className="hidden lg:flex">
                <ActionButtons 
                  onPrint={handlePrint}
                  className="lg:w-auto"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
              </div>
              
              {/* Buttons for mobile/tablet - centered below */}
              <div className="lg:hidden">
                <ActionButtons 
                  onPrint={handlePrint}
                  className="justify-center w-full"
                />
              </div>
            </motion.header>

            <motion.section 
              className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.aside 
                className="col-span-1 lg:col-span-1 bg-gradient-to-br from-white/80 to-white/60 p-4 rounded-lg border-2 border-[#8b7355]/30 shadow-lg backdrop-blur-sm w-full"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.h2 
                  className="text-lg font-medium text-[#2c1810] border-b-2 border-[#8b7355]/30 pb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  Datos
                </motion.h2>
                <motion.dl 
                  className="mt-3 text-sm text-[#5a4a3a] space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  {[
                    { label: "Casa", value: data.house.name },
                    { label: "Año de ingreso", value: data.cohort },
                    { label: "Año de graduación", value: data.graduation },
                    { label: "Materia favorita", value: data.favoriteSubject },
                    { label: "Boggart", value: data.boggart }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="border-l-2 border-[#8b7355]/20 pl-3 py-1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 1.8 + index * 0.1 }}
                    >
                      <dt className="font-semibold text-[#2c1810]">{item.label}</dt>
                      <dd className="text-[#5a4a3a]">{item.value}</dd>
                    </motion.div>
                  ))}
                </motion.dl>

                <motion.div 
                  className="mt-4 p-3 bg-gradient-to-r from-[#8b7355]/10 to-transparent rounded-md border-l-4 border-[#8b7355]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.2 }}
                >
                  <h3 className="font-semibold text-[#2c1810]">Varita</h3>
                  <p className="text-sm text-[#5a4a3a] italic">{data.wand}</p>
                </motion.div>
              </motion.aside>

              <motion.div 
                className="col-span-1 lg:col-span-2 bg-gradient-to-br from-white/80 to-white/60 p-4 md:p-6 rounded-lg border-2 border-[#8b7355]/30 shadow-lg backdrop-blur-sm w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <motion.h2 
                  className="text-xl font-medium text-[#2c1810] border-b-2 border-[#8b7355]/30 pb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                >
                  Patronus
                </motion.h2>
                <div className="mt-3 flex flex-col lg:flex-row lg:items-start gap-4">
                  <motion.div 
                    className="flex-shrink-0 w-full lg:w-48 h-36 bg-gradient-to-br from-[#8b7355]/20 to-[#8b7355]/10 rounded-lg flex items-center justify-center border-2 border-[#8b7355]/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Simple patronus illustration */}
                    <motion.svg 
                      viewBox="0 0 120 80" 
                      className="w-40 h-28 opacity-90"
                      initial={{ opacity: 0, rotate: -10 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 2 }}
                    >
                      <g fill="none" stroke="#8b7355" strokeWidth="1">
                        <path d="M20 60 C 30 45, 50 35, 60 40 C 70 45, 80 55, 100 60" strokeOpacity="0.6" />
                      </g>
                      <g fill="currentColor" className="text-[#8b7355]/80">
                        <ellipse cx="30" cy="40" rx="18" ry="8" fillOpacity="0.95" />
                        <path d="M18 38 C 22 28, 36 28, 42 36 C 46 42, 36 46, 28 44 Z" />
                      </g>
                    </motion.svg>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                  >
                    <p className="text-sm text-[#5a4a3a]">Patronus principal: <span className="font-semibold text-[#2c1810]">{data.patronus}</span>.</p>
                    <p className="text-sm mt-2 text-[#5a4a3a]">Nota del profesor {data.patronusProfessor} ({data.patronusYear}):</p>
                    <motion.blockquote 
                      className="mt-2 border-l-4 border-[#8b7355]/40 pl-4 italic text-sm text-[#5a4a3a] bg-gradient-to-r from-[#8b7355]/5 to-transparent py-2 rounded-r-md"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 2.4 }}
                    >
                      "{data.patronusDescription}"
                    </motion.blockquote>
                    <motion.p 
                      className="text-xs text-[#8b7355]/70 mt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 2.6 }}
                    >
                      Clasificado como: <span className="font-medium">{data.patronusClassification}</span>
                    </motion.p>
                  </motion.div>
                </div>

                <motion.hr 
                  className="my-6 border-[#8b7355]/20" 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 2.8 }}
                />

                <motion.h2 
                  className="text-xl font-medium text-[#2c1810] border-b-2 border-[#8b7355]/30 pb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3 }}
                >
                  Travesura más famosa
                </motion.h2>
                <motion.p 
                  className="mt-3 text-sm text-[#5a4a3a]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.2 }}
                >
                  <em className="text-[#2c1810] font-semibold">{data.mischief}</em> — {data.mischiefDescription}
                </motion.p>

                <motion.div 
                  className="mt-4 text-sm text-[#5a4a3a] p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-md border-l-4 border-red-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 3.4 }}
                >
                  <p><strong className="text-[#2c1810]">Consecuencias:</strong> {data.mischiefConsequences}</p>
                </motion.div>

                <motion.hr 
                  className="my-6 border-[#8b7355]/20" 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 3.6 }}
                />

                <motion.h2 
                  className="text-lg font-medium text-[#2c1810] border-b-2 border-[#8b7355]/30 pb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 3.8 }}
                >
                  Anotación del profesorado
                </motion.h2>
                <motion.p 
                  className="mt-2 italic text-sm text-[#5a4a3a] p-3 bg-gradient-to-r from-[#8b7355]/5 to-transparent rounded-md border-l-4 border-[#8b7355]/40"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 4 }}
                >
                  "{data.professorComment}" — {data.professorName}
                </motion.p>

                <motion.div 
                  className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 4.2 }}
                >
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-md text-xs border-2 border-yellow-200/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 4.4 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <strong className="text-[#2c1810]">Gustos:</strong>
                    <div className="text-[#5a4a3a] mt-1">{data.likes}</div>
                  </motion.div>
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-md text-xs border-2 border-yellow-200/50"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 4.6 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <strong className="text-[#2c1810]">Habilidades:</strong>
                    <div className="text-[#5a4a3a] mt-1">{data.skills}</div>
                  </motion.div>
                </motion.div>

              </motion.div>
            </motion.section>

            <motion.footer 
              className="mt-8 text-center text-xs text-[#8b7355]/70 border-t-2 border-[#8b7355]/20 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 4.8 }}
            >
              <p className="italic">Archivo Oficial — Colegio Hogwarts de Magia y Hechicería • Registro digital generado con fines recreativos</p>
            </motion.footer>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
}
