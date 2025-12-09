"use client";

import React from "react";
import Masonry from "./Masonry";
import Heading from "@/shared/Heading";

const items = [
  // Standard Room
  {
    id: "1",
    img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/room-detail?type=standard",
    height: 400,
    label: "Standard Room",
  },
  {
    id: "2",
    img: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/room-detail?type=standard",
    height: 250,
    label: "Standard Room",
  },
  {
    id: "3",
    img: "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/room-detail?type=standard",
    height: 600,
    label: "Standard Room",
  },
  {
    id: "4",
    img: "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/room-detail?type=standard",
    height: 350,
    label: "Standard Room",
  },
  // Deluxe Room
  {
    id: "5",
    img: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/room-detail?type=deluxe",
    height: 450,
    label: "Deluxe Room",
  },
  {
    id: "6",
    img: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/room-detail?type=deluxe",
    height: 300,
    label: "Deluxe Room",
  },
  {
    id: "7",
    img: "https://images.pexels.com/photos/1743366/pexels-photo-1743366.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/room-detail?type=deluxe",
    height: 500,
    label: "Deluxe Room",
  },
  {
    id: "8",
    img: "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/room-detail?type=deluxe",
    height: 280,
    label: "Deluxe Room",
  },
  // Surroundings
  {
    id: "9",
    img: "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/room-detail?type=surroundings",
    height: 420,
    label: "Surroundings",
  },
  {
    id: "10",
    img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/room-detail?type=surroundings",
    height: 380,
    label: "Surroundings",
  },
  {
    id: "11",
    img: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/room-detail?type=surroundings",
    height: 320,
    label: "Surroundings",
  },
  // Master Suite
  {
    id: "12",
    img: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/room-detail?type=master",
    height: 480,
    label: "Master Suite",
  },
  {
    id: "13",
    img: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/room-detail?type=master",
    height: 400,
    label: "Master Suite",
  },
  {
    id: "14",
    img: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/room-detail?type=master",
    height: 350,
    label: "Master Suite",
  },
  {
    id: "15",
    img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/room-detail?type=master",
    height: 450,
    label: "Master Suite",
  },
];

export interface SectionMasonryProps {
  className?: string;
}

const SectionMasonry: React.FC<SectionMasonryProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionMasonry relative ${className}`}>
      <Heading desc="Take a virtual tour of our rooms and property" isCenter={true}>
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
          showTooltip={true}
        />
      </div>
    </div>
  );
};

export default SectionMasonry;
