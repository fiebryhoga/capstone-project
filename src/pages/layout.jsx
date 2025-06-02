import React from "react";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow flex flex-col gap-10 px-8 sm:px-10 md:px-16 lg:px-24 xl:px-28 py-6 mt-16">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
