import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 pt-16 pb-12">
      
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">

        {/* 🔹 Left Content */}
        <div className="flex-1 text-center md:text-left">
          
          {/* Badge */}
          <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full mb-4">
            Trusted Services Near You
          </span>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Book Home Services <br />
            <span className="text-black">Quick & Easy</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Find trusted electricians, plumbers, and carpenters near you.  
            Fast booking, verified experts, and affordable pricing.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button
              onClick={() => navigate("/")}
              className="bg-black text-white px-6 py-3 rounded-xl hover:scale-105 active:scale-95 transition"
            >
              Explore Services
            </button>

            <button
              onClick={() => navigate("/my-bookings")}
              className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-black hover:text-white transition"
            >
              My Bookings
            </button>
          </div>
        </div>

        {/* 🔹 Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
            alt="service"
            className="w-[280px] sm:w-[350px] md:w-[420px] rounded-2xl shadow-md hover:scale-105 transition duration-300"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;