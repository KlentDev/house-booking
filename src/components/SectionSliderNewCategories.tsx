import React, { FC } from "react";
import { TaxonomyType } from "@/data/types";

export interface SectionSliderNewCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  categories?: TaxonomyType[];
  categoryCardType?: "card1" | "card2" | "card3" | "card4" | "card5";
  itemPerRow?: 4 | 5;
  sliderStyle?: "style1" | "style2";
}

const SectionSliderNewCategories: FC<SectionSliderNewCategoriesProps> = ({
  heading = "Heading",
  subHeading = "",
  className = "",
  itemClassName = "",
  categories = [],
}) => {
  return (
    <div className={`nc-SectionSliderNewCategories ${className}`}>
      <div className={`${itemClassName}`}>
        <h2 className="text-3xl font-semibold">{heading}</h2>
        {subHeading && <span className="block text-neutral-500 dark:text-neutral-400 mt-3">{subHeading}</span>}
      </div>
    </div>
  );
};

export default SectionSliderNewCategories;
