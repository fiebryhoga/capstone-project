import React, { memo } from "react";
import Image from "next/image";
import materials from "../../data/materials";
import Link from "next/link";

const MaterialCard = memo(({ image, materialName, description, href }) => {
  return (
    <div className="w-full flex flex-col h-auto border border-blue-950 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.01] bg-white">
      {/* Gambar atas */}
      <div className="w-full bg-black h-36 xs:h-36 sm:h-44 md:h-58 lg:h-62 rounded-t-lg relative">
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
      <div className="w-full bg-blue-950 min-h-36 max-h-40 xs:h-44 sm:min-h-48 sm:max-h-52 md:h-52 lg:h-44 xl:h-48 rounded-b-lg flex flex-col justify-between relative">
        <img
          className="absolute w-full h-full object-cover rounded-b-lg"
          src="/assets/images/main/wall-navbar.png"
          alt=""
        />
        <div className="flex flex-col gap-1 z-10 p-4">
          <h3 className="text-yellow-500 font-semibold text-sm md:text-lg sm:text-xl">
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
    <div className="w-full">
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-between">
        {materials.map((material) => (
          <MaterialCard key={material.id} {...material} />
        ))}
      </div>
    </div>
  );
};

export default MaterialList;
