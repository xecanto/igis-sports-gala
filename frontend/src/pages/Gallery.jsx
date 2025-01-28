import React, { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GalleryGrid } from '../components/Gallery/GalleryGrid'
import { useTheme } from '../context/ThemeContext'
import { Images } from '../data/Images'

export const Gallery = () => {
  const { darkMode } = useTheme()
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleImageClick = (img) => {
    setSelectedImage(img)
    setCurrentIndex(Images.indexOf(img))
  }

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Images.length)
    setSelectedImage(Images[(currentIndex + 1) % Images.length])
  }, [currentIndex])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Images.length) % Images.length)
    setSelectedImage(Images[(currentIndex - 1 + Images.length) % Images.length])
  }, [currentIndex])

  const handleKeyDown = useCallback((e) => {
    if (!selectedImage) return
    if (e.key === 'ArrowRight') handleNext()
    if (e.key === 'ArrowLeft') handlePrev()
    if (e.key === 'Escape') setSelectedImage(null)
  }, [handleNext, handlePrev, selectedImage])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="mb-8"
        >
          <Link to="/" className="inline-flex items-center space-x-2 text-red-500 hover:text-red-600">
            <FaArrowLeft />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-8 text-center dark:text-white"
        >
          Sports Gala Gallery
        </motion.h1>

        <GalleryGrid 
          onImageClick={handleImageClick}
          selectedImage={selectedImage}
        />
        
      </div>

      {/* Updated Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white p-2 hover:text-gray-300 z-50"
            >
              <FaTimes size={24} />
            </button>
            
            <button
              onClick={handlePrev}
              className="absolute left-4 text-white p-4 hover:text-gray-300 transition-colors"
            >
              <FaArrowLeft size={24} />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Selected"
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />

            <button
              onClick={handleNext}
              className="absolute right-4 text-white p-4 hover:text-gray-300 transition-colors"
            >
              <FaArrowRight size={24} />
            </button>

            <div className="absolute bottom-4 text-white text-sm">
              {currentIndex + 1} / {Images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
