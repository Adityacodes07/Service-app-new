import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "./slice";
import toast from "react-hot-toast";

const Booking = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.booking.selectedService);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-gray-600 text-lg">No booking selected 😔</h1>
      </div>
    );
  }

  const handleConfirm = () => {
    dispatch(addBooking(data));
    toast.success("Booking Confirmed ✅");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      
      <div className="bg-white rounded-2xl shadow-md p-6 max-w-md w-full">
        
        {/* Image */}
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-52 object-cover rounded-xl mb-4"
        />

        {/* Title */}
        <h1 className="text-xl font-semibold text-gray-800 mb-2 text-center">
          Booking Details
        </h1>

        {/* Info */}
        <div className="text-gray-600 text-sm space-y-2 mt-4">
          <p><span className="font-medium text-gray-800">Name:</span> {data.name}</p>
          <p><span className="font-medium text-gray-800">Service:</span> {data.service}</p>
          <p><span className="font-medium text-gray-800">Location:</span> {data.location}</p>
          <p><span className="font-medium text-gray-800">Time:</span> {data.time}</p>
        </div>

        {/* Button */}
        <button
          onClick={handleConfirm}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
        >
          Confirm Booking
        </button>
      </div>

    </div>
  );
};

export default Booking;