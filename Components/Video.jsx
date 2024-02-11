import React from "react";

export default function Video() {
  return (
      <div className="flex relative flex-row justify-center snap-center xl:-pt-20 xl:pb-20">
        <div>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/VVumTfYZmJM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/WsAwmEXpEho"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      
        </div>
      </div>
  );
}
