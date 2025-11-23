import React from 'react';
import { Link } from 'react-router-dom';

interface PhotoCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  category?: string;
}

function PhotoCard({
  id,
  image,
  title,
  description,
  category = 'Featured',
}: PhotoCardProps): JSX.Element {
  return (
    <Link to={`/details/${id}`} className="group block">
      <div className="bg-black/40 rounded-lg overflow-hidden shadow-lg border border-cyan-500/30 hover:border-cyan-400/60 transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/30 animate-fade-in">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-black">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <span className="text-white font-bold text-lg drop-shadow-lg">View Details</span>
          </div>
          {/* Category Badge */}
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-cyan-500/40 backdrop-blur-sm text-cyan-200 px-4 py-1 rounded-full text-sm font-semibold border border-cyan-500/50">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition drop-shadow-lg">
            {title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3 group-hover:text-gray-200 transition">
            {description}
          </p>

          {/* Button */}
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Bottom accent */}
        <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
      </div>
    </Link>
  );
}

export default PhotoCard;
