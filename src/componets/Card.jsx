import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBooking } from "./slice";

const Card = ({ name, service, location, time, image }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBooking = () => {
    dispatch(setBooking({ name, service, location, time, image }));
    navigate("/booking");
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group">
      
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-44 object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Service Badge */}
        <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
          {service}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        
        {/* Name */}
        <h2 className="text-lg font-semibold text-gray-800">
          {name}
        </h2>

        {/* Info */}
        <div className="text-sm text-gray-500 mt-1 space-y-1">
          <p>📍 {location}</p>
          <p>⏰ {time}</p>
        </div>

        {/* Button */}
        <button
          onClick={handleBooking}
          className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:scale-105 active:scale-95 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Card;