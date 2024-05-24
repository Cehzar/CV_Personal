import type { StaticImageData } from "next/image";
import Image from "next/image";
import { ReactNode } from "react";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title?: string;
  children?: ReactNode;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 opacity-50"></div>
      <div className="z-20 text-center">
        <h1 className="text-white text-6xl mb-8">{props.title}</h1>
        <div className="w-full flex justify-center">
          {props.children}
        </div>
      </div>
    </div>
  );
}
