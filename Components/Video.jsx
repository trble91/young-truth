import React from "react";

export default function Video() {
  return (
      <div className="flex flex-row justify-center snap-center">
        <iframe
          width="300"
          height="200"
          src="https://youtu.be/VVumTfYZmJM"
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
          src="https://youtu.be/yjjhYEbBCZQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
  );
}
