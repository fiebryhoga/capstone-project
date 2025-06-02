import React from "react";
import SubPengertianJK from "./subPengertianJK";
import SubManfaatJK from "./subManfaatJK";
import SubJenisJK from "./subJenisJK";
import SubTopologiJK from "./subTopologiJK";
import SubPerangkatJK from "./subPerangkatJK";
import SubKonektivitasJK from "./subKonektivitasJK";
import SubLatihanJK from "./subLatihanJK";

const SectionContent = () => {
  return (
    <div className="min-h-64 w-8/10 flex flex-col gap-4">
      <h1 className="text-blue-950 text-3xl font-semibold text-center">
        Jaringan Komputer
      </h1>
      <p className="text-sm text-blue-950 font-medium text-justify">
        Jaringan Komputer adalah teknologi yang memungkinkan dua atau lebih
        perangkat komputer saling terhubung dan bertukar data, baik dalam jarak
        dekat (seperti melalui Wi-Fi di rumah) maupun jarak jauh (seperti akses
        internet ke server di luar negeri). Dengan jaringan komputer, berbagai
        aktivitas digital seperti mengirim file, mengakses website, bermain game
        online, hingga bekerja secara kolaboratif dapat dilakukan dengan mudah
        dan efisien. Kenapa Materi Ini Penting? Karena hampir semua aktivitas
        digital saat ini bergantung pada jaringan komputer! Tanpa jaringan,
        tidak akan ada internet, media sosial, video call, atau layanan cloud.
        Memahami cara kerja jaringan komputer membuat kita lebih sadar bagaimana
        data berpindah dari satu perangkat ke perangkat lain, sekaligus membuka
        wawasan tentang teknologi komunikasi modern. <b>Siap Belajar?</b> Yuk,
        kita pelajari konsep dasar jaringan komputer, jenis-jenis jaringan,
        perangkat yang digunakan, hingga bagaimana internet bekerja. Siapkan
        semangat, koneksi nalar, dan rasa ingin tahu kamu — karena kita akan
        menjelajahi dunia yang menghubungkan semuanya: jaringan komputer!
      </p>

      <SubPengertianJK/>
      {/* <SubManfaatJK/>
      <SubJenisJK/>
      <SubTopologiJK/>
      <SubPerangkatJK/>
      <SubKonektivitasJK/> */}
      <SubLatihanJK/>
    </div>
  );
};

export default SectionContent;
