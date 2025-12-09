import React from "react";
import logoImg from "@/images/key.png";
import Link from "next/link";
import Image from "next/image";

export interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-24" }) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block focus:outline-none focus:ring-0 ${className}`}
    >
      <Image
        src={logoImg}
        alt="Logo"
        className="max-h-12 w-auto"
      />
    </Link>
  );
};

export default Logo;
