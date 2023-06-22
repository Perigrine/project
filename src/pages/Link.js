import phone from "../assets/phone.png";
import { store } from "../Store";
import { useEffect } from "react";
import John from "../assets/phoneJohn.png";
import tiktok from "../assets/tiktok1.png";
import instagram from "../assets/instagram1.png";

import website from "../assets/website.png";
import podcast from "../assets/podcast.png";
import tiktokstarterguide from "../assets/starterguide.png";
import videoaudit from "../assets/videoaudit.png";
import coaching from "../assets/coaching.png";
import steps from "../assets/steps.png";

import logo from "../assets/logo.png";
import hypeit from "../assets/hypeit.png";

import back from "../assets/back.png";

export const Link = () => {
  const [header, setHeader] = store.useState("Header");
  useEffect(() => {
    setHeader("link");
  }, []);

  return (
    <div className="absolute top-0 left-0 z-10 w-[100vw] h-[100vh] bg-white flex justify-center items-center">
      <div
        className="absolute top-[50px] left-[100px] flex items-center gap-3 cursor-pointer"
        onClick={() => {
          window.history.back();
        }}
      >
        <img src={back}></img>
        <div className="text-[#B947F2]">Go Back</div>
      </div>

      <img src={phone}></img>

      <div className="absolute w-[320px] h-[640px] text-white scrollcontainer overflow-scroll">
        <div className="flex justify-center">
          <img src={John}></img>
          <div className="absolute top-[120px] text-white text-[25px] font-bold">
            John's Store
          </div>

          <div className="absolute flex top-[160px] gap-6">
            <div className="rounded-[5px] bg-[#2D2D2D] p-[5px]">
              <img src={tiktok}></img>
            </div>
            <div className="rounded-[5px] bg-[#2D2D2D] p-[5px]">
              <img src={instagram}></img>
            </div>
          </div>
        </div>

        <div className="border-gray border-[1px] rounded-[10px] p-[10px] mt-6 flex items-center gap-6">
          <img src={website} className="w-[60px] rounded-[30px]"></img>
          <div>Official Website</div>
        </div>

        <div className="border-gray border-[1px] rounded-[10px] p-[10px] mt-6">
          <div className="flex items-center gap-6">
            <img src={podcast} className="w-[80px]"></img>
            <div>
              <div>My Podcast</div>
              <div className="text-[15px]">Check out my podcast</div>
            </div>
          </div>

          <div className="bg-white text-black text-center rounded-[5px] mt-[10px] p-2 font-bold text-[15px]">
            Listen
          </div>
        </div>

        <div className="border-gray border-[1px] rounded-[10px] p-[10px] mt-6">
          <div className="flex items-center gap-6">
            <img
              src={tiktokstarterguide}
              className="w-[60px] rounded-[30px]"
            ></img>

            <div>
              <div>TikTok Starter Guide</div>
              <div className="text-[15px] text-[#38F968]">$5</div>
            </div>
          </div>
        </div>

        <div className="border-gray border-[1px] rounded-[10px] p-[10px] mt-6">
          <div className="flex items-center gap-6">
            <img src={videoaudit} className="w-[80px]"></img>
            <div>
              <div>Video Audit</div>
              <div className="text-[15px]">
                We will personally review your TikTok or Instagram account and
                help you create a plan to improve
              </div>
              <div className="text-[15px] text-[#38F968]">$50</div>
            </div>
          </div>

          <div className="bg-white text-black text-center rounded-[5px] mt-[10px] p-2 font-bold text-[15px]">
            Audit My Account
          </div>
        </div>

        <div className="border-gray border-[1px] rounded-[10px] p-[10px] mt-6">
          <div className="flex items-center gap-6">
            <img src={coaching} className="w-[80px]"></img>
            <div>
              <div>1:1 Coaching Call</div>
              <div className="text-[15px]">
                Book a private coaching session with me!
              </div>
              <div className="text-[15px] text-[#38F968]">$200</div>
            </div>
          </div>

          <div className="bg-white text-black text-center rounded-[5px] mt-[10px] p-2 font-bold text-[15px]">
            Book a 1:1 Call With Me
          </div>
        </div>

        <div className="border-gray border-[1px] rounded-[10px] p-[10px] mt-6">
          <div className="flex items-center gap-6">
            <img src={steps} className="w-[80px]"></img>
            <div>
              <div>10 Steps to better content</div>
              <div className="text-[15px]">
                Join to download plus get a free weekly TikTok tips newsletter!
              </div>
            </div>
          </div>

          <input
            className="bg-[#222222] text-white rounded-[5px] mt-[10px] p-2 text-[15px] border-gray border-[1px] w-full"
            placeholder="Enter Your Name"
          ></input>

          <input
            className="bg-[#222222] text-white rounded-[5px] mt-[10px] p-2 text-[15px] border-gray border-[1px] w-full"
            placeholder="Enter Your Email"
          ></input>

          <div className="flex gap-2">
            <select className="bg-[#444444] text-white rounded-[5px] mt-[10px] p-2 text-[15px] border-gray border-[1px] w-[80px]">
              <option>US +1</option>
            </select>
            <input
              className="bg-[#222222] text-white rounded-[5px] mt-[10px] p-2 text-[15px] border-gray border-[1px] w-full"
              placeholder="Enter Your Phone Number"
            ></input>
          </div>

          <div className="bg-white text-black text-center rounded-[5px] mt-[10px] p-2 font-bold text-[15px]">
            Submit & Download
          </div>
        </div>

        <div className="text-center text-[15px] my-5">Privacy Policy</div>

        <div className="border-gray border-[1px] rounded-[10px] p-[5px] mt-6 flex items-center text-end gap-2 bg-[#f3ddfd]">
          <img src={logo} className="max-h-[20px]"></img>
          <img src={hypeit} className="max-h-[10px]"></img>
          <div className="absolute right-2 text-[15px] text-[#B947F2]">
            Try 14 Days Free
          </div>
        </div>
      </div>
    </div>
  );
};
