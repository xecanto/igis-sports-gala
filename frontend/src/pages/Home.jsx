import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { FaMoon, FaSun, FaVolleyballBall } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import { LoginForm } from '../components/Auth/LoginForm'
import { GalleryPreview } from '../components/Gallery/GalleryPreview'

Modal.setAppElement('#root')

export const Home = () => {
  const { darkMode, toggleDarkMode } = useTheme()
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full bg-white dark:bg-gray-800 shadow-lg z-50"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <FaVolleyballBall className="text-red-500 text-2xl animate-spin-slow" />
            <span className="text-xl font-bold dark:text-white">IGIS Gala</span>
          </motion.div>
          <div className="flex items-center space-x-4">
            <motion.button 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLoginOpen(true)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Login
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-20 bg-gradient-to-b from-red-500 to-red-600 dark:from-red-700 dark:to-red-800"
      >
        <div className="container mx-auto px-4 py-32 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-bold text-white mb-6"
          >
            IGIS Sports Gala 2024
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-white/90 mb-8"
          >
            Celebrating Sports Excellence
          </motion.p>
        </div>
      </motion.section>

      {/* Gallery Preview Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="py-20 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Gallery Highlights</h2>
          <GalleryPreview />
          <div className="text-center mt-8">
            <Link to="/gallery" className="inline-block px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              View Full Gallery
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Login Modal */}
      <Modal
        isOpen={isLoginOpen}
        onRequestClose={() => setIsLoginOpen(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <LoginForm onClose={() => setIsLoginOpen(false)} />
      </Modal>
    </div>
  )
}
