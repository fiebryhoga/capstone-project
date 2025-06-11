import React from "react";

const Aside = () => {
  return (
    <div className="hidden min-h-64 w-full md:w-2/10 md:flex flex-col gap-4">
      {/* Bagian Materi Jaringan Komputer */}
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          Jaringan Komputer
        </h1>
        <div className="flex flex-col text-sm font-medium w-full">
          <a
            href="https://www.gamelab.id/news/182-mengenal-jaringan-komputer-dan-jenis-jenisnya"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Pengenalan Jaringan Komputer
          </a>
          <a
            href="https://www.proprofs.com/quiz-school/story.php?title=latihan-soal-jaringan-dasar"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Latihan Soal Jaringan Dasar
          </a>
        </div>
      </div>

      {/* Bagian Referensi Tambahan */}
      <div className="w-full border border-blue-950 rounded-lg flex flex-col justify-center items-start py-2">
        <h1 className="text-base text-center font-semibold pb-1 border-b border-b-blue-950 w-full mb-4">
          References
        </h1>
        <div className="flex flex-col text-sm font-medium w-full">
          <a
            href="https://www.cisco.com/c/en/us/solutions/small-business/resource-center/networking/networking-basics.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Cisco - Networking Basics (EN)
          </a>
          <a
            href="https://www.cloudflare.com/learning/network-layer/what-is-a-computer-network/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Cloudflare - Computer Network (EN)
          </a>
          <a
            href="https://id.wikipedia.org/wiki/Jaringan_komputer"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Wikipedia - Jaringan Komputer
          </a>
          <a
            href="https://www.dicoding.com/blog/jaringan-komputer-pengertian-dan-tipenya/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Dicoding - Pengertian & Tipe
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            MDN - Cara Kerja Internet (EN)
          </a>
          <a
            href="https://www.guru99.com/types-of-computer-network.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-1 px-2 hover:bg-gray-100"
          >
            Guru99 - Network Types (EN)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aside;
