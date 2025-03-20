"use client"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact=()=>{
    return(
        <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
        {/* Contact Information */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold text-blue-700">Our Contact Details</h3>
          <ul className="mt-4 space-y-4 text-gray-800">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <span>Sector 1, Plot No. 75, Kopar Khairane, Navi Mumbai, Thane</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600 text-2xl" />
              <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
            </li>
            {/* <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <a href="mailto:info@sweethometrust.org" className="hover:underline">info@sweethometrust.org</a>
            </li> */}
          </ul>
        </div>
    
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-600">
          <h3 className="text-2xl font-bold text-blue-700">Send Us a Message</h3>
          <form className="mt-4 space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300" />
            <textarea rows="4" placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"></textarea>
            <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    )
}

export default Contact