"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ButtonPrimary from "@/shared/ButtonPrimary";

const roomData = {
  standard: {
    name: "Standard Room",
    price: 100,
    description: "Comfortable and cozy standard room perfect for a relaxing stay. Features modern amenities and elegant design.",
    images: [
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: ["Queen Bed", "Free WiFi", "Air Conditioning", "TV", "Mini Fridge"],
  },
  deluxe: {
    name: "Deluxe Room",
    price: 150,
    description: "Spacious deluxe room with premium furnishings and stunning views. Ideal for those seeking extra comfort and luxury.",
    images: [
      "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1743366/pexels-photo-1743366.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: ["King Bed", "Free WiFi", "Air Conditioning", "Smart TV", "Mini Bar", "Balcony"],
  },
  master: {
    name: "Master Suite",
    price: 250,
    description: "Luxurious master suite with separate living area and premium amenities. The ultimate in comfort and sophistication.",
    images: [
      "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1743366/pexels-photo-1743366.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: ["King Bed", "Living Area", "Free WiFi", "Air Conditioning", "Smart TV", "Mini Bar", "Jacuzzi", "Private Balcony"],
  },
  surroundings: {
    name: "Surroundings & Amenities",
    price: 0,
    description: "Explore our beautiful property surroundings and world-class amenities. From lush gardens to modern facilities, everything you need for a perfect stay.",
    images: [
      "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    features: ["Swimming Pool", "Garden", "Restaurant", "Spa", "Gym", "Parking"],
  },
};

const RoomDetailPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [roomType, setRoomType] = useState<string>("standard");
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    const type = searchParams.get("type") || "standard";
    setRoomType(type);
    setMainImage(roomData[type as keyof typeof roomData].images[0]);
  }, [searchParams]);

  const room = roomData[roomType as keyof typeof roomData];

  return (
    <div className="container pt-10 pb-24 lg:pt-16 lg:pb-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img src={mainImage} alt={room.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {room.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setMainImage(img)}
                  className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 ${
                    mainImage === img ? "border-primary-500" : "border-transparent"
                  }`}
                >
                  <img src={img} alt={`${room.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white">{room.name}</h1>
              {room.price > 0 && (
                <p className="text-2xl font-semibold text-primary-600 dark:text-primary-400 mt-2">
                  ${room.price} <span className="text-base font-normal text-neutral-500">/night</span>
                </p>
              )}
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-neutral-600 dark:text-neutral-300">{room.description}</p>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
              <h3 className="text-lg font-semibold mb-4">Features & Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                {room.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {room.price > 0 && (
              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
                <ButtonPrimary className="w-full" onClick={() => router.push("/check-availability")}>
                  Book Now
                </ButtonPrimary>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailPage;
