import React from "react";

const materials = [
  {
    image: "/assets/images/main/material/material5.png",
    materialName: "Struktur Data",
    description:
      "Memahami cara menyusun dan mengelola data untuk efisiensi algoritma.",
    href: "/materials/struktur-data",
  },
  {
    image: "/assets/images/main/material/material2.png",
    materialName: "Algoritma dan Pemrograman",
    description:
      "Mengenal konsep dasar algoritma serta penerapannya dalam pemrograman.",
    href: "/materials/algoritma-pemrograman",
  },
  {
    image: "/assets/images/main/material/material3.png",
    materialName: "Basis Data",
    description:
      "Dasar-dasar pengelolaan database untuk menyimpan dan mengakses data secara optimal.",
    href: "/materials/basis-data",
  },
  {
    image: "/assets/images/main/material/material4.png",
    materialName: "Jaringan Komputer",
    description:
      "Memahami konsep komunikasi antar komputer dan sistem jaringan.",
    href: "/materials/jaringan-komputer",
  },
  {
    image: "/assets/images/main/material/material6.png",
    materialName: "Jaringan Komputer",
    description:
      "Memahami konsep komunikasi antar komputer dan sistem jaringan.",
    href: "/materials/jaringan-komputer",
  },
  {
    image: "/assets/images/main/material/material7.png",
    materialName: "Jaringan Komputer",
    description:
      "Memahami konsep komunikasi antar komputer dan sistem jaringan.",
    href: "/materials/jaringan-komputer",
  },
];

const MaterialCard = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {materials.map((material, index) => (
        <div
          key={index}
          className="w-full flex flex-col h-auto border border-blue-950 justify-start rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <div className="w-full bg-black h-64 rounded-t-lg">
            <img
              className="w-full h-full object-cover rounded-t-lg"
              src={material.image}
              alt={material.materialName}
            />
          </div>
          <div className="w-full bg-blue-950 px-4 py-2 h-36 rounded-b-lg">
            <h3 className="text-yellow-500 font-semibold text-lg">
              {material.materialName}
            </h3>
            <p className="text-xs font-medium text-justify text-white line-clamp-3 mt-2">
              {material.description}
            </p>
            <div className="w-full flex justify-end my-2">
              <a
                className="border border-white text-white text-sm font-semibold px-4 py-1 rounded-lg hover:bg-white hover:text-blue-950 transition-all duration-200"
                href={material.href}
              >
                Open
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaterialCard;
