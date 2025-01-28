import React from 'react'
import Masonry from 'react-masonry-css'
import { motion } from 'framer-motion'
import { Images } from '../../data/Images'

export const GalleryGrid = ({ onImageClick }) => {
  const breakpointColumns = {
    default: 4,
    1536: 4,
    1280: 3,
    1024: 3,
    768: 2,
    640: 1
  }

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex -ml-4 w-auto"
      columnClassName="pl-4 bg-clip-padding"
    >
      {Images.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="mb-4 cursor-pointer"
          onClick={() => onImageClick?.(img)}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            <img
              src={img}
              alt={`Gallery item ${index + 1}`}
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center"
            >
              <span className="text-white text-lg">Click to view</span>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </Masonry>
  )
}
