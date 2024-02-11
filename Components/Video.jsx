import React from "react";

export default function Video() {
  return (
    <div className="flex relative flex-row justify-center mb-2 snap-center xl:-pt-20 xl:pb-20">
      <div>
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/VVumTfYZmJM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/WsAwmEXpEho"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="500"
          height="300"
          src="https://www.youtube.com/embed/GHlG3Egens4?si=ur9cjxmGBXePIcS2"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}