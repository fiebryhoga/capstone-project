import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="fixed z-50 bg-black/30 w-full py-2 h-16 flex flex-row justify-between items-center">
      <img
        className="absolute w-full h-full object-cover"
        src="/assets/images/main/wall-navbar.png"
        alt=""
      />

      {/* bagian logo */}
      <div className="px-16 z-10 flex flex-row gap-6 justify-center items-center">
        <img className="w-52" src="/assets/images/main/logo3.png" alt="logo" />
      </div>

      {/* nav list menu */}
      <ul className="flex flex-row gap-16 text-blue-950 z-10 px-16 justify-center items-center">
        <li
          className={`${
            router.pathname === "/"
              ? "text-yellow-600"
              : "hover:text-yellow-600"
          } text-sm font-medium`}
        >
          <a href="/">Beranda</a>
        </li>
        <li
          className={`${
            router.pathname.startsWith("/materi")
              ? "text-yellow-600"
              : "hover:text-yellow-600"
          } text-sm font-medium`}
        >
          <a href="/material">Materi</a>
        </li>
        <li
          className={`${
            router.pathname.startsWith("/sumber")
              ? "text-yellow-600"
              : "hover:text-yellow-600"
          } text-sm font-medium`}
        >
          <a href="/sumber">Sumber</a>
        </li>
        <li className="w-64 z-20 flex border border-blue-950 rounded-full justify-center items-center py-2 px-4 gap-2">
          <IoSearchSharp size={20} />
          <input
            className="w-full placeholder:text-sm placeholder:text-gray-700 text-blue-950 outline-0 text-sm font-medium"
            placeholder="cari materi ..."
            type="text"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
