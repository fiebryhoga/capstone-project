import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/assets/images/main/hero/hero2.png",
  "/assets/images/main/hero/hero3.png",
  "/assets/images/main/hero/hero4.png",
  "/assets/images/main/hero/hero5.png",
  "/assets/images/main/hero/hero6.png",
  "/assets/images/main/hero/hero7.png",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = Next, -1 = Prev

  // Fungsi untuk berpindah ke slide berikutnya (NEXT)
  const nextSlide = () => {
    setDirection(1); // Geser dari kanan ke kiri
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Fungsi untuk berpindah ke slide sebelumnya (PREV)
  const prevSlide = () => {
    setDirection(-1); // Geser dari kiri ke kanan (searah Next)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg">
      {/* Animasi Pergeseran */}
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Hero"
          className="absolute w-full h-full object-cover"
          initial={{ x: direction * 100 + "%" }} // Next (100%) -> Prev (-100%)
          animate={{ x: 0 }} // Masuk ke tengah
          exit={{ x: direction * -100 + "%" }} // Keluar ke kiri jika Next (-100%), ke kanan jika Prev (100%)
          transition={{ duration: 0.5, ease: "easeInOut" }}
          draggable={false}
        />
      </AnimatePresence>

      {/* Tombol Prev & Next */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white hover:opacity-20 opacity-40 bg-opacity-50 text-white hover:text-black p-2 rounded-full"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent hover:bg-white hover:opacity-20 opacity-40 bg-opacity-50 text-white hover:text-black p-2 rounded-full"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  );
};

export default Hero;
