"use client";

import { ArrowRight, Bookmark, ChevronDown, Trash2 } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    // <section className="max-w-7xl h-screen my-auto mx-auto px-6 py-16">
    //   {/* Editorial Insights Label */}
    //   <div className="text-accent font-bold text-sm tracking-widest mb-6">
    //     EDITORIAL INSIGHTS
    //   </div>

    //   {/* Main Headline */}
    //   <div className="mb-8">
    //     <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-2">
    //       Leading the Future of
    //     </h1>
    //     <h1 className="text-5xl md:text-6xl font-bold text-primary">
    //       Corporate Excellence.
    //     </h1>
    //   </div>

    //   {/* Subheading */}
    //   <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">
    //     In-depth analysis, strategic recipes, and management philosophies for the modern professional.
    //   </p>

    //   {/* CTA buttons */}
    //   {/* <div className="flex gap-6 items-center">
    //     <button
    //       size="lg"
    //       className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg flex items-center gap-2"
    //     >
    //       Explore Categories
    //       <ArrowRight className="w-5 h-5" />
    //     </button>
    //     <button
    //       size="lg"
    //       variant="outline"
    //       className="border-2 border-primary text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary/5 bg-transparent"
    //     >
    //       Latest Articles
    //     </button>
    //   </div> */}
    // </section>

    <section className="min-h-screen bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-0 items-center">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <p className="text-sm md:text-base font-semibold tracking-widest text-accent uppercase">
                Editorial Insights
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Leading the Future of{" "}
                <span className="text-accent">Culinary Excellence</span>
              </h1>
            </div>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              In-depth analysis, strategic recipes, and culinary philosophies
              for the modern food enthusiast.
            </p>

            <button
              className="group w-50 sm:px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-full  flex gap-2 items-center cursor-pointer"
              onClick={() =>
                document
                  .getElementById("blogs")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Blogs
              <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </div>

          {/* Right Side - Image with Blob Effect */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[550px] mt-8 lg:mt-0">
            {/* Main Blob Container with Image */}
            <div className="relative w-full h-full flex justify-center items-center group">
              {/* Blob background - responsive sizing */}
              <svg
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] lg:w-[520px] lg:h-[520px] text-blue-100 z-0 transition-transform duration-500 ease-out group-hover:rotate-6"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M38.2,-63.4C51.3,-58.2,64.8,-51.7,71.7,-40.9C78.7,-30.1,79,-15.1,76.6,-1.4C74.2,12.2,69.1,24.5,61.2,35.4C53.3,46.4,42.6,56,30.1,62.7C17.7,69.4,3.5,73.2,-10.5,71.4C-24.5,69.6,-49,62.2,-61.4,50.7C-73.7,39.2,-74,23.6,-72.4,9.6C-70.9,-4.4,-67.5,-16.8,-60.4,-26.8C-53.3,-36.8,-42.4,-44.3,-31.1,-51.3C-19.8,-58.3,-9.9,-64.7,1.2,-66.8C12.3,-68.9,24.6,-66.5,38.2,-63.4Z"
                  transform="translate(100 100)"
                />
              </svg>

              {/* Foreground image - responsive sizing */}
              <img
                src="/food.png"
                alt="Delicious cooked recipe"
                className="relative z-10 w-65 sm:w-70 md:w-[320px] lg:w-110 h-auto rounded-2xl sm:rounded-3xl object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements - adjusted for mobile */}
      <div className="fixed -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-accent rounded-full opacity-10 blur-3xl pointer-events-none"></div>
      <div className="fixed -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-secondary rounded-full opacity-10 blur-3xl pointer-events-none"></div>
    </section>
  );
}
