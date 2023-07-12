"use client";

import React from "react";
import Header from "@/Components/Header.jsx";
import Bio from "@/Components/Bio.jsx";
import Footer from "@/Components/Footer.jsx";
import Photography from "@/Components/Photography";
import Video from "@/Components/Video.jsx";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="snap-mandatory min-h-screen">
        <Header />
        <div>
          <Photography />
          <Bio />
          <div className="relative p-40 pl-20 pr-20 sm:min-w-[400px]">
            <Video />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
