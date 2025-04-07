import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const SubPerangkatJK = () => {
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
          Sub Materi: Perangkat Jaringan Komputer
        </h1>
      </div>

      {isOpen && (
        <div className="px-6 flex flex-col gap-6 text-sm text-blue-950 w-full py-4 border-t border-t-blue-950 space-y-4">
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h2 className="font-semibold text-blue-900 mb-2">
              Perangkat Jaringan Komputer
            </h2>
            <p>
              Untuk membangun dan menjalankan sebuah jaringan komputer,
              diperlukan beberapa perangkat keras khusus yang memiliki fungsi
              berbeda-beda. Berikut adalah perangkat-perangkat utama yang
              digunakan dalam jaringan komputer:
            </p>
          </div>

          {/* NIC */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              1. NIC (Network Interface Card)
            </h3>
            <p>
              NIC adalah kartu jaringan yang terpasang di setiap komputer dan
              memungkinkan komputer tersebut terhubung ke jaringan. Tanpa NIC,
              perangkat tidak bisa mengirim atau menerima data jaringan.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>
                Bisa berupa kartu eksternal atau sudah terpasang secara onboard.
              </li>
              <li>Setiap NIC memiliki alamat unik yang disebut MAC Address.</li>
            </ul>
          </div>

          {/* Hub / Switch */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              2. Hub / Switch
            </h3>
            <p>
              Hub dan Switch digunakan untuk menghubungkan beberapa perangkat
              dalam satu jaringan lokal (LAN). Keduanya memiliki peran sebagai
              pusat penghubung.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>
                <strong>Hub</strong> mengirim data ke semua perangkat yang
                terhubung.
              </li>
              <li>
                <strong>Switch</strong> lebih cerdas: hanya mengirim data ke
                perangkat tujuan saja.
              </li>
              <li>Switch lebih efisien dan umum digunakan dibanding Hub.</li>
            </ul>
          </div>

          {/* Router */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">3. Router</h3>
            <p>
              Router digunakan untuk menghubungkan jaringan lokal (LAN) ke
              jaringan yang lebih luas seperti internet (WAN). Router juga
              mengatur lalu lintas data dan membagikan koneksi internet ke
              perangkat lain.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Biasanya memiliki fitur firewall dan keamanan jaringan.</li>
              <li>Bisa menghubungkan beberapa jaringan sekaligus.</li>
            </ul>
          </div>

          {/* Modem */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">4. Modem</h3>
            <p>
              Modem (Modulator-Demodulator) berfungsi mengubah sinyal digital
              dari komputer menjadi sinyal analog yang bisa dikirim lewat kabel
              telepon, dan sebaliknya. Perangkat ini sangat penting untuk
              menghubungkan jaringan ke internet.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>
                Digunakan pada koneksi DSL, kabel, atau jaringan telepon rumah.
              </li>
              <li>Biasanya terhubung ke router dalam jaringan rumahan.</li>
            </ul>
          </div>

          {/* Access Point */}
          <div className="p-4 bg-blue-50 rounded-xl shadow">
            <h3 className="font-semibold text-blue-900 mb-2">
              5. Access Point
            </h3>
            <p>
              Access Point (AP) memungkinkan perangkat nirkabel seperti laptop
              atau smartphone untuk terhubung ke jaringan melalui sinyal Wi-Fi.
              Access Point menjadi jembatan antara perangkat wireless dan
              jaringan kabel.
            </p>
            <ul className="list-disc list-inside mt-2 ml-2">
              <li>Dapat berdiri sendiri atau terintegrasi dalam router.</li>
              <li>Cocok digunakan di sekolah, kantor, atau tempat umum.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubPerangkatJK;
