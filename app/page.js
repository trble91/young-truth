"use client";
import Image from "next/image";
import React from "react";
import Header from "@/Components/Header.jsx";
import Bio from "@/Components/Bio.jsx";
import Footer from "@/Components/Footer.jsx";
import "./globals.css";
import Photography from "@/Components/Photography";

export default function Home() {
  return (
    <>
      <div className="snap-mandatory min-h-screen sm:minx-w-screen[200px]">
        <Header />
        <Photography />
        <Bio />
        <Footer />
      </div>
    </>
  );
}
