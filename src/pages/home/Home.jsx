import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaAward, FaBook, FaHeartbeat, FaTshirt, FaHome, FaHandsHelping,FaUtensils , FaHandHoldingHeart, FaChild, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWheelchair, FaTransgender, FaMedal} from "react-icons/fa";
import Contact from "../contact";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Pitr Paksh Donation Banner - Above Navbar */}
      <section className="bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 text-white py-3 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10"
        >
          <div className="flex items-center gap-3 mb-2 md:mb-0">
            <div className="bg-white bg-opacity-20 p-2 rounded-full">
              <FaHandHoldingHeart className="text-xl" />
            </div>
            <div>
              <h3 className="text-sm md:text-lg font-bold">🙏 Pitr Paksh - Honor Your Ancestors</h3>
              <p className="text-xs md:text-sm opacity-90">Support our elderly with your generous donation during this sacred period</p>
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <Link href="/donate" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-full shadow-lg hover:bg-orange-50 transition-all text-sm md:text-base">
              <FaHandHoldingHeart className="text-sm md:text-base" />
              Donate Now
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Navbar />
      <main className="flex-grow pt-16 md:pt-20">
        
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

        {/* Donation Section */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 px-6 md:px-12 text-white">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={fadeIn} 
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-extrabold">Support Our Mission</h2>
              <p className="mt-4 text-xl max-w-3xl mx-auto">
                Your donation helps us continue our work with the elderly, children, and marginalized communities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { amount: "₹5,000", desc: "Support our general welfare programs", color: "from-blue-500 to-blue-600" },
                { amount: "₹10,000", desc: "Help sustain our long-term initiatives", color: "from-blue-600 to-blue-700" },
                { amount: "₹50,000", desc: "Make a significant impact on our community", color: "from-blue-700 to-blue-800" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br p-6 rounded-2xl shadow-lg text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -10 }}
                  style={{ background: `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` }}
                >
                  <div className="text-3xl font-bold mb-4">{item.amount}</div>
                  <p className="text-blue-100">{item.desc}</p>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="mt-6"
                  >
                    <Link 
                      href="/donate" 
                      className="inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded-full hover:bg-blue-50 transition-all"
                    >
                      Donate
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={fadeIn} 
              className="text-center mt-12"
            >
              <p className="text-lg mb-6">You can also donate any custom amount to support our cause</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:bg-yellow-500 transition-all"
              >
                Make a Donation
              </motion.button>
            </motion.div>
          </div>
        </section>

        <section 
          className="relative bg-[url('/images/childs.jpeg')] bg-cover bg-center bg-no-repeat text-blue-900 py-16 px-6 md:px-12"
        >
          <div className="absolute inset-0 bg-black/40"></div>
          
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto text-center relative">
            <h2 className="text-4xl font-extrabold text-white">Our Causes</h2>
            <p className="mt-3 text-lg font-medium text-gray-200">
              Making a difference in the lives of the underprivileged through compassionate initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-6xl mx-auto relative">
            {[
              {
                title: "Caring for the Elderly",
                desc: "Providing a safe, nurturing, and loving environment for senior citizens.",
                icon: <FaHome className="text-white text-4xl" />,
              },
              {
                title: "Orphan Support",
                desc: "Ensuring orphaned children receive shelter, education, and emotional support.",
                icon: <FaHandsHelping className="text-white text-4xl" />,
              },
              {
                title: "Food for the Needy",
                desc: "Distributing nutritious meals to underprivileged families and individuals.",
                icon: <FaUtensils className="text-white text-4xl" />,
              },
            ].map((cause, index) => (
              <motion.div
                key={index}
                className="bg-blue-900/70 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500 text-white"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4">
                  {cause.icon}
                  <h3 className="text-2xl font-bold">{cause.title}</h3>
                </div>
                <p className="mt-4 leading-relaxed">{cause.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-b from-blue-500 to-blue-900 text-white py-16 px-6 md:px-12">
          {/* Header Section */}
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold">Honors & Awards</h2>
            <p className="mt-3 text-lg font-medium">
              Recognized for exceptional contributions to society with over <strong>150+ prestigious awards</strong>.
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
                className="bg-white/80 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-700 flex items-center gap-3 text-blue-900"
                whileHover={{ scale: 1.05 }}
              >
                <FaAward className="text-blue-700 text-2xl" />
                <p className="font-medium">{award}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Recognition */}
          <div className="mt-12 text-center">
            <p className="text-lg">
              Honored by <strong>150+ distinguished organizations and Padma Shri awardees</strong> for outstanding social service.  
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
              We'd love to hear from you! Whether you have questions, need help, or want to collaborate, feel free to reach out.
            </p>
          </div>

          {/* Contact Info & Form Grid */}
          <Contact/>
        </section>

      </main>
      <Footer/>
    </div>
  );
}
