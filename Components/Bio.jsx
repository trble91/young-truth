import React from "react";

export default function Bio() {
  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row  xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-700 text-2xl sm:text-gray-700">Bio</h3>
     <div className="flex absolute flex-row text-center text-gray-700 text-lg top-56 xl:flex-row max-w-[500px] items-center snap-center">
      <p className="flex relative text-m">
        {
          'Young Truth is a talented artist hailing from the historic neighborhood of Harlem in New York City. With his captivating performances in renowned venues like Santos Party House, Webster Hall, DROM, and the legendary Apollo Theater, he has been steadily building a reputation for himself in the city\'s music scene. His brand has gained significant recognition, as numerous tastemakers in the Big Apple have taken notice of his immense potential. Throughout his career, Young Truth has been featured on various impressive projects, collaborating with standout independent artists. These collaborations have not only showcased his versatility but have also contributed to the success of his solo endeavors. His albums, including "Tunnel Vision" (2013), "Unwritten" (2015), "Groundwork" (2016), and his latest release "You Are God," have received critical acclaim for their innovative and thought-provoking content. In 2017, Young Truth made a memorable appearance on Sway In The Morning\'s Friday Fire Cypher, further amplifying his buzz and solidifying his position as an exceptional lyricist. Born William "Bill" McMillan on September 20, 1987, Young Truth discovered his passion for music as an escape from the harsh realities of his Harlem neighborhood. Inspired by legendary MCs such as The Notorious B.I.G, Jay-Z, Nas, and The Wu-Tang Clan, he honed his craft, studying their styles and mastering the art of lyricism and songwriting. Young Truth\'s senior year in high school marked the beginning of his journey as he began penning his own rhymes, showcasing his talent and dedication. To broaden his artistic horizons, Young Truth collaborated with Smoke DZA on the track "Tenfold," demonstrating his ability to deliver impactful performances at a high level. Known for his affinity for golden era Hip-Hop sounds, this New York lyricist also partnered with former Roc-A-Fella signee Rell on the soulful "Vintage Love," revealing his versatility and ability to seamlessly blend elements of R&B into his music. With a distinctive blend of lyrical prowess, captivating performances, and a growing body of acclaimed work, Young Truth continues to make his mark on the music industry. His dedication to his craft and his unwavering passion for creating meaningful music have established him as a force to be reckoned with in the contemporary music landscape.'
        }
      </p>
      </div>
    </div>
  );
}
