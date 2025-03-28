import React from 'react'
import Navbar from '@/components/layouts/navbar';
import Footer from '@/components/layouts/footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-[100vh] bg-white">
      <Navbar></Navbar>

      <main className="flex flex-col gap-10 px-14 py-6 mt-16 mb-10">{children}</main>

      <Footer></Footer>
    </div>
  );
};

export default Layout
