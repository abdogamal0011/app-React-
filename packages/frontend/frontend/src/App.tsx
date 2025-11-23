import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import PhotoCard from './components/PhotoCard';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';
import Gallery from './routes/Gallery';
import Details from './routes/Details';
import ThreeBackground from './components/ThreeBackground';

function Home(): JSX.Element {
  const carPhotos = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=500&h=300&fit=crop',
      title: 'Luxury Sports Car',
      description: 'Experience the thrill of high-performance engineering with cutting-edge technology and unmatched precision.',
      category: 'Sports',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&h=300&fit=crop',
      title: 'Electric Innovation',
      description: 'Future of mobility: Zero emissions, maximum efficiency, and silent power delivery.',
      category: 'Electric',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=500&h=300&fit=crop',
      title: 'Classic Elegance',
      description: 'Timeless design meets modern comfort in our exclusive classic car collection.',
      category: 'Classic',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=300&fit=crop',
      title: 'Family SUV',
      description: 'Perfect for adventure: Spacious, reliable, and equipped with advanced safety features.',
      category: 'SUV',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1537449509476-eeded0bca2b3?w=500&h=300&fit=crop',
      title: 'Compact Urban',
      description: 'Agile and efficient, designed for city living with style and personality.',
      category: 'Urban',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&h=300&fit=crop',
      title: 'Luxury Sedan',
      description: 'Premium comfort and refined technology for the discerning driver.',
      category: 'Luxury',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Navbar (commented out - rendered in App) */}
      {/* <Navbar /> */}

      {/* Hero Carousel */}
      <div className="animate-fade-in">
        <Carousel />
      </div>

      {/* Featured Cars Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg animate-slide-in">Our Featured Collection</h2>
            <p className="text-xl text-cyan-200 drop-shadow-md animate-slide-up">
              Discover our handpicked selection of premium vehicles
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carPhotos.map((car, idx) => (
              <div key={car.id} style={{ animationDelay: `${idx * 0.1}s` }} className="animate-fade-in">
                <PhotoCard
                  key={car.id}
                  id={car.id}
                  image={car.image}
                  title={car.title}
                  description={car.description}
                  category={car.category}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-800 py-16 px-4 scroll-reveal">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-4 drop-shadow-lg animate-slide-in">Ready to Find Your Perfect Car?</h3>
          <p className="text-lg mb-8 drop-shadow-md animate-slide-up">Contact our sales team today for personalized assistance</p>
          <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-cyan-100 hover:shadow-xl hover:shadow-cyan-500/50 transition duration-300 drop-shadow-lg animate-bounce-subtle">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-gray-300 py-8 px-4 border-t border-cyan-500/30">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 AutoHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ThreeBackground />
      <Navbar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
