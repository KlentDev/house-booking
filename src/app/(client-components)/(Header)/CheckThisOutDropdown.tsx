"use client";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { 
  CalendarIcon, 
  DocumentTextIcon, 
  PhotoIcon, 
  HomeIcon, 
  CurrencyDollarIcon, 
  EnvelopeIcon 
} from "@heroicons/react/24/outline";
import { Fragment } from "react";
import Link from "next/link";

const menuItems = [
  { name: "Calendar Availability", href: "#calendar", icon: CalendarIcon },
  { name: "Online Booking", href: "#booking", icon: DocumentTextIcon },
  { name: "Photo Gallery", href: "#gallery", icon: PhotoIcon },
  { name: "Property Details", href: "#details", icon: HomeIcon },
  { name: "Pricing Rules", href: "#pricing", icon: CurrencyDollarIcon },
  { name: "Contact", href: "#contact", icon: EnvelopeIcon },
];

export default function CheckThisOutDropdown() {
  return (
    <div className="CheckThisOutDropdown">
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-80"}
                group px-3 py-1.5 rounded-full inline-flex items-center text-sm text-gray-700 dark:text-neutral-300 font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>Check This Out</span>
              <ChevronDownIcon
                className={`${open ? "-rotate-180" : "text-opacity-70"}
                  ml-2 h-4 w-4 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-xs px-4 mt-3 left-0 sm:px-0">
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative bg-white dark:bg-neutral-800 p-3">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => close()}
                        className="flex items-center p-3 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <item.icon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
                        <p className="ml-3 text-sm font-medium text-gray-900 dark:text-neutral-200">
                          {item.name}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
