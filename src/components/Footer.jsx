import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold">Sweet Home Trust</h3>
          <p className="mt-3 text-gray-300">
            Dedicated to serving the elderly, orphans, differently-abled, and underprivileged communities for over 22 years.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <ul className="mt-3 space-y-2 text-gray-300">
            <li><FaMapMarkerAlt className="inline mr-2" /> Koparkhairane, Navi Mumbai, Maharashtra</li>
            <li><FaPhone className="inline mr-2" /> 9892687313, 7666655757</li>
            <li><FaEnvelope className="inline mr-2" /> info@sweethometrust.com</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="mt-3 flex gap-4">
            <a href="#" className="text-gray-300 hover:text-white text-2xl"><FaFacebook /></a>
            <a href="#" className="text-gray-300 hover:text-white text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-300 hover:text-white text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-white text-2xl"><FaYoutube /></a>
          </div>
        </div>
      
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-8 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Sweet Home Trust. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
