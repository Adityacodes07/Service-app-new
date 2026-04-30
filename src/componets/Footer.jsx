import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Logo / About */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              ServiceApp
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Trusted home services like electricians, plumbers, and more.  
              Book easily with verified professionals near you.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-900">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-600 hover:text-black transition"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="text-gray-600 hover:text-black transition"
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/my-bookings"
                  className="text-gray-600 hover:text-black transition"
                >
                  Bookings
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3 text-gray-900">
              Contact
            </h3>

            <div className="text-gray-600 text-sm space-y-2">
              <p>📍 Madhya Pradesh, India</p>
              <p>📧 support@serviceapp.com</p>
              <p>📞 +91 9876543210</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-4 text-center text-gray-500 text-sm">
          © 2026 ServiceApp. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;