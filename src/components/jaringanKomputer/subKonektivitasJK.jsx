import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubKonektivitasJK = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col border border-blue-950 mt-4 rounded-lg cursor-pointer">
      <div
        className="px-6 py-6 flex flex-row gap-2 justify-start items-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FaAngleDoubleRight
          className={`text-blue-950 transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
        <h1 className="text-blue-950 font-semibold">
          Sub Materi: Konektivitas Internet
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          {/* Judul Awal */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Konektivitas Internet
            </h2>
            <p>
              Konektivitas internet mengacu pada berbagai cara perangkat bisa
              terhubung ke internet. Baik melalui kabel maupun nirkabel, setiap
              jenis koneksi memiliki kelebihan dan kekurangannya masing-masing.
            </p>
          </div>

          {/* A. Jaringan Berkabel */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              A. Jaringan Berkabel
            </h3>

            <div className="mb-4">
              <h4 className="font-semibold text-blue-800">1. Dial-Up</h4>
              <p>
                Menggunakan jaringan telepon rumah dan modem, koneksi ini
                memiliki kecepatan rendah, maksimal 56 Kbps. Tidak bisa
                digunakan bersamaan dengan telepon.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-blue-800">
                2. ADSL (Asymmetric Digital Subscriber Line)
              </h4>
              <p>
                Menggunakan modem dengan frekuensi tinggi, ADSL memungkinkan
                akses internet dan telepon dilakukan secara bersamaan tanpa
                saling mengganggu.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-blue-800">
                3. LAN (Local Area Network)
              </h4>
              <p>
                Mengandalkan kabel UTP dan kartu jaringan LAN Card, biasanya
                digunakan dalam jaringan internal seperti di kantor atau
                sekolah. Dibutuhkan satu komputer sebagai server untuk mengatur
                lalu lintas data.
              </p>
            </div>
          </div>

          {/* B. Jaringan Nirkabel */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              B. Jaringan Nirkabel
            </h3>

            <div className="mb-4">
              <h4 className="font-semibold text-blue-800">
                1. GPRS (General Packet Radio Service)
              </h4>
              <p>
                Menggunakan gelombang radio, GPRS memungkinkan transfer data dan
                komunikasi suara. Merupakan teknologi awal untuk akses internet
                dari ponsel.
              </p>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-blue-800">2. WiFi</h4>
              <p>
                Koneksi nirkabel yang memanfaatkan frekuensi 2,4 GHz atau 5 GHz.
                Memiliki jangkauan terbatas dan biasanya digunakan di rumah,
                sekolah, atau kafe.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-blue-800">3. Satelit</h4>
              <p>
                Menggunakan antena parabola untuk menangkap sinyal dari satelit.
                Memiliki jangkauan global dan kecepatan tinggi, namun biayanya
                relatif mahal dan membutuhkan perangkat khusus.
              </p>
            </div>
          </div>

          {/* Internet Service Provider */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              3. Internet Service Provider (ISP)
            </h3>
            <p>
              ISP adalah perusahaan yang menyediakan akses internet kepada
              pengguna, baik melalui koneksi kabel seperti fiber optik maupun
              nirkabel seperti seluler.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>
                Contoh ISP di Indonesia: Telkom, Indihome, Biznet, MyRepublic.
              </li>
              <li>
                Beberapa ISP juga menyediakan layanan TV kabel dan telepon
                rumah.
              </li>
            </ul>
          </div>

          {/* Proteksi Data */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              4. Proteksi Data Pribadi dan Enkripsi
            </h3>
            <p>
              Keamanan data sangat penting saat mengakses internet. Untuk
              melindungi informasi pribadi, digunakan teknologi seperti SSL
              (Secure Socket Layer) untuk mengenkripsi koneksi.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>
                Pastikan situs yang dikunjungi menggunakan protokol HTTPS.
              </li>
              <li>
                Hindari mengakses data penting melalui jaringan publik yang
                tidak aman.
              </li>
            </ul>
          </div>

          {/* Komunikasi Ponsel */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              5. Komunikasi Data melalui Ponsel
            </h3>
            <p>
              Selain WiFi, ponsel dapat menggunakan jaringan seluler seperti 3G,
              4G, dan 5G untuk terhubung ke internet. Bentuk dasar komunikasi
              data di ponsel juga meliputi SMS dan panggilan suara.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>3G: Kecepatan dasar untuk browsing dan email.</li>
              <li>4G: Kecepatan tinggi untuk streaming dan download besar.</li>
              <li>5G: Super cepat, cocok untuk IoT, AR, dan gaming online.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubKonektivitasJK;
