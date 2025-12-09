"use client";

import React from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface PricingTier {
  name: string;
  icon: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  popular?: boolean;
  features: {
    title: string;
    items: Array<{ text: string; included: boolean }>;
  };
  breakdown: {
    subtotal: number;
    tax: number;
    total: number;
  };
}

const pricingTiers: PricingTier[] = [
  {
    name: "Standard Room",
    icon: "🛏️",
    subtitle: "Perfect for solo travelers or couples",
    price: 100,
    originalPrice: 150,
    features: {
      title: "Room Features:",
      items: [
        { text: "Queen Bed", included: true },
        { text: "Free WiFi", included: true },
        { text: "Air Conditioning", included: true },
        { text: "TV & Mini Fridge", included: true },
        { text: "Balcony View", included: false },
      ],
    },
    breakdown: {
      subtotal: 100.0,
      tax: 0.0,
      total: 100.0,
    },
  },
  {
    name: "Deluxe Room",
    icon: "✨",
    subtitle: "Spacious comfort with premium amenities",
    price: 150,
    originalPrice: 200,
    popular: true,
    features: {
      title: "Everything in Standard, plus:",
      items: [
        { text: "King Bed", included: true },
        { text: "Smart TV & Mini Bar", included: true },
        { text: "Private Balcony", included: true },
        { text: "Premium Toiletries", included: true },
        { text: "Room Service", included: true },
      ],
    },
    breakdown: {
      subtotal: 150.0,
      tax: 0.0,
      total: 150.0,
    },
  },
  {
    name: "Master Suite",
    icon: "👑",
    subtitle: "Ultimate luxury and sophistication",
    price: 250,
    originalPrice: 350,
    features: {
      title: "Everything in Deluxe, plus:",
      items: [
        { text: "Separate Living Area", included: true },
        { text: "Jacuzzi & Premium Bath", included: true },
        { text: "Private Balcony with View", included: true },
        { text: "24/7 Concierge Service", included: true },
        { text: "Complimentary Breakfast", included: true },
      ],
    },
    breakdown: {
      subtotal: 250.0,
      tax: 0.0,
      total: 250.0,
    },
  },
];

const SectionPricing = () => {
  return (
    <div className="nc-SectionPricing relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">
          Room Rates & Packages
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Choose from our comfortable rooms with flexible pricing to match your budget and preferences
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className={`relative rounded-3xl p-8 ${
              tier.popular
                ? "bg-white dark:bg-neutral-900 border-2 border-green-500 shadow-xl"
                : "bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700"
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <div className="text-4xl mb-3">{tier.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">
                {tier.name}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {tier.subtitle}
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-neutral-900 dark:text-white">
                  ${tier.price}
                </span>
                {tier.originalPrice && (
                  <span className="text-2xl line-through text-neutral-400 dark:text-neutral-500">
                    ${tier.originalPrice}
                  </span>
                )}
                <span className="text-sm text-neutral-500 dark:text-neutral-400">/night</span>
              </div>
            </div>

            <button
              className={`w-full py-3 px-6 rounded-2xl font-semibold mb-8 transition-all ${
                tier.popular
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100"
              }`}
            >
              Book Now
            </button>

            <div className="mb-8">
              <h4 className="font-bold mb-4 text-neutral-900 dark:text-white">
                {tier.features.title}
              </h4>
              <ul className="space-y-3">
                {tier.features.items.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <CheckIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <XMarkIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                    <span
                      className={`${
                        feature.included
                          ? "text-neutral-900 dark:text-white"
                          : "text-neutral-400 dark:text-neutral-500 line-through"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t pt-6 border-neutral-200 dark:border-neutral-700">
              <h4 className="font-bold mb-4 text-neutral-900 dark:text-white">
                Price Breakdown
              </h4>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-300">
                    Room Rate
                  </span>
                  <span className="text-neutral-900 dark:text-white">
                    ${tier.breakdown.subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-300">
                    Tax (0%)
                  </span>
                  <span className="text-green-500">
                    +${tier.breakdown.tax.toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="flex justify-between text-xl font-bold pt-4 border-t border-neutral-200 dark:border-neutral-700">
                <span className="text-neutral-900 dark:text-white">
                  Total
                </span>
                <span className="text-neutral-900 dark:text-white">
                  ${tier.breakdown.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionPricing;
