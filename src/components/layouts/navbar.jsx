import React, { useState } from "react";
import { useRouter } from "next/router";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Beranda", path: "/" },
    { label: "Materi", path: "/material", startsWith: "/materi" },
  ];

  const isActive = (item) =>
    router.pathname === item.path ||
    (item.startsWith && router.pathname.startsWith(item.startsWith));

  return (
    <nav className="fixed z-50 bg-black/30 w-full py-2 h-16 flex items-center justify-between">
      <img
        className="absolute w-full h-full object-cover"
        src="/assets/images/main/wall-navbar.png"
        alt=""
      />

      {/* Logo */}
      <div className="z-10 px-8 sm:px-10 md:px-16 lg:px-24 xl:px-28 flex items-center">
        <img
          className="w-40 sm:w-48"
          src="/assets/images/main/logo3.png"
          alt="logo"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-row gap-10 lg:gap-16 text-blue-950 z-10 px-8 sm:px-10 md:px-16 lg:px-24 xl:px-28 items-center">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`${
              isActive(item) ? "text-yellow-600" : "hover:text-yellow-600"
            } text-sm font-medium`}
          >
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Burger Button */}
      <div className="md:hidden px-4 z-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-950 text-2xl"
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-40">
          <ul className="flex flex-col py-4 px-6 gap-4 text-blue-950">
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`${
                  isActive(item) ? "text-yellow-600" : "hover:text-yellow-600"
                } text-sm font-medium`}
              >
                <a href={item.path} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;