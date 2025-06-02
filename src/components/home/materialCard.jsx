import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import materials from "../../data/materials";

const MaterialCard = memo(({ image, materialName, description, href }) => {
  return (
    <div className="w-full flex flex-col h-auto border border-blue-950 rounded-lg cursor-pointer">
      <div className="w-full bg-black h-28 xs:h-36 sm:h-44 md:h-58 lg:h-62 rounded-t-lg relative">
        <Image
          className="rounded-t-lg"
          src={image}
          alt={materialName}
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className="w-full bg-blue-950 min-h-32 max-h-36 xs:h-44 sm:min-h-48 sm:max-h-52 md:h-52 lg:h-44 xl:h-48 rounded-b-lg flex flex-col justify-between relative">
        <img
          className="absolute w-full h-full rounded-b-lg object-cover"
          src="/assets/images/main/wall-navbar.png"
          alt=""
        />
        <div className="flex flex-col gap-1">
          <h3 className="z-10 px-4 pt-3 text-yellow-500 font-semibold text-xs sm:text-sm md:text-lg lg:text-xl">
            {materialName}
          </h3>
          <p className="z-10 px-4 text-xs sm:text-xs md:text-base font-medium text-justify text-blue-950 overflow-hidden text-ellipsis whitespace-pre-line line-clamp-3">
            {description}
          </p>
        </div>

        <div className="z-10 px-4 pb-3 w-full flex justify-end mt-2">
          <Link href={href} passHref>
            <button className="z-10 border border-blue-950 text-blue-950 text-xs sm:text-sm md:text-base font-semibold px-4 py-1 rounded-lg hover:bg-blue-950 hover:text-white transition-all duration-200 cursor-pointer">
              Open
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
});

const MaterialList = () => {
  const limitedMaterials = materials.slice(0, 3);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 justify-between">
        {limitedMaterials.map((material) => (
          <MaterialCard key={material.id} {...material} />
        ))}
      </div>

      <Link href="/material" passHref>
        <button className="mt-6 px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base bg-blue-950 text-white rounded-lg hover:bg-white border border-blue-950 hover:text-blue-950 cursor-pointer transition-all duration-200">
          Selengkapnya
        </button>
      </Link>
    </div>
  );
};

export default MaterialList;
