import React from 'react';

function About(): JSX.Element {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 scroll-reveal">
        <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">About AutoHub</h1>
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/30">
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            AutoHub connects enthusiasts with the best selection of cars — from classic
            collections to modern electric vehicles. We curate and maintain a premium
            selection for buyers and collectors worldwide.
          </p>
          <p className="text-lg text-cyan-100 leading-relaxed">
            Our mission is to revolutionize the automotive experience with cutting-edge
            technology, exceptional service, and a passion for excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
