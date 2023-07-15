"use client";

import React from "react";
import Header from "@/Components/Header.jsx";
import Bio from "@/Components/Bio.jsx";
import Photography from "@/Components/Photography";
import Video from "@/Components/Video.jsx";
import "./globals.css";

export default function Home() {
  return (
    <>
      <div className="snap-mandatory max-h-screen overflow-y-auto">
        <Header />
        <div>
          <Photography />
          <Bio />
            <Video />
        </div>
      </div>
    </>
  );
}
