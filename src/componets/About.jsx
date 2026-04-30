const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">

      {/* 🔹 Top Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About Our Services
        </h1>

        <p className="text-gray-600 text-base md:text-lg">
          We connect you with trusted professionals like electricians,
          plumbers, and carpenters. Our goal is to make home services
          simple, fast, and reliable.
        </p>
      </div>

      {/* 🔹 Features Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">

        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
          <h2 className="text-xl font-semibold mb-2">⚡ Fast Service</h2>
          <p className="text-gray-600 text-sm">
            Book services instantly and get quick responses.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
          <h2 className="text-xl font-semibold mb-2">👨‍🔧 Verified Experts</h2>
          <p className="text-gray-600 text-sm">
            Skilled professionals you can trust every time.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center">
          <h2 className="text-xl font-semibold mb-2">💰 Affordable</h2>
          <p className="text-gray-600 text-sm">
            Best pricing with high-quality service.
          </p>
        </div>

      </div>

      {/* 🔹 Reviews Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
          What Users Say ⭐
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* Review 1 */}
          <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
            <p className="text-gray-600 mb-3 text-sm">
              "Amazing service! Electrician arrived on time."
            </p>
            <h3 className="font-semibold text-gray-800">Rahul</h3>
            <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</p>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
            <p className="text-gray-600 mb-3 text-sm">
              "Very professional plumber. Highly recommended!"
            </p>
            <h3 className="font-semibold text-gray-800">Amit</h3>
            <p className="text-yellow-500 text-sm">⭐⭐⭐⭐</p>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition">
            <p className="text-gray-600 mb-3 text-sm">
              "Quick booking and great service experience."
            </p>
            <h3 className="font-semibold text-gray-800">Suresh</h3>
            <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;