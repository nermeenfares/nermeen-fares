import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import React from "react";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

const Home = () => {
  const handleDownload = () => {
    const sampleFileUrl = '';
    window.open(sampleFileUrl); // This will open a new tab and initiate the download
  };
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div
          className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 
    xl:pb-24"
        >
          {/* text hereeee */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Front-End Developer</span>
            <h1 className="h1 mb-6">
              Hello I am <br />{" "}
              <span className="text-accent-hover">Nermeen Fares</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel in creating dynamic and responsive web applications using
              Next.js, Tailwind CSS, React, and TypeScript, delivering seamless
              and visually appealing user experiences.
            </p>
            {/* btns and social mediaaa */}
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
            <Link  href="https://drive.google.com/file/d/1_EjvT2nVy6XsPRmpqSqYBzxdODSay62C/view?usp=sharing">

              <Button
                variant="outline"
                size="lg"
                className="uppercase flex 
        items-center gap-2  "
              >
                <span className="text-xl">Download CV</span>
                <FiDownload />
              </Button>
            </Link>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6 "
                  iconStyles="w-9 h-9 border border-accent-hover rounded-full flex justify-center items-center text-accent-hover text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
