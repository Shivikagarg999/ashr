"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";
import { FaAward, FaBook, FaHeartbeat, FaTshirt, FaHome, FaHandsHelping,FaUtensils ,FaDonate, FaHandHoldingHeart, FaChild, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWheelchair, FaTransgender, FaMedal} from "react-icons/fa";
import Contact from "./contact";

const AboutPage = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-gray-100 min-h-screen pt-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header and Description Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Sweet Home Trust
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 max-w-2xl mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Established in 1975 and renewed in 2001, Sweet Home Trust is dedicated to providing compassionate care for the elderly, handicapped, bedridden, and underprivileged individuals. Our mission is to create a safe and nurturing environment for those in need, offering medical assistance, therapy, and recreational activities.
            </motion.p>
          </div>
          {/* Image Section */}
          <motion.div className="flex justify-center" whileHover={{ scale: 1.05 }}>
            <Image src="/images/sht.jpeg" width={800} height={600} alt="Sweet Home Trust" className="rounded-xl shadow-lg" />
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {["24/7 Medical Care", "Pain Management & Therapy", "Separate Facilities for Men & Women", "Recreational Activities & Picnics", "Support for Widows & Underprivileged Women", "Educational & Welfare Programs"].map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="bg-blue-500 text-white p-3 rounded-full flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-700">{service}</h3>
            </motion.div>
          ))}
        </div>

        
        {/* Donation Section */}
<motion.div
  className="mt-16 bg-blue-600 text-white py-10 px-6 rounded-lg shadow-lg grid md:grid-cols-2 items-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div>
    {/* Animated Donate Heading */}
    <motion.h2
      className="text-3xl font-bold mb-4 text-center md:text-left"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Donate & Make a Difference
    </motion.h2>

    <p className="text-lg mb-4">Donations in cash and kind are welcome. Your support helps us continue our mission.</p>
    <p className="text-lg font-semibold">Bank: Saraswat Bank</p>
    <p className="text-lg">Account No.: 263200100002879</p>
    <p className="text-lg">IFSC Code: SRCB0000263</p>
    <p className="text-lg">Branch: Koparkhairne, Navi Mumbai</p>
    <p className="text-lg font-semibold mt-4">Contact: 9892687313 / 9082356927</p>

    {/* Animated Donate Button */}
   {/* Animated Donate Button with Continuous Movement */}
<motion.button
  className="mt-6 bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg shadow-md text-lg hover:bg-yellow-500 transition-all"
  animate={{ y: [0, -10, 0] }}  // Moves up and down continuously
  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}  // Infinite loop with smooth transition
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  Donate Now
</motion.button>

  </div>

  <div className="flex justify-center">
    <Image src="/images/scanner.jpeg" width={400} height={400} alt="Donation QR Code" className="rounded-lg shadow-md" />
  </div>
</motion.div>
      </div>
    </div>
    <section className="bg-blue-50 text-blue-900 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-700">Get in Touch</h2>
        <p className="mt-3 text-lg font-medium text-gray-800">
          We’d love to hear from you! Whether you have questions, need help, or want to collaborate, feel free to reach out.
        </p>
      </div>
    
      {/* Contact Info & Form Grid */}
      <Contact/>
    </section>
    <Footer/>
    </>
  );
};

export default AboutPage;