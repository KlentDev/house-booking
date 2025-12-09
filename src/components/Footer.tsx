"use client";

import Logo from "@/shared/Logo";
import React from "react";
import FooterNav from "./FooterNav";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <>
      <FooterNav />

      <div className="nc-Footer relative py-16 lg:py-20 border-t border-neutral-200 dark:border-neutral-700">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="md:col-span-2">
              <Logo />
              <p className="mt-4 text-neutral-600 dark:text-neutral-300 text-sm">
                Your trusted partner for comfortable and memorable stays. Book your perfect accommodation with ease.
              </p>
              <div className="flex space-x-3 mt-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors">
                  <i className="lab la-facebook-f text-xl"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors">
                  <i className="lab la-twitter text-xl"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors">
                  <i className="lab la-instagram text-xl"></i>
                </a>
              </div>
            </div>

            <div className="text-sm">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</Link></li>
                <li><Link href="/check-availability" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Book Now</Link></li>
                <li><Link href="/room-detail?type=standard" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Rooms</Link></li>
                <li><Link href="/contact" className="text-neutral-600 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div className="text-sm">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <i className="las la-map-marker text-xl text-neutral-600 dark:text-neutral-400"></i>
                  <span className="text-neutral-600 dark:text-neutral-300">123 Booking Street, City</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="las la-phone text-xl text-neutral-600 dark:text-neutral-400"></i>
                  <span className="text-neutral-600 dark:text-neutral-300">+1 234 567 890</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="las la-envelope text-xl text-neutral-600 dark:text-neutral-400"></i>
                  <span className="text-neutral-600 dark:text-neutral-300">info@housebooking.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-700 mt-12 pt-8">
            <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
              © {new Date().getFullYear()} House Booking. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
