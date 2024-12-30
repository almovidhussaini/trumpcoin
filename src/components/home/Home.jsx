import React from "react";
import cloud from "../../assets/icons/cloud.png";
import trumphome from "../../assets/icons/trumphome.png";
import arrowright from "../../assets/icons/arrow-right.png";
import memcore from "../../assets/icons/memecore.png";


const Home = () => {
  return (
    <div className="min-h-screen w-full relative flex md:top-0 top-20">
      {/* Background image with transparent blue overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-blue-500 opacity-50"
        style={{ backgroundImage: `url(${cloud})` }}
      ></div>

      {/* Content section */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-8 w-full gap-x-3  ">
        <div className="flex flex-col justify-center items-center px-10 md:px-20 md:col-span-3 h-full ">
          <h1 className="font-large text-6xl md:text-9xl text-[#8A5B45]" style={{fontFamily: "Irish Grover"}}>1202025</h1>
          <p className="font-large text-2xl text-center">
            Design a meme coin character inspired by TRUMP + BLBLEFACE
            incorporating cartoonish elements such as oversized facial features.
          </p>
          </div>
        <div className="flex flex-col justify-center items-center md:col-span-2">
          <div>
            <img
              src={trumphome}
              alt="Trump Navbar"
              width="243px"
              height="312px"
            />
          </div>
          <div className="px-12 mr-5 py-5 bg-[#DADAE0] rounded-b-3xl">
            <button className="bg-[#77AD4B] px-4 py-2 rounded-3xl">Buy Token</button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:col-span-3 px-10">
          <div>
            <h1 className="text-center text-3xl" style={{fontFamily:'Inria Sans', fontWeight:'bold'}}>
              Proportions and a playful expression, with a golden coin texture
              and sparkles around it, making it eye-catching for a website.
            </h1>
          </div>
          <div className="flex mt-5 bg-[#DADAE0] p-5 rounded-md border-2 border-black">
            <img className="pr-2" src={memcore} width="24px" height="24px" />
            <p className="mx-6">GOxe3c127466908c2ccdc43521c8</p>
            <img className="" src={arrowright} width="16px" height="16px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
