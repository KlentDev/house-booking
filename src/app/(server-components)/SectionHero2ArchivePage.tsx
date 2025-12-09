import React, { FC, ReactNode } from "react";

export interface SectionHero2ArchivePageProps {
  className?: string;
  children?: ReactNode;
}

const SectionHero2ArchivePage: FC<SectionHero2ArchivePageProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={`nc-SectionHero2ArchivePage ${className}`}>
      <div className="relative py-16">
        {children}
      </div>
    </div>
  );
};

export default SectionHero2ArchivePage;
