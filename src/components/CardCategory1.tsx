import React, { FC } from "react";
import { TaxonomyType } from "@/data/types";
import Link from "next/link";

export interface CardCategory1Props {
  className?: string;
  taxonomy: TaxonomyType;
  size?: "large" | "normal";
}

const CardCategory1: FC<CardCategory1Props> = ({
  className = "",
  size = "normal",
  taxonomy,
}) => {
  const { count, name, href = "/", thumbnail } = taxonomy;

  return (
    <Link
      href={href}
      className={`nc-CardCategory1 flex items-center ${className}`}
    >
      <div className={`flex-shrink-0 ${size === "large" ? "w-20 h-20" : "w-12 h-12"} rounded-lg mr-4 overflow-hidden`}>
        <img src={thumbnail || ""} alt={name} className="object-cover w-full h-full" />
      </div>
      <div>
        <h2 className={`${size === "large" ? "text-lg" : "text-base"} font-medium`}>
          {name}
        </h2>
        <span className={`${size === "large" ? "text-sm" : "text-xs"} text-neutral-500 dark:text-neutral-400 mt-1`}>
          {count} properties
        </span>
      </div>
    </Link>
  );
};

export default CardCategory1;
