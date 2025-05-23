import React from "react";

const Aside = () => {
  return (
    <div className="min-h-64 w-2/10 flex flex-col gap-8">
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          Informatika dan Keterampilan Generik
        </h1>
        <div className="flex flex-col text-sm font-medium w-full">
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Pengantar Informatika di SMA
          </a>
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Informatika di Era Digital
          </a>
          <a
            href=""
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Kompetensi Generik dalam Informatika
          </a>
          <a
            href=""
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Struktur Materi Informatika
          </a>
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Perbedaan Informatika di SMA dan SMP
          </a>
        </div>
      </div>
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          References
        </h1>
        <div className="flex flex-col text-sm font-medium w-full">
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Buku Informatika Kemdikbud
          </a>
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Modul Informatika SMA
          </a>
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Sumber Daring Lainnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aside;
