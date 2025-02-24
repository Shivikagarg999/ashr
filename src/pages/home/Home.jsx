import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaAward, FaBook, FaHeartbeat, FaTshirt, FaHome, FaHandsHelping,FaUtensils , FaHandHoldingHeart, FaChild, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWheelchair, FaTransgender, FaMedal} from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        
        {/* Home Section */}
        <section className="h-screen relative flex items-center justify-center text-center px-6 md:px-12 text-white">
  {/* Background Image */}
  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/header.jpeg')" }} />

  {/* Overlay for better readability */}
  <div className="absolute inset-0 bg-black bg-opacity-55"></div>

  <motion.div initial="hidden" animate="visible" variants={fadeIn} className="relative max-w-6xl mx-auto z-10">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wide bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
      Welcome to <br className="hidden sm:block" /> Sweet Home Trust
    </h1>
    <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
      Creating a better world through care, support, and empowerment.
    </p>
    <motion.div whileHover={{ scale: 1.1 }} className="mt-6 sm:mt-8">
      <Link href="/about" className="inline-block bg-white text-blue-700 font-semibold text-base sm:text-lg md:text-xl px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-gray-200 transition-all">
        Learn More
      </Link>
    </motion.div>
  </motion.div>
        </section>

        {/* About Section */}
        <section className="bg-blue-50 text-blue-900 py-16 px-6 md:px-12">
  <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-blue-700">About Sweet Home Trust</h2>
    <p className="mt-3 text-lg font-medium text-blue-800">Empowering Communities, Transforming Lives</p>
  </motion.div>

  <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-5xl mx-auto mt-8 text-center">
    <p className="text-lg text-gray-800 leading-relaxed">
      <strong>Sweet Home Trust</strong> has been dedicated to social service for over <strong>22 years</strong>, providing care and support to 
      marginalized communities across <strong>Navi Mumbai</strong>. Led by <strong>Mrs. Pratibha Deepak Karekar</strong>, the trust actively works 
      to uplift underprivileged individuals, offering them dignity, resources, and a better future.
    </p>
  </motion.div>

  <div className="grid md:grid-cols-2 gap-10 mt-12 max-w-5xl mx-auto">
    {/* Mission Section */}
    <motion.div variants={fadeIn} initial="hidden" animate="visible" className="bg-white shadow-md p-6 rounded-2xl border-l-4 border-blue-600">
      <h3 className="text-2xl font-bold text-blue-700">Our Mission</h3>
      <ul className="mt-4 space-y-3 text-gray-700">
        {[
          { icon: <FaHandHoldingHeart className="text-blue-600" />, text: "Providing shelter for senior citizens (Old Age Home)" },
          { icon: <FaChild className="text-blue-600" />, text: "Supporting orphaned children" },
          { icon: <FaWheelchair className="text-blue-600" />, text: "Assisting differently-abled individuals" },
          { icon: <FaTransgender className="text-blue-600" />, text: "Empowering the transgender community" },
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            {item.icon} <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </motion.div>

    {/* Awards & Recognitions Section */}
    <motion.div variants={fadeIn} initial="hidden" animate="visible" className="bg-white shadow-md p-6 rounded-2xl border-l-4 border-blue-600">
      <h3 className="text-2xl font-bold text-blue-700">Recognizing Social Change-makers</h3>
      <ul className="mt-4 space-y-3 text-gray-700">
        {[
          { icon: <FaAward className="text-yellow-500" />, text: "Jhansi Ki Rani Award – Honoring 120 exceptional women" },
          { icon: <FaMedal className="text-yellow-500" />, text: "Narveer Tanaji Honor – Tribute to courageous men" },
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            {item.icon} <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  </div>
        </section>

        {/* Our Causes Section */}
        <section className="bg-white text-blue-900 py-16 px-6 md:px-12">
  <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-blue-700">Our Causes</h2>
    <p className="mt-3 text-lg font-medium text-gray-800">
      Making a difference in the lives of the underprivileged through compassionate initiatives.
    </p>
  </motion.div>

  <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto">
    {[
      {
        title: "Caring for the Elderly",
        desc: "Providing a safe, nurturing, and loving environment for senior citizens.",
        icon: <FaHome className="text-blue-600 text-4xl" />,
      },
      {
        title: "Orphan Support",
        desc: "Ensuring orphaned children receive shelter, education, and emotional support.",
        icon: <FaHandsHelping className="text-blue-600 text-4xl" />,
      },
      {
        title: "Food for the Needy",
        desc: "Distributing nutritious meals to underprivileged families and individuals.",
        icon: <FaUtensils className="text-blue-600 text-4xl" />,
      },
    ].map((cause, index) => (
      <motion.div
        key={index}
        className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-600"
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center gap-4">
          {cause.icon}
          <h3 className="text-2xl font-bold text-blue-700">{cause.title}</h3>
        </div>
        <p className="mt-4 text-gray-700 leading-relaxed">{cause.desc}</p>
      </motion.div>
    ))}
  </div>
</section>
<section className="bg-white text-blue-900 py-16 px-6 md:px-12">
  {/* Header Section */}
  <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-blue-700">Honors & Awards</h2>
    <p className="mt-3 text-lg font-medium text-gray-800">
      Recognized for exceptional contributions to society with over **150+ prestigious awards**.
    </p>
  </motion.div>

  {/* Awards Grid */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
    {[
      "माननीय देवेंद्र फडणवीस यांच्याकडून पुरस्कार",
      "भारत माता पुरस्कार - महाराष्ट्र स्टार बुक ऑफ रेकॉर्ड",
      "जिजाऊ पुरस्कार - तेजस फाउंडेशन",
      "निर्भया पुरस्कार - एसपी",
      "महाराष्ट्र स्टेट मॅंगो असोसिएशन पुरस्कार",
      "हिरकणी पुरस्कार - स्वप्निल फाऊंडेशन",
      "आर्यन फाउंडेशन पुरस्कार",
      "महाराष्ट्र सखी मंच पुरस्कार",
      "महाराष्ट्र पत्रकार संघ दादर पुरस्कार",
      "झाशीची राणी पुरस्कार - आपला आवाज न्यूज चैनल पुणे",
      "आनंद यात्री पुरस्कार",
      "जब जागो तब सवेरा पुरस्कार",
      "अग्निशिका मंच संस्थेकडून 5 पुरस्कार",
      "महाराष्ट्र राज्य आंबा महोत्सव कडून 3 पुरस्कार",
    ].map((award, index) => (
      <motion.div 
        key={index} 
        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-600 flex items-center gap-3"
        whileHover={{ scale: 1.05 }}
      >
        <FaAward className="text-blue-600 text-2xl" />
        <p className="text-gray-800">{award}</p>
      </motion.div>
    ))}
  </div>

  {/* Additional Recognition */}
  <div className="mt-12 text-center">
    <p className="text-lg text-gray-700">
      Honored by **150+ distinguished organizations and Padma Shri awardees** for outstanding social service.  
      Our dedication continues in various social and cultural fields.
    </p>
  </div>
</section>

<section className="relative bg-white text-blue-900 py-16 px-6 md:px-12">
  <div className="max-w-5xl mx-auto relative h-[60vh]">
    <img 
      src="/images/mid.jpeg" 
      alt="NGO Volunteers Helping Community" 
      className="rounded-2xl shadow-lg w-full h-full object-cover"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
        सेवा हीच खरी भक्ती आहे.
      </h2>
    </div>
  </div>
</section>


<section className="bg-blue-50 text-blue-900 py-16 px-6 md:px-12">
  {/* Header Section */}
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-extrabold text-blue-700">Get in Touch</h2>
    <p className="mt-3 text-lg font-medium text-gray-800">
      We’d love to hear from you! Whether you have questions, need help, or want to collaborate, feel free to reach out.
    </p>
  </div>

  {/* Contact Info & Form Grid */}
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
        <li className="flex items-center gap-3">
          <FaEnvelope className="text-blue-600 text-2xl" />
          <a href="mailto:info@sweethometrust.org" className="hover:underline">info@sweethometrust.org</a>
        </li>
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
</section>

      </main>
      <Footer/>
    </div>
  );
}