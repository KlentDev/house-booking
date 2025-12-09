import React, { FC } from "react";
import ButtonCircle from "@/shared/ButtonCircle";
import rightImg from "@/images/SVG-subcribe2.png";
import Input from "@/shared/Input";
import Image from "next/image";

export interface SectionSubscribe2Props {
  className?: string;
}

const SectionSubscribe2: FC<SectionSubscribe2Props> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row lg:items-center ${className}`}
      data-nc-id="SectionSubscribe2"
    >
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="font-semibold text-4xl">Stay Connected 🎉</h2>
        <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
          Subscribe to receive exclusive booking discounts, seasonal offers, and updates about our rooms.
        </span>
        <ul className="space-y-4 mt-10">
          <li className="flex items-center space-x-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white text-sm font-semibold">01</span>
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Exclusive booking discounts
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white text-sm font-semibold">02</span>
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Early access to new rooms
            </span>
          </li>
        </ul>
        <form className="mt-10 relative max-w-sm">
          <Input
            required
            aria-required
            placeholder="Enter your email"
            type="email"
            rounded="rounded-full"
            sizeClass="h-12 px-5 py-3"
          />
          <ButtonCircle
            type="submit"
            className="absolute transform top-1/2 -translate-y-1/2 right-1.5"
            size="w-10 h-10"
          >
            <i className="las la-arrow-right text-xl"></i>
          </ButtonCircle>
        </form>
      </div>
      <div className="flex-grow">
        <Image alt="" src={rightImg} />
      </div>
    </div>
  );
};

export default SectionSubscribe2;
