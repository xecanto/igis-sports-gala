import React from 'react'
import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

export const LoginForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add login logic here
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-lg relative"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        <FaTimes />
      </button>
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Login
        </motion.button>
      </form>
    </motion.div>
  )
}
