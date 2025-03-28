import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed z-50 bg-black/30 w-full py-2 h-16 flex flex-row justify-between items-center">
      <img className='absolute w-full opacity-95 h-full object-cover' src="/assets/images/main/bg-nav.png" alt="" />
      {/* bagian logo */}
      <div className=" px-16 z-10 flex flex-row gap-6 justify-center items-center">
        <img className="w-52" src="/assets/images/main/logo3.png" alt="logo" />
        {/* <h1 className="text-2xl font-bold text-blue-950">E-Learning SMAGOTA</h1> */}
      </div>

      {/* nav list menu */}
      <ul className="flex flex-row gap-16 text-blue-950 z-10 px-16">
        <li className="text-yellow-600 hover:text-yellow-600 font-medium">
          <a href="">Home</a>
        </li>
        <li className="hover:text-yellow-600 font-medium">
          <a href="">belom</a>
        </li>
        <li className="hover:text-yellow-600 font-medium">
          <a href="">belom</a>
        </li>
        <li className="hover:text-yellow-600 font-medium">
          <a href="">belom</a>
        </li>
        <li className="hover:text-yellow-600 font-medium">
          <a href="">belom</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar
