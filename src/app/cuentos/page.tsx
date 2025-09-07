"use client";

import Image from "next/image";
import { useState } from "react";

export default function Cuentos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 30;

  const nextImage = () => {
    if (currentIndex < totalImages - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <span className="w-screen flex justify-center text-[50px] font-last-didone font-hairline text-white pb-10">
        Cuentos
      </span>

      <div className="relative w-full flex justify-center">
        <div className="relative max-w-4xl overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 300}px)` }}
          >
            {Array.from({ length: totalImages }, (_, index) => (
              <div key={index} className="flex-shrink-0 w-[300px] h-96 mx-2">
                <Image
                  src={`https://static.photos/blurred/300x400/${index + 1}`}
                  alt={`Image ${index + 1}`}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {currentIndex > 0 && (
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
          >
            ←
          </button>
        )}

        {currentIndex < totalImages - 3 && (
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
          >
            →
          </button>
        )}
      </div>
      <span className="w-screen flex justify-center text-[30px] font-last-didone font-hairline text-white pt-10">
        Recomendaciones
      </span>
    </>
  );
}
