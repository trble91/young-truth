import React from "react";

export default function Video() {
  return (
      <div className="flex relative flex-row justify-center snap-center -pt-20 pb-20">
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/VVumTfYZmJM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="sm:min-w-[100px]"
        ></iframe>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/WsAwmEXpEho"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="sm:min-w-[100px]"
        ></iframe>
        <iframe
          width="300"
          height="200"
          src="https://www.youtube.com/embed/yjjhYEbBCZQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="sm:min-w-[100px]"
        ></iframe>
      </div>
  );
}
