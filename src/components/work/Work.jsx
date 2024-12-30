import React from "react";
import cloud from "../../assets/icons/cloud.png";
import trumphair from "../../assets/icons/trumphair.png";
import trumpcoin from "../../assets/icons/trumpcoin.png";

const Work = () => {
  return (
    <div id="buy" className="min-h-screen w-full relative flex md:top-0 ">
      {/* Background image with transparent blue overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-blue-500 opacity-50"
        style={{ backgroundImage: `url(${cloud})` }}
      ></div>

      <div className="relative flex flex-col justify-center items-center   w-full">
        <h1
          style={{ fontFamily: "Irish Grover" }}
          className="text-5xl text-[#742F06]"
        >
          How to work
        </h1>
        <p className=" mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quam
          vo
        </p>

        <div className="grid grid-col-1 xl:grid-cols-3  md:px-60 mt-6">
          <div className="flex flex-col p-9 mx-5 bg-white items-center rounded-2xl mb-6">
            <h1
              style={{ fontFamily: "Irish Grover" }}
              className="text-[#722E06]"
            >
              Create Wallet
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              soluta odit rem ex eum nam iusto numquam amet quibusdam reiciendis
              nemo totam aut sapiente velit repudiandae accusantium, incidunt
              architecto beatae?
            </p>
            <button className="bg-[#74D43E] px-3 py-2 rounded-md">
              read more
            </button>
          </div>
          <div className="flex flex-col p-9 mx-5 bg-white items-center rounded-2xl mb-6">
            <h1
              style={{ fontFamily: "Irish Grover" }}
              className="text-[#722E06]"
            >
              Pump.fun
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              soluta odit rem ex eum nam iusto numquam amet quibusdam reiciendis
              nemo totam aut sapiente velit repudiandae accusantium, incidunt
              architecto beatae?
            </p>
            <button className="bg-[#74D43E] px-3 py-2 rounded-md">
              read more
            </button>
          </div>
          <div className="flex flex-col p-9 mx-5 bg-white items-center rounded-2xl mb-6">
            <h1
              style={{ fontFamily: "Irish Grover" }}
              className="text-[#722E06]"
            >
              Buy token
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              soluta odit rem ex eum nam iusto numquam amet quibusdam reiciendis
              nemo totam aut sapiente velit repudiandae accusantium, incidunt
              architecto beatae?
            </p>
            <button className="bg-[#74D43E] px-3 py-2 rounded-md">
              read more
            </button>
          </div>
        </div>

        
      </div>
      <div className="absolute hidden sm:block "  style={{ left: '0px', bottom: '-190px' }}>
          <img src={trumphair}  width="204px" height="270" />
        </div>
        <div className="absolute hidden sm:block right-0"  style={{ bottom: '-190px' }}>
          <img src={trumpcoin} width="204px" height="270" />
        </div>
    </div>
  );
};

export default Work;
