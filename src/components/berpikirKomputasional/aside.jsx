import React from "react";

const Aside = () => {
  return (
    <div className="min-h-64 w-2/10 flex flex-col gap-8">
      {/* Submateri Berpikir Komputasional */}
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          Berpikir Komputasional
        </h1>
        <div className="flex flex-col text-sm font-medium w-full">
          <a href="#" className="w-full py-1 px-2 hover:bg-gray-100">
            Pengertian Berpikir Komputasional
          </a>
          <a href="#" className="w-full py-1 px-2 hover:bg-gray-100">
            Decomposition (Memecah Masalah)
          </a>
          <a href="#" className="w-full py-1 px-2 hover:bg-gray-100">
            Pattern Recognition (Pengenalan Pola)
          </a>
          <a href="#" className="w-full py-1 px-2 hover:bg-gray-100">
            Abstraction (Abstraksi)
          </a>
          <a href="#" className="w-full py-1 px-2 hover:bg-gray-100">
            Algorithm Design (Perancangan Algoritma)
          </a>
          <a href="#" className="w-full py-1 px-2 hover:bg-gray-100">
            Evaluasi & Debugging
          </a>
          <a href="#" className="w-full py-1 px-2 hover:bg-gray-100">
            Penerapan di Dunia Nyata
          </a>
          <a href="#" className="w-full py-1 px-2 hover:bg-gray-100">
            Latihan & Kuis
          </a>
        </div>
      </div>

      {/* Referensi */}
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          Referensi
        </h1>
        <div className="flex flex-col text-sm font-medium w-full">
          <a
            href="https://www.bbc.co.uk/bitesize/guides/zp92mp3/revision/1"
            className="w-full py-1 px-2 hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            BBC Bitesize – Computational Thinking
          </a>
          <a
            href="https://csunplugged.org/en/topics/computational-thinking/"
            className="w-full py-1 px-2 hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            CS Unplugged
          </a>
          <a
            href="https://teachcomputing.org/curriculum/key-stage-3/computational-thinking"
            className="w-full py-1 px-2 hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Teach Computing – KS3
          </a>
          <a
            href="https://www.khanacademy.org/computing/computer-science/algorithms"
            className="w-full py-1 px-2 hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Khan Academy – Algorithms
          </a>
          <a
            href="https://www.edx.org/course/cs50s-introduction-to-computer-science"
            className="w-full py-1 px-2 hover:bg-gray-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            edX – CS50 Harvard
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aside;
