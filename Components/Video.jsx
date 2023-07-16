import React from "react";

export default function Video() {
  return (
      <div className="flex relative flex-row sm:top-8 sm:bottom-12 xl:top-12 xl:bottom-8 justify-center snap-center sm:max-w-[600px] -pt-20 pb-80">
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/VVumTfYZmJM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/WsAwmEXpEho"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/yjjhYEbBCZQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
  );
}
