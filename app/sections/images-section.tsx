"use client";
import { useEffect, useState } from "react";
import HeaderIcon from "../ui/components/header-icon";

import { techIcons, frontEndIcons, backEndIcons } from "@/app/data/icons";

export default function ImagesSection() {
  return (
    <section className="flex justify-center mb-8 h-16">
      <div className="relative w-1/3">
        {techIcons.map((icon, index) => (
          <HeaderIcon
            key={index}
            {...icon}
            index={index}
            arraylength={techIcons.length}
          />
        ))}
      </div>
      <div className="relative w-1/3">
        {frontEndIcons.map((icon, index) => (
          <HeaderIcon
            key={index}
            {...icon}
            index={index}
            arraylength={frontEndIcons.length}
          />
        ))}
      </div>
      <div className="relative w-1/3">
        {backEndIcons.map((icon, index) => (
          <HeaderIcon
            key={index}
            {...icon}
            index={index}
            arraylength={backEndIcons.length}
          />
        ))}
      </div>
    </section>
  );
}
