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
    name: "Basic Stay",
    icon: "🎁",
    subtitle: "one-time payment, lifetime access",
    price: 49,
    originalPrice: 99,
    features: {
      title: "Core Features:",
      items: [
        { text: "Standard Room Access", included: true },
        { text: "Basic Amenities", included: true },
        { text: "Priority Support", included: false },
      ],
    },
    breakdown: {
      subtotal: 49.0,
      tax: 0.0,
      total: 49.0,
    },
  },
  {
    name: "Premium Stay",
    icon: "🏠",
    subtitle: "one-time payment, lifetime access",
    price: 149,
    originalPrice: 299,
    popular: true,
    features: {
      title: "Everything in Basic, plus:",
      items: [
        { text: "Deluxe Room Upgrade", included: true },
        { text: "24/7 Concierge Service", included: true },
        { text: "All Future Amenities", included: true },
      ],
    },
    breakdown: {
      subtotal: 149.0,
      tax: 0.0,
      total: 149.0,
    },
  },
  {
    name: "Luxury Suite",
    icon: "📦",
    subtitle: "one-time payment, lifetime access",
    price: 299,
    originalPrice: 599,
    features: {
      title: "Everything in Premium, plus:",
      items: [
        { text: "Master Suite Access", included: true },
        { text: "Private Chef Service", included: true },
        { text: "VIP Concierge", included: false },
      ],
    },
    breakdown: {
      subtotal: 299.0,
      tax: 0.0,
      total: 299.0,
    },
  },
];

const SectionPricing = () => {
  return (
    <div className="nc-SectionPricing relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4">
          Choose Your Perfect Stay
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Select from our range of accommodation options designed to suit every traveler's needs and budget
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className={`relative rounded-3xl p-8 ${
              tier.popular
                ? "bg-blue-600 dark:bg-blue-600 border-2 border-blue-700"
                : "bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700"
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            {/* Header */}
            <div className="mb-6">
              <div className="text-4xl mb-3">{tier.icon}</div>
              <h3
                className={`text-2xl font-bold mb-2 ${
                  tier.popular
                    ? "text-white dark:text-white"
                    : "text-neutral-900 dark:text-white"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`text-sm ${
                  tier.popular
                    ? "text-blue-100 dark:text-blue-100"
                    : "text-neutral-600 dark:text-neutral-300"
                }`}
              >
                {tier.subtitle}
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span
                  className={`text-5xl font-bold ${
                    tier.popular
                      ? "text-white dark:text-white"
                      : "text-neutral-900 dark:text-white"
                  }`}
                >
                  ${tier.price}
                </span>
                {tier.originalPrice && (
                  <span
                    className={`text-2xl line-through ${
                      tier.popular
                        ? "text-blue-200 dark:text-blue-200"
                        : "text-neutral-400 dark:text-neutral-500"
                    }`}
                  >
                    ${tier.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <button
              className={`w-full py-3 px-6 rounded-2xl font-semibold mb-8 transition-all ${
                tier.popular
                  ? "bg-blue-500 dark:bg-blue-500 text-white dark:text-white hover:bg-blue-400 dark:hover:bg-blue-400"
                  : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100"
              }`}
            >
              💳 Book now
            </button>

            {/* Features */}
            <div className="mb-8">
              <h4
                className={`font-bold mb-4 ${
                  tier.popular
                    ? "text-white dark:text-white"
                    : "text-neutral-900 dark:text-white"
                }`}
              >
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
                          ? tier.popular
                            ? "text-white dark:text-white"
                            : "text-neutral-900 dark:text-white"
                          : tier.popular
                          ? "text-blue-200 dark:text-blue-200 line-through"
                          : "text-neutral-400 dark:text-neutral-500 line-through"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Breakdown */}
            <div
              className={`border-t pt-6 ${
                tier.popular
                  ? "border-blue-400 dark:border-blue-400"
                  : "border-neutral-200 dark:border-neutral-700"
              }`}
            >
              <h4
                className={`font-bold mb-4 ${
                  tier.popular
                    ? "text-white dark:text-white"
                    : "text-neutral-900 dark:text-white"
                }`}
              >
                Estimated Breakdown (USD Mock)
              </h4>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span
                    className={
                      tier.popular
                        ? "text-blue-100 dark:text-blue-100"
                        : "text-neutral-600 dark:text-neutral-300"
                    }
                  >
                    Subtotal (Qty 1)
                  </span>
                  <span
                    className={
                      tier.popular
                        ? "text-white dark:text-white"
                        : "text-neutral-900 dark:text-white"
                    }
                  >
                    ${tier.breakdown.subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={
                      tier.popular
                        ? "text-blue-100 dark:text-blue-100"
                        : "text-neutral-600 dark:text-neutral-300"
                    }
                  >
                    Tax (0%)
                  </span>
                  <span className="text-green-500">
                    +${tier.breakdown.tax.toFixed(2)}
                  </span>
                </div>
              </div>
              <div
                className={`flex justify-between text-xl font-bold pt-4 border-t ${
                  tier.popular
                    ? "border-blue-400 dark:border-blue-400"
                    : "border-neutral-200 dark:border-neutral-700"
                }`}
              >
                <span
                  className={
                    tier.popular
                      ? "text-white dark:text-white"
                      : "text-neutral-900 dark:text-white"
                  }
                >
                  Total
                </span>
                <span
                  className={
                    tier.popular
                      ? "text-white dark:text-white"
                      : "text-neutral-900 dark:text-white"
                  }
                >
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
