import React from "react";
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";

const LayoutContent = ({ children }) => {
  return (
    <div className="flex flex-col min-h-[100vh] bg-white">
      <Navbar></Navbar>

      <main className="flex flex-col gap-10 mt-16 min-h-[100vh] mb-10">
        {children}
      </main>

      <Footer></Footer>
    </div>
  );
};

export default LayoutContent;
