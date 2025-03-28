// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
// import Layout from "./layout";
// // import "@/styles/globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function Home() {
//   return<Layout>

//     konten
//   </Layout>;
// }


"use client";

import React from 'react'

import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "./layout";
import Hero from '@/components/home/hero';
import MaterialCard from '@/components/home/materialCard';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Index = () => {
  return (
    <Layout>
      <Hero/>
      <MaterialCard/>

      
    </Layout>
  )
}

export default Index

