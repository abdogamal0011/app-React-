import React from 'react';

function Contact(): JSX.Element {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8 scroll-reveal">
        <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-lg text-center">Contact Us</h1>
        <p className="text-gray-300 mb-8 text-center drop-shadow-md">Reach out for more information or personalized assistance.</p>
        <form className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/30 space-y-6">
          <input 
            className="w-full border border-cyan-500/50 bg-black/50 text-white rounded px-4 py-3 focus:border-cyan-400 focus:outline-none transition" 
            placeholder="Your name" 
          />
          <input 
            className="w-full border border-cyan-500/50 bg-black/50 text-white rounded px-4 py-3 focus:border-cyan-400 focus:outline-none transition" 
            placeholder="Email" 
          />
          <textarea 
            className="w-full border border-cyan-500/50 bg-black/50 text-white rounded px-4 py-3 focus:border-cyan-400 focus:outline-none transition" 
            rows={5} 
            placeholder="Message" 
          />
          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
