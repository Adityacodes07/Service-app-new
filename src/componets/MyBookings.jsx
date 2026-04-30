import { useSelector, useDispatch } from "react-redux";
import { deleteBooking } from "./slice";
import toast from "react-hot-toast";

const MyBookings = () => {
  const bookings = useSelector((state) => state.booking.bookings);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteBooking(index));
    toast.success("Booking Deleted ❌");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        My Bookings
      </h1>

      {/* Empty State */}
      {bookings.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-500">
          <p className="text-lg">No bookings yet 😔</p>
          <p className="text-sm">Book a service to see it here</p>
        </div>
      ) : (
        
        /* Grid Layout */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bookings.map((item, index) => (
            
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
            >
              
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h2>

                <p className="text-sm text-gray-500">{item.service}</p>
                <p className="text-sm text-gray-500">{item.location}</p>
                <p className="text-sm text-gray-500">{item.time}</p>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(index)}
                  className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
                >
                  Delete
                </button>
              </div>
            </div>

          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;