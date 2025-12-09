import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";

export interface CollectionProps {
  className?: string;
  featuredImage?: string | StaticImageData;
  name?: string;
  desc?: string;
  color?: string;
}

const Collection: FC<CollectionProps> = ({
  className = "",
  featuredImage = "",
  name = "Collection",
  desc = "Description",
  color = "pink",
}) => {
  return (
    <div className={`nc-Collection relative ${className}`}>
      <div className="relative flex flex-col rounded-2xl overflow-hidden group">
        <div className="relative">
          {featuredImage && typeof featuredImage === "string" ? (
            <img src={featuredImage} alt={name} className="object-cover w-full h-full" />
          ) : featuredImage ? (
            <Image src={featuredImage} alt={name} className="object-cover" />
          ) : null}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h3 className="text-xl font-semibold">{name}</h3>
          <span className="text-sm mt-1">{desc}</span>
        </div>
      </div>
    </div>
  );
};

export default Collection;
