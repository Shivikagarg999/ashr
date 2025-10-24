"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "react-modal-image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";

const images = [
  "/images/childs.jpeg",
  "/images/sewa.jpeg",
  "/images/sewaa.jpeg",
  "/images/mm.jpeg",
  "/images/nn.jpeg",
  "/images/oo.jpeg",
  "/images/pp.jpeg",
  "/images/header.jpeg",
  "/images/mid.jpeg",
  "/images/sht.jpeg",
  "/images/award.jpeg",
  "/images/prma.jpeg",
  "/images/nm.jpeg",
  "/images/tere.jpeg",
  "/images/pic14.jpeg",
  "/images/pic15.jpeg",
  "/images/pic16.jpeg"
];

export default function Gallery() {
  return (
    <>
    <Navbar/>
    <section className="py-16 bg-gray-100 mt-6">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-10">Ashram Gallery</h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Lightbox small={src} large={src} alt={`Ashram Image ${index + 1}`} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
