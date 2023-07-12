"use client";

import React from "react";
import Header from "@/Components/Header.jsx";
import Bio from "@/Components/Bio.jsx";
import Footer from "@/Components/Footer.jsx";
import Photography from "@/Components/Photography";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="snap-mandatory min-h-screen">
        <Header />
        <div>
        <Photography />
        <Bio />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
