"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { CustomButtonProps } from "@/types";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          With MarretaCar, it's easy to rent a car!
        </h1>
        <p className="hero__subtitle">
          Tired of burocracy when renting a car? Try our effortless booking
          process and services!
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
