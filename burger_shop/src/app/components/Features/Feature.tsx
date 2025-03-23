import React from "react";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-gray-100">
      {/* Heading */}
      <h1 className="heading">
        Burger made with <br /> love and
        <span className="text-red-500 "> Care</span>
      </h1>
      {/* Cards */}
      <div
        className="w-[90%] md:w-[80%] mt-[3rem] md:mt-[5rem] mb-[3rem] mx-auto grid grid-cols-1
      md:grid-cols-2 lg:grid-cols-3 gap-[3rem]"
      >
        {/* 1st card */}
        <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
          <Image
            src="/images/f1.jpg"
            alt="card1"
            className="rounded-3xl"
            width={350}
            height={350}
          />
          <h1 className="text-center text-2xl mt-[1.5rem] text-black font-semibold">
            Our Burgers
          </h1>
          <p className="mt-[0.2rem] text-black text-center opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            laudantium obcaecati sapiente? Eaque, sit. Facere sed consequuntur
            voluptates aspernatur repudiandae labore vitae soluta, cum obcaecati
            at porro laudantium quidem repellendus.
          </p>
        </div>

        {/* 2nd card */}
        <div className="p-6 hover:bg-white translate-y-[3rem] rounded-lg transition-all duration-200">
          <Image
            src="/images/f2.jpg"
            alt="card2"
            className="rounded-3xl"
            width={350}
            height={350}
          />
          <h1 className="text-center text-2xl mt-[1.5rem] text-black font-semibold">
            Your opinion is important
          </h1>
          <p className="mt-[0.2rem] text-black text-center opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            laudantium obcaecati sapiente? Eaque, sit. Facere sed consequuntur
            voluptates aspernatur repudiandae labore vitae soluta, cum obcaecati
            at porro laudantium quidem repellendus.
          </p>
        </div>

        {/* 3rd card */}
        <div className="p-6 hover:bg-white rounded-lg transition-all duration-200">
          <Image
            src="/images/f3.jpg"
            alt="card3"
            className="rounded-3xl"
            width={350}
            height={350}
          />
          <h1 className="text-center text-2xl mt-[1.5rem] text-black font-semibold">
            Chicken Burgers
          </h1>
          <p className="mt-[0.2rem] text-black text-center opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            laudantium obcaecati sapiente? Eaque, sit. Facere sed consequuntur
            voluptates aspernatur repudiandae labore vitae soluta, cum obcaecati
            at porro laudantium quidem repellendus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
