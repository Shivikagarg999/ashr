"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";
import { motion } from "framer-motion";
import Image from "next/image";

const Donate = () => {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-28 px-6 py-12">

      <section className="relative bg-[url('/images/nm.jpeg')] mb-6 bg-cover w-full rounded-md bg-center bg-no-repeat py-36 px-6 md:px-12">
  {/* Overlay for better readability */}
  <div className="absolute inset-0 bg-black/10"></div> 

  {/* Header Section */}
  <motion.div
  className="text-center mb-12 max-w-3xl mx-auto relative text-black"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <h1 className="text-5xl font-bold mb-4 drop-shadow-md">Make a Difference Today</h1>
  <p className="text-lg drop-shadow-sm">
    Your donation supports our mission to provide food, shelter, and education to those in need.
    Every contribution brings us closer to a better tomorrow.
  </p>
</motion.div>
</section>

      {/* Impact Section */}
      <motion.div
        className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white shadow-lg p-8 rounded-lg border-t-4 border-blue-600 text-center text-xl">
          <h2 className="text-3xl font-bold text-blue-700">10,000+</h2>
          <p className="text-gray-700">Meals Provided</p>
        </div>
        <div className="bg-white shadow-lg p-8 rounded-lg border-t-4 border-blue-600 text-center text-xl">
          <h2 className="text-3xl font-bold text-blue-700">500+</h2>
          <p className="text-gray-700">Children Educated</p>
        </div>
        <div className="bg-white shadow-lg p-8 rounded-lg border-t-4 border-blue-600 text-center text-xl">
          <h2 className="text-3xl font-bold text-blue-700">1,000+</h2>
          <p className="text-gray-700">Families Helped</p>
        </div>
      </motion.div>

      {/* Donation Methods Section */}
      <motion.div
        className="bg-blue-600 text-white py-12 px-8 rounded-lg shadow-lg grid md:grid-cols-2 items-center max-w-5xl w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Bank & UPI Details */}
        <div>
          <h2 className="text-3xl font-bold mb-6">How You Can Donate</h2>
          <p className="text-xl font-semibold">✅ Bank Transfer</p>
          <p className="text-xl">Bank: Saraswat Bank</p>
          <p className="text-xl">Account No.: 263200100002879</p>
          <p className="text-xl">IFSC Code: SRCB0000263</p>
          <p className="text-xl">Branch: Koparkhairne, Navi Mumbai</p>

          <p className="text-xl font-semibold mt-6">✅ UPI / QR Code</p>
          <p className="text-xl">UPI ID: donate@sbi</p>
          <p className="text-xl">PhonePe / Google Pay accepted</p>

          <p className="text-xl font-semibold mt-6">📞 Need Assistance?</p>
          <p className="text-xl">Call: 9892687313 / 9082356927</p>
        </div>

        {/* QR Code */}
        <div className="flex justify-center">
          <Image
            src="/images/scanner.jpeg"
            width={450}
            height={450}
            alt="Donation QR Code"
            className="rounded-lg shadow-md"
          />
        </div>
      </motion.div>

      <section className="relative bg-[url('/images/sewaaa.jpeg')] bg-cover bg-center mt-14 bg-no-repeat py-16 px-6 md:px-12">
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Why Donate Section */}
  <motion.div
    className=" relative bg-white/70 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-center mt-2 border-t-4 border-blue-700"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h2 className="text-4xl font-bold text-blue-800 mb-6 drop-shadow-lg">Why Donate?</h2>
    <p className="text-lg text-gray-800 leading-relaxed">
      Your support funds **education**, provides **essential healthcare**, and ensures **no one sleeps hungry**.  
      <span className="font-semibold text-blue-700">Together, we can make a lasting impact.</span>
    </p>
  </motion.div>
</section>


      {/* Animated Donate Button */}
      <motion.button
        className="mt-10 bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-lg shadow-md text-xl hover:bg-yellow-500 transition-all"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Donate Now
      </motion.button>
      </div>
      <Footer/>
    </>
  );
};

export default Donate;