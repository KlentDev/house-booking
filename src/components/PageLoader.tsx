"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HomeIcon } from "@heroicons/react/24/solid";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Loading...");
  const pathname = usePathname();

  useEffect(() => {
    // Initial page load
    setLoading(true);
    setLoadingText("Loading...");
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Navigation between pages
    setLoading(true);
    
    const pageName = pathname === "/" ? "Home" : 
                     pathname.replace(/\//g, " ").replace(/-/g, " ").trim();
    const formattedPageName = pageName.split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    
    setLoadingText(`Redirecting to ${formattedPageName}...`);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-neutral-900 transition-opacity duration-300 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="flex flex-col items-center space-y-6">
        {/* Animated House Icon */}
        <div className="relative">
          <div className="animate-bounce">
            <HomeIcon className="w-16 h-16 text-primary-6000 dark:text-primary-400" />
          </div>
          <div className="absolute inset-0 animate-ping opacity-20">
            <HomeIcon className="w-16 h-16 text-primary-6000 dark:text-primary-400" />
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300 animate-pulse">
            {loadingText}
          </p>
        </div>
        
        {/* Loading Dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-primary-6000 dark:bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-primary-6000 dark:bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-primary-6000 dark:bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
