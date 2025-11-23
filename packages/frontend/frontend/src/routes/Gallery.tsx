import React from 'react';

function Gallery(): JSX.Element {
  const images = [
    { title: 'Luxury Sports', src: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=800&fit=crop' },
    { title: 'Electric Future', src: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop' },
    { title: 'Classic Elegance', src: 'https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=1200&h=800&fit=crop' },
    { title: 'Urban Adventure', src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=800&fit=crop' },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 scroll-reveal">
        <h1 className="text-4xl font-bold mb-12 text-white drop-shadow-lg text-center">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition duration-300 border border-cyan-500/30">
              <div className="relative h-72 overflow-hidden group">
                <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300 flex items-center justify-center">
                  <h3 className="text-white font-bold text-lg drop-shadow-lg">{img.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
