import React, { useState, useEffect, useRef } from "react";
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
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleUserInteraction = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  return (
    <div className="relative w-full h-[180px] sm:h-[280px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden rounded-lg shadow-lg">
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Hero"
            className="absolute w-full h-full object-cover"
            initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            draggable={false}
          />
        </AnimatePresence>
      </div>

      <button
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-white hover:opacity-50 opacity-40 text-white hover:text-black p-1 sm:p-2 md:p-3 text-sm sm:text-base md:text-lg rounded-full"
        onClick={() => {
          prevSlide();
          handleUserInteraction();
        }}
      >
        ❮
      </button>
      <button
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-white hover:opacity-50 opacity-40 text-white hover:text-black p-1 sm:p-2 md:p-3 text-sm sm:text-base md:text-lg rounded-full"
        onClick={() => {
          nextSlide();
          handleUserInteraction();
        }}
      >
        ❯
      </button>
    </div>
  );
};

export default Hero;
