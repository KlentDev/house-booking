"use client";

import React from "react";
import Masonry from "./Masonry";
import Heading from "@/shared/Heading";

const items = [
  {
    id: "1",
    img: "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/listing-stay-map",
    height: 400,
  },
  {
    id: "2",
    img: "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/listing-stay-map",
    height: 250,
  },
  {
    id: "3",
    img: "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/listing-stay-map",
    height: 600,
  },
  {
    id: "4",
    img: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/listing-stay-map",
    height: 350,
  },
  {
    id: "5",
    img: "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/listing-stay-map",
    height: 450,
  },
  {
    id: "6",
    img: "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/listing-stay-map",
    height: 300,
  },
  {
    id: "7",
    img: "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/listing-stay-map",
    height: 500,
  },
  {
    id: "8",
    img: "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/listing-stay-map",
    height: 280,
  },
  {
    id: "9",
    img: "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/listing-stay-map",
    height: 420,
  },
  {
    id: "10",
    img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/listing-stay-map",
    height: 380,
  },
  {
    id: "11",
    img: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/listing-stay-map",
    height: 320,
  },
  {
    id: "12",
    img: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/listing-stay-map",
    height: 480,
  },
];

export interface SectionMasonryProps {
  className?: string;
}

const SectionMasonry: React.FC<SectionMasonryProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionMasonry relative ${className}`}>
      <Heading desc="Browse through our stunning collection of properties and destinations" isCenter={true}>
        Photo Gallery
      </Heading>
      <div className="relative" style={{ minHeight: '800px' }}>
        <Masonry
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </div>
    </div>
  );
};

export default SectionMasonry;
