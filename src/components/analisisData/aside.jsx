import React from 'react'

const Aside = () => {
  return (
    <div className="hidden min-h-64 w-full md:w-8/10 md:flex flex-col gap-4">
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          Analisis Data
        </h1>
        <div className="flex flex-col text-sm font-medium w-full">
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Pengertian Analisis Data
          </a>

          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Latihan
          </a>
        </div>
      </div>
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          References
        </h1>
        <div className="flex flex-col text-sm font-medium w-full">
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Referensi A
          </a>
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Referensi B
          </a>
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Referensi C
          </a>
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Referensi D
          </a>
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Referensi E
          </a>
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Referensi F
          </a>
        </div>
      </div>
    </div>
  );
}

export default Aside;
