import React from "react";

const Aside = () => {
  return (
    <div className="min-h-64 w-2/10 flex flex-col gap-8">
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          Algoritma dan Pemrograman
        </h1>
        <div className="flex flex-col text-sm font-medium w-full">
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Konsep Algoritma
          </a>
          
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Latihan / Proyek Mini
          </a>
        </div>
      </div>
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          References
        </h1>
        <div className="flex flex-col text-sm font-medium w-full">
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Modul Informatika X Kemendikbud
          </a>
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Python for Beginners - W3Schools
          </a>
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Flowgorithm Documentation
          </a>
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            GeeksForGeeks – Basic Programming
          </a>
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Buku "Dasar Pemrograman" - E. Sudaryanto
          </a>
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Stack Overflow (Diskusi Pemrograman)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aside;
