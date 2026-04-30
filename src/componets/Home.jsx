import Card from "./Card";
import Hero from "./Hero";

const Home = () => {
  const servicesData = [
    
    {
      id: 1,
      name: "Rahul Sharma",
      service: "Electrician",
      location: "Bhopal",
      time: "10:00 AM",
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      name: "Amit Verma",
      service: "Plumber",
      location: "Indore",
      time: "12:30 PM",
      image: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      name: "Suresh Yadav",
      service: "Carpenter",
      location: "Jabalpur",
      time: "3:00 PM",
      image: "data:image/jpeg;base64,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",
    },
     {
    id: 4,
    name: "Ravi Patel",
    service: "AC Repair",
    location: "Gwalior",
    time: "9:30 AM",
    image: "https://i.pravatar.cc/300?img=4",
  },
  {
    id: 5,
    name: "Vikas Singh",
    service: "Painter",
    location: "Rewa",
    time: "2:00 PM",
    image: "https://i.pravatar.cc/300?img=5",
  },
  {
    id: 6,
    name: "Deepak Gupta",
    service: "Electrician",
    location: "Satna",
    time: "11:00 AM",
    image: "https://i.pravatar.cc/300?img=6",
  },
  {
    id: 7,
    name: "Ankit Jain",
    service: "Plumber",
    location: "Ujjain",
    time: "1:30 PM",
    image: "https://i.pravatar.cc/300?img=7",
  },
  {
    id: 8,
    name: "Manoj Tiwari",
    service: "Carpenter",
    location: "Sagar",
    time: "4:00 PM",
    image: "https://i.pravatar.cc/300?img=8",
  },
  {
    id: 9,
    name: "Rohit Mishra",
    service: "AC Repair",
    location: "Katni",
    time: "10:30 AM",
    image: "https://i.pravatar.cc/300?img=9",
  },
  {
    id: 10,
    name: "Ajay Dubey",
    service: "Painter",
    location: "Chhindwara",
    time: "5:00 PM",
    image: "https://i.pravatar.cc/300?img=10",
  },
  {
    id: 11,
    name: "Pankaj Yadav",
    service: "Electrician",
    location: "Sehore",
    time: "9:00 AM",
    image: "https://i.pravatar.cc/300?img=11",
  },
  {
    id: 12,
    name: "Nitin Sharma",
    service: "Plumber",
    location: "Dewas",
    time: "6:00 PM",
    image: "https://i.pravatar.cc/300?img=12",
  },
  {
    id: 13,
    name: "Kunal Singh",
    service: "Carpenter",
    location: "Ratlam",
    time: "3:30 PM",
    image: "https://i.pravatar.cc/300?img=13",
  },
  {
    id: 14,
    name: "Arjun Patel",
    service: "AC Repair",
    location: "Neemuch",
    time: "12:00 PM",
    image: "https://i.pravatar.cc/300?img=14",
  },
  {
    id: 15,
    name: "Sachin Verma",
    service: "Painter",
    location: "Hoshangabad",
    time: "7:00 PM",
    image: "https://i.pravatar.cc/300?img=15",
  },
  {
    id: 16,
    name: "Mohit Sharma",
    service: "Electrician",
    location: "Vidisha",
    time: "8:30 AM",
    image: "https://i.pravatar.cc/300?img=16",
  },
  {
    id: 17,
    name: "Tarun Gupta",
    service: "Plumber",
    location: "Shivpuri",
    time: "4:30 PM",
    image: "https://i.pravatar.cc/300?img=17",
  },
  {
    id: 18,
    name: "Lokesh Yadav",
    service: "Carpenter",
    location: "Damoh",
    time: "2:45 PM",
    image: "https://i.pravatar.cc/300?img=18",
  },

];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <Hero />

      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Available Services
        </h1>

        {/* Grid Layout (IMPORTANT CHANGE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {servicesData.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              service={item.service}
              location={item.location}
              time={item.time}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;