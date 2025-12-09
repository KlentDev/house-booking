import React from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import BackgroundSection from "@/components/BackgroundSection";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import { SectionTestimonials } from "@/components/SectionTestimonials";
import SectionMasonry from "@/components/SectionMasonry";
import SectionHero3 from "@/app/(server-components)/SectionHero3";
import CardCategory6 from "@/components/CardCategory6";
import SectionPricing from "@/components/SectionPricing";

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/room-detail?type=standard",
    name: "Standard Room",
    taxonomy: "category",
    count: 2450,
    thumbnail:
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "2",
    href: "/room-detail?type=deluxe",
    name: "Deluxe Room",
    taxonomy: "category",
    count: 3890,
    thumbnail:
      "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "3",
    href: "/room-detail?type=master",
    name: "Master Suite",
    taxonomy: "category",
    count: 1567,
    thumbnail:
      "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "4",
    href: "/room-detail?type=surroundings",
    name: "Surroundings",
    taxonomy: "category",
    count: 2134,
    thumbnail:
      "https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      {/* SECTION HERO */}
      <div className="container px-1 sm:px-4 mb-24 pt-8 lg:pt-12">
        <SectionHero3 className="" />
      </div>

      <div className="container relative space-y-24 mb-24 ">
        {/* SECTION 1 - Property Details */}
        <div id="details">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">
              Our Rooms & Facilities
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              Discover our comfortable accommodations and beautiful surroundings
            </p>
          </div>
          <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex">
            <CardCategory6 taxonomy={DEMO_CATS_2[0]} />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 grid grid-rows-2 gap-6">
            <CardCategory6 taxonomy={DEMO_CATS_2[3]} />
            <CardCategory6 taxonomy={DEMO_CATS_2[1]} />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex">
            <CardCategory6 taxonomy={DEMO_CATS_2[2]} />
          </div>
          </div>
        </div>

        {/* SECTION */}
        <div id="gallery">
          <SectionMasonry className="" />
        </div>

        {/* SECTION */}
        <div id="testimonials" className="relative py-16">
          <BackgroundSection />
          <SectionTestimonials />
        </div>

        <div id="pricing">
          <SectionPricing />
        </div>

        {/* SECTION */}
        <SectionSubscribe2 />
      </div>
    </main>
  );
}

export default PageHome;
