import { useNavigate } from "react-router-dom";
import image from "../../public/favicon.ico";

const Developer = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">

      <div className="max-w-5xl mx-auto">

        {/* Profile Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">

          {/* Image */}
          <img
            src={image}
            alt="Aditya"
            className="w-40 h-40 rounded-full object-cover shadow"
          />

          {/* Info */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Aditya Kewat
            </h1>

            <p className="text-gray-600 mt-2">
              Full Stack Developer (React | MERN)
            </p>

            <p className="text-gray-500 text-sm mt-3">
              I build modern, responsive web applications with clean UI and 
              scalable architecture. Passionate about solving real-world problems 
              using technology.
            </p>

            {/* Buttons */}
            <div className="mt-5 flex gap-3 justify-center md:justify-start flex-wrap">

              {/* Portfolio */}
              <a
                href="https://adityacodes07.github.io/my-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-5 py-2 rounded-xl hover:scale-105 transition"
              >
                View Portfolio
              </a>

              {/* Resume */}
              <a
                href="/Jake_s_Resume__1_ (2).pdf"
                download
                className="border px-5 py-2 rounded-xl hover:bg-black hover:text-white transition"
              >
                Download Resume
              </a>

            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {["React", "JavaScript", "Redux", "Tailwind", "Node.js", "MongoDB"].map(
              (skill, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full shadow-sm text-sm text-gray-700"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>

        {/* Back */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/")}
            className="text-gray-600 hover:text-black transition"
          >
            ← Back to Home
          </button>
        </div>

      </div>
    </div>
  );
};

export default Developer;