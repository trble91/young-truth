"use client";

import React from "react";
import Header from "@/Components/Header.jsx";
import Bio from "@/Components/Bio.jsx";
import Video from "@/Components/Video.jsx";

import Photography from "@/Components/Photography";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="snap-mandatory max-h-screen overflow-y-auto">
        <Header />
        <div>
          <Photography />
          <Bio />
        </div>
        <div className="flex relative justify-center">
        <Video />
        </div>
      </div>
    </>
  );
}
