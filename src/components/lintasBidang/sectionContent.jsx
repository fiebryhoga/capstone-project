import React from "react";
import SubPengantarLB from "./subPengantarLB";
import SubLatihanIG from "./subLatihanIG";
import SubEraIG from "./subEraIG";
import SubGenerikIG from "./subGenerikIG";
import SubStrukturIG from "./subStrukturIG";
import SubPerbedaanIG from "./subPerbedaanIG";

const SectionContent = () => {
  return (
    <div className="min-h-64 w-8/10 flex flex-col gap-4">
      <h1 className="text-blue-950 text-3xl font-semibold text-center">
        Informatika dan Keterampilan Generik
      </h1>
      <p className="text-sm text-blue-950 font-medium text-justify">
        Halo teman-teman! Selamat datang di BAB 9: Praktik Lintas Bidang
        Informatika! 🎉 Di bab ini, kita bakal lihat gimana informatika itu
        bukan cuma teori, tapi bisa diterapkan ke berbagai bidang kehidupan —
        dari transportasi, pendidikan, hingga kesehatan! 🎬 Judul video kita
        kali ini adalah: “Bersama Teknologi, Belajar Informatika Itu Keren!”
        Lewat video ini, kamu akan diajak menjelajahi: 🗺️ Aplikasi peta dan
        transportasi online 🎓 Platform belajar digital 💳 Sistem pembayaran
        digital pakai QR code 🩺 Dunia medis dengan teknologi diagnostik Keren
        banget, kan? Ternyata banyak hal di sekitar kita yang berjalan karena
        konsep informatika seperti algoritma, logika, dan data. Yuk langsung
        tonton videonya dulu! 📽️ Tonton videonya di sini:
      </p>

      <SubPengantarLB />
      <SubLatihanIG />
      {/* <SubPengantarIG/>
      <SubEraIG/>
      <SubGenerikIG/>
      <SubStrukturIG/>
      <SubPerbedaanIG/> */}
    </div>
  );
};

export default SectionContent;
