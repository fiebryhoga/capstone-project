import React, { memo } from "react";
import Image from "next/image";
import materials from "../../data/materials";
import Link from "next/link";

const MaterialCard = memo(({ image, materialName, description, href }) => {
  return (
    <div className="w-full flex flex-col h-auto border border-blue-950 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.01] bg-white">
      {/* Gambar atas */}
      <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-black relative">
        <Image
          className="rounded-t-lg"
          src={image}
          alt={materialName}
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>

      {/* Konten bawah */}
      <div className="w-full bg-blue-950 relative flex flex-col justify-between h-44 sm:h-48 md:h-52 lg:h-56 xl:h-60">
        <img
          className="absolute w-full h-full object-cover rounded-b-lg"
          src="/assets/images/main/wall-navbar.png"
          alt=""
        />
        <div className="flex flex-col gap-1 z-10 p-4">
          <h3 className="text-yellow-500 font-semibold text-lg sm:text-xl">
            {materialName}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-blue-950 text-justify line-clamp-3">
            {description}
          </p>
        </div>
        <div className="z-10 px-4 pb-3 flex justify-end">
          <Link href={href} passHref>
            <button className="border border-blue-950 text-blue-950 text-sm font-semibold px-4 py-1 rounded-lg hover:bg-blue-950 hover:text-white transition duration-200">
              Open
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
});

const MaterialList = () => {
  return (
    <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {materials.map((material) => (
          <MaterialCard key={material.id} {...material} />
        ))}
      </div>
    </div>
  );
};

export default MaterialList;
