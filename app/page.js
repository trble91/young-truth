"use client";
import React from "react";
import Header from "@/Components/Header.jsx";
import Bio from "@/Components/Bio.jsx";
import Footer from "@/Components/Footer.jsx";
import "./globals.css";

export default function Home() {
  return (
    <>
        <div className="snap-mandatory min-h-screen">
          <Header />
          <Bio />
          <Footer />
        </div>
    </>
  );
}