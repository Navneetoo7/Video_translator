import Image from "next/image";
import React from "react";

const PodcastCard = ({
  imgURL,
  description,
  title,
  podcastId,
}: {
  imgURL: string;
  title: string;
  description: string;
  podcastId: number;
}) => {
  return (
    <div className="cursor-point">
      <figure className="flex flex-col gap-2">
        <Image
          src={imgURL}
          width={174}
          height={174}
          alt={title}
        />
      </figure>
    </div>
  );
};

export default PodcastCard;
