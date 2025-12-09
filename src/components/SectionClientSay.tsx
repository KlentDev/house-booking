import React, { FC } from "react";

export interface SectionClientSayProps {
  className?: string;
}

const SectionClientSay: FC<SectionClientSayProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionClientSay ${className}`}>
      <h2 className="text-3xl font-semibold">What our customers say</h2>
    </div>
  );
};

export default SectionClientSay;
