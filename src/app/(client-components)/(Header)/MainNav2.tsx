import React, { FC } from "react";
import Logo from "@/shared/Logo";
import MenuBar from "@/shared/MenuBar";
import Link from "next/link";
import SwitchDarkMode from "@/shared/SwitchDarkMode";
import CheckThisOutDropdown from "./CheckThisOutDropdown";
import { Route } from "@/routers/types";

export interface MainNav2Props {
  className?: string;
}

const MainNav2: FC<MainNav2Props> = ({ className = "" }) => {
  return (
    <div className={`MainNav2 relative z-10 ${className}`}>
      <div className="px-4 h-20 lg:container flex justify-between items-center">
        {/* Left Side - Logo + Check This Out Dropdown */}
        <div className="flex items-center space-x-8">
          <Logo className="w-24" />
          
          <div className="hidden lg:block">
            <CheckThisOutDropdown />
          </div>
        </div>

        {/* Right Side - Check Availability + Theme Toggle */}
        <div className="flex items-center space-x-3">
          <Link
            href={"/check-availability" as Route<string>}
            className="hidden sm:inline-flex px-5 py-2.5 bg-primary-6000 hover:bg-primary-700 text-white rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            Check Availability
          </Link>
          <SwitchDarkMode />
          <div className="lg:hidden">
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2;
