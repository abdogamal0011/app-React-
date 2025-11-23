import { useParams, Link } from 'react-router-dom';

interface Car {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  price?: string;
  features?: string[];
  specs?: Record<string, string>;
}

function Details(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const carDatabase: Record<number, Car> = {
    1: {
      id: 1,
      image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=1200&h=600&fit=crop',
      title: 'Luxury Sports Car',
      description: 'Experience the thrill of high-performance engineering with cutting-edge technology and unmatched precision.',
      category: 'Sports',
      price: '$89,999',
      features: ['V12 Engine', 'Carbon Fiber Body', '0-60 in 3.2s', 'Full Leather Interior', 'Advanced Navigation'],
      specs: { 'Engine': 'V12 Twin-Turbo', 'Horsepower': '650 HP', 'Top Speed': '200 mph', 'Transmission': 'Automatic 8-Speed' },
    },
    2: {
      id: 2,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=600&fit=crop',
      title: 'Electric Innovation',
      description: 'Future of mobility: Zero emissions, maximum efficiency, and silent power delivery.',
      category: 'Electric',
      price: '$65,499',
      features: ['500 Mile Range', 'Fast Charging (30 min)', 'Autonomous Driving', 'Zero Emissions', 'Smart AI Assistant'],
      specs: { 'Battery': '100 kWh', 'Range': '500 miles', 'Charging Time': '30 mins (80%)', 'Motor': 'Dual Motor AWD' },
    },
    3: {
      id: 3,
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b83ad38?w=1200&h=600&fit=crop',
      title: 'Classic Elegance',
      description: 'Timeless design meets modern comfort in our exclusive classic car collection.',
      category: 'Classic',
      price: '$54,999',
      features: ['Chrome Details', 'Vintage Design', 'Modern Safety', 'Retro-Modern Interior', 'Collector Grade'],
      specs: { 'Engine': 'V8 Naturally Aspirated', 'Year': 'Reproduction', 'Seating': '5 Passengers', 'Fuel Type': 'Premium Gasoline' },
    },
    4: {
      id: 4,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=600&fit=crop',
      title: 'Family SUV',
      description: 'Perfect for adventure: Spacious, reliable, and equipped with advanced safety features.',
      category: 'SUV',
      price: '$45,999',
      features: ['7-Seater', 'All-Terrain Capability', 'Panoramic Sunroof', 'Advanced Safety Suite', '360° Camera'],
      specs: { 'Engine': 'V6 EcoBoost', 'Seating': '7 Passengers', 'Cargo Space': '84 cubic feet', 'Drive': '4WD' },
    },
    5: {
      id: 5,
      image: 'https://images.unsplash.com/photo-1537449509476-eeded0bca2b3?w=1200&h=600&fit=crop',
      title: 'Compact Urban',
      description: 'Agile and efficient, designed for city living with style and personality.',
      category: 'Urban',
      price: '$24,999',
      features: ['Efficient Engine', 'Compact Size', 'Smart Technology', 'Eco-Friendly', 'Urban Design'],
      specs: { 'Engine': '4-Cylinder Turbo', 'MPG': '38 City / 47 Highway', 'Fuel Type': 'Regular Gasoline', 'Transmission': '6-Speed Automatic' },
    },
    6: {
      id: 6,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=600&fit=crop',
      title: 'Luxury Sedan',
      description: 'Premium comfort and refined technology for the discerning driver.',
      category: 'Luxury',
      price: '$72,499',
      features: ['Premium Sound System', 'Massage Seats', 'Ambient Lighting', 'Full Leather Trim', 'Executive Mode'],
      specs: { 'Engine': 'V6 Twin-Turbo', 'Horsepower': '425 HP', 'Luxury Features': 'Premium', 'Transmission': '9-Speed Automatic' },
    },
  };

  const carId = parseInt(id || '1', 10);
  const car = carDatabase[carId];

  if (!car) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Car Not Found</h1>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300 underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-16">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition animate-fade-in">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Featured
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="animate-slide-in">
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-96 lg:h-full object-cover rounded-lg shadow-2xl shadow-cyan-500/30 border border-cyan-500/30"
            />
          </div>

          {/* Details Section */}
          <div className="animate-slide-up">
            <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/30">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">{car.title}</h1>
                <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full border border-cyan-500/50 font-semibold">
                  {car.category}
                </span>
              </div>

              <p className="text-2xl font-bold text-cyan-400 mb-4">{car.price}</p>

              <p className="text-gray-200 text-lg leading-relaxed mb-8 drop-shadow-md">
                {car.description}
              </p>

              {/* Features */}
              {car.features && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Key Features</h2>
                  <ul className="grid grid-cols-2 gap-4">
                    {car.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-200 animate-list-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <span className="text-cyan-400 mr-3 text-lg">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Specs */}
              {car.specs && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">Specifications</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(car.specs).map(([key, value], idx) => (
                      <div key={idx} className="bg-black/60 p-4 rounded border border-cyan-500/20 animate-spec-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                        <p className="text-cyan-300 text-sm font-semibold uppercase">{key}</p>
                        <p className="text-white text-lg font-bold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-xl hover:shadow-cyan-500/50 transition duration-300 drop-shadow-lg animate-bounce-subtle">
                  Request Quote
                </button>
                <button className="flex-1 border border-cyan-500/50 text-cyan-300 px-6 py-3 rounded-lg font-bold hover:bg-cyan-500/10 hover:border-cyan-400 transition duration-300">
                  Schedule Test Drive
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-16 scroll-reveal">
          <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-lg text-center">More Views</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((idx) => (
              <div key={idx} className="h-64 rounded-lg overflow-hidden border border-cyan-500/30 hover:border-cyan-400/60 transition cursor-pointer group animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <img
                  src={`${car.image}?crop=${idx}`}
                  alt={`View ${idx}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
