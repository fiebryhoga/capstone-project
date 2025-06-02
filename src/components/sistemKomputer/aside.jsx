import React from 'react'

const Aside = () => {
  return (
    <div className="hidden min-h-64 w-full md:w-2/10 md:flex flex-col gap-4">
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="md:text-sm lg:text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          Sistem Komputer
        </h1>
        <div className="flex flex-col text-xs lg:text-sm font-medium w-full">
          <a href="" className="w-full py-1 px-2 hover:bg-gray-100">
            Mengenal Sistem Komputer
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
        <div className="flex flex-col text-xs lg:text-sm font-medium w-full">
          <a
            href="https://www.geeksforgeeks.org/computer-system-overview/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            GeeksforGeeks - Computer System Overview
          </a>
          <a
            href="https://www.tutorialspoint.com/computer_fundamentals/computer_architecture.htm"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            TutorialsPoint - Computer Architecture
          </a>
          <a
            href="https://csf.k12.sd.us/Hardware%20&%20Software%20Basics.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            PDF - Hardware & Software Basics
          </a>
          <a
            href="https://edu.gcfglobal.org/en/computerbasics/understanding-operating-systems/1/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            GCFGlobal - Understanding Operating Systems
          </a>
          <a
            href="https://www.ibm.com/docs/en/zos-basic-skills?topic=systems-how-computers-work"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            IBM Docs - How Computers Work
          </a>
          <a
            href="https://www.khanacademy.org/computing/computer-science/informationtheory"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Khan Academy - Data & Information Theory
          </a>
        </div>
      </div>
    </div>
  );
}

export default Aside;
