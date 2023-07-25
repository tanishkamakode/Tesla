import React from "react";
import { useEffect } from "react";
import ExpButton from "./ExpButton";

const Hero = () => {
  return (
    <section>
      <div className="no-scrollbar snap-y snap-mandatory h-screen w-screen overflow-scroll text-black">
        <div className="snap-start bg-center bg-full-screen bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-NA.jpg')] bg-cover h-screen w-screen flex items-start justify-center text-5xl">
          <div className="max-w-lg ease-in duration-500 pt-60 flex flex-col items-center justify-center ">
            <h3 className="text-3xl md:text-6xl font-semibold">Model 3</h3>
            <p className="text-lg md:text-xl">Starting at $32,740</p>
            <p className="text-lg md:text-xl">After Federal Tax Credit</p>

            <ExpButton />
          </div>
        </div>
        <div className="snap-start bg-center bg-full-screen bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_2400,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-Y-Global-Desktop.jpg')] bg-cover h-screen w-screen flex items-start justify-center text-5xl">
          <div className="max-w-lg pt-60 flex flex-col items-center justify-center ">
            <h3 className="text-3xl md:text-6xl font-semibold">Model Y</h3>
            <p className="text-lg md:text-xl">Starting at $40,240</p>
            <p className="text-lg md:text-xl">After Federal Tax Credit</p>
            <ExpButton />
          </div>
        </div>
        <div className="snap-start bg-center bg-full-screen bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-LHD-6.22.jpg')] bg-cover h-screen w-screen flex items-start justify-center text-5xl">
          <div className="max-w-lg pt-60 flex flex-col items-center justify-center ">
            <h3 className="text-3xl md:text-6xl font-semibold">Model S</h3>
            <a href="#" className="text-lg md:text-xl">
              Explore Inventory
            </a>
            <ExpButton />
          </div>
        </div>
        <div className="snap-start bg-center bg-full-screen bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD.png')] bg-cover h-screen w-screen flex items-start justify-center text-5xl">
          <div className="max-w-lg pt-60 flex flex-col items-center justify-center ">
            <h3 className="text-3xl md:text-6xl font-semibold">Model X</h3>
            <a href="#" className="text-lg md:text-xl">
              Explore Inventory
            </a>
            <ExpButton />
          </div>
        </div>
        <div className="snap-start bg-center bg-full-screen bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/425_HP_SolarPanels_D.png')] bg-cover h-screen w-screen flex items-start justify-center text-5xl">
          <div className="max-w-lg pt-60 flex flex-col items-center justify-center ">
            <h3 className="text-3xl md:text-6xl font-semibold">Solar Panels</h3>
            <a href="#" className="text-lg md:text-xl">
              Schedule a Virtual Consultation
            </a>
            <ExpButton />
          </div>
        </div>
        <div className="snap-start bg-center bg-full-screen bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-SolarRoof-Desktop-Global.png')] bg-cover h-screen w-screen flex items-start justify-center text-5xl">
          <div className="max-w-lg pt-60 flex flex-col items-center justify-center ">
            <h3 className="text-3xl md:text-6xl font-semibold">Solar Roof</h3>
            <a href="#" className="text-lg md:text-xl">
              Produce Clean Energy From Your Roof
            </a>
            <ExpButton />
          </div>
        </div>
        <div className="snap-start bg-center bg-full-screen bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop.jpg')] bg-cover h-screen w-screen flex items-center justify-center text-5xl">
          <div className="">
            <h3 className="text-3xl md:text-6xl font-semibold flex items-center justify-center">
              Powerwall
            </h3>
            <ExpButton />
          </div>
        </div>
        <div className="snap-start bg-center bg-full-screen bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-NA-APAC.jpg')] bg-cover h-screen w-screen flex items-center justify-center text-5xl">
          <div className="">
            <h3 className="text-3xl md:text-6xl font-semibold flex items-center justify-center">
              Accessories
            </h3>
            <ExpButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
