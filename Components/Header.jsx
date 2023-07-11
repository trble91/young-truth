"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.instagram.com/YoungTruth"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/OfficialYoungTruth"
          fgColor="white"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://www.twitter.com/YoungTruth"
          fgColor="white"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://www.youtube.com/c/YoungTruth"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="mailto:info@youngtruth.net"
          fgColor="white"
          bgColor="transparent"
        />

        <SocialIcon
          url="https://linktr.ee/YoungTruth"
          fgColor="white"
          bgColor="transparent"
        />
      </motion.div>
    </header>
  );
}
