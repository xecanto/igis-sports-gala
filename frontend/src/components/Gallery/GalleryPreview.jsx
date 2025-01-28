import React from 'react'
import Masonry from 'react-masonry-css'
import { motion } from 'framer-motion'
import { Images } from '../../data/Images'

export const GalleryPreview = () => {
  const previewImages = Images.slice(0, 16) // Show only first 6 images in preview

  const breakpointColumns = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  }

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex -ml-4 w-auto"
      columnClassName="pl-4 bg-clip-padding"
    >
      {previewImages.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="mb-4"
        >
          <img
            src={img}
            alt={`Gallery preview ${index + 1}`}
            className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </motion.div>
      ))}
    </Masonry>
  )
}
