import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import Label from "@/components/Label";
import Input from "@/shared/Input";
import Textarea from "@/shared/Textarea";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface PageContactProps {}

const info = [
  {
    title: "🗺 ADDRESS",
    desc: "123 Booking Street, City, Country",
  },
  {
    title: "💌 EMAIL",
    desc: "info@housebooking.com",
  },
  {
    title: "☎ PHONE",
    desc: "+1 234 567 890",
  },
];

const PageContact: FC<PageContactProps> = ({}) => {
  return (
    <div className={`nc-PageContact overflow-hidden`}>
      <div className="mb-24 lg:mb-32">
        <h2 className="my-16 sm:my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Contact Us
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-12 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  🌏 SOCIALS
                </h3>
                <div className="flex space-x-3 mt-2">
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
            </div>
            <div>
              <form className="grid grid-cols-1 gap-6" action="#" method="post">
                <label className="block">
                  <Label>Full name</Label>

                  <Input
                    placeholder="John Doe"
                    type="text"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Email address</Label>

                  <Input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Message</Label>

                  <Textarea className="mt-1" rows={6} />
                </label>
                <div>
                  <ButtonPrimary type="submit">Send Message</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <div className="container">
        <SectionSubscribe2 className="pb-24 lg:pb-32" />
      </div>
    </div>
  );
};

export default PageContact;
