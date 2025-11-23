import React, { useState, useEffect } from 'react';

interface CarouselImage {
  id: number;
  url: string;
  title: string;
  description: string;
}

interface CarouselProps {
  images?: CarouselImage[];
  autoPlay?: boolean;
  interval?: number;
}

function Carousel({
  images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1400&h=700&fit=crop',
      title: 'Luxury Cars',
      description: 'Experience the finest automobiles',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1400&h=700&fit=crop',
      title: 'Performance Vehicles',
      description: 'Power meets precision',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=1400&h=700&fit=crop',
      title: 'Classic Collection',
      description: 'Timeless elegance on wheels',
    },
  ],
  autoPlay = true,
  interval = 5000,
}: CarouselProps): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {/* Overlay with animation */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-xl animate-slide-in">{image.title}</h2>
              <p className="text-2xl text-cyan-200 drop-shadow-lg animate-slide-up">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
