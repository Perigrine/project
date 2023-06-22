import { useEffect } from "react";
import { store } from "../Store";
import notify from "../assets/notify.png";
import plus from "../assets/plus.png";
import eye from "../assets/eye.png";
import people from "../assets/people.png";
import revenue from "../assets/revenue.png";
import arrow from "../assets/arrow.png";
// import { Table } from "../components/table";

export const Home = () => {
  const [header, setHeader] = store.useState("Header");
  useEffect(() => {
    setHeader("Home");
  });

  return (
    <div className="p-[20px]">
      <div className="text-[#00106D] text-[20px] font-bold">Hey John Doe</div>
      <div className="h-[60px] p-[10px] mt-4 rounded-[10px] bg-[#EBEBFF] flex relative items-center">
        <img src={notify} className="mr-2"></img>
        <div className="text-[#131F60] font-bold hidden sm:flex">
          Connect your Stripe account to start accepting payments!
        </div>
        <div className="btn flex absolute right-[10px] items-center rounded-[10px]">
          <img src={plus} className="w-[10px] h-[10px] mr-2"></img>
          Connect Stripe
        </div>
      </div>

      <div className="flex">
        <div className="btn w-max rounded-[20px] mt-6 mr-6">Last 7 Days</div>
        <div className="text-[#8B9095] bg-[#EBEBFF] p-[10px] w-max rounded-[20px] mt-6 cursor-pointer">
          Last Month
        </div>
      </div>

      <div className="border-[1px] border-[#EBEBFF] rounded-[10px] p-[10px] mt-6 flex shadow-lg h-[500px] sm:h-max">
        <div className="sm:block flex justify-around sm:justify-start w-full sm:w-max h-max sm:space-y-3">
          <div className="rounded-[10px] border-[#B282FF] border-[1px] p-[20px]">
            <div className="flex items-center">
              <img src={eye} className="mr-2"></img>
              <div className="text-[#888EB8] hidden sm:flex">Views</div>
            </div>
            <div className="flex mt-3 items-center">
              <div className="mr-2 text-[#00106D] text-[24px] font-bold">
                10
              </div>
              <img className="mr-2 hidden sm:flex " src={arrow}></img>
              <div className="text-[14px] text-[#00106D] hidden sm:flex">
                100%
              </div>
            </div>
          </div>

          <div className="rounded-[10px] border-[#888EB8] border-[1px] p-[20px]">
            <div className="flex items-center">
              <img src={people} className="mr-2"></img>
              <div className="text-[#888EB8] hidden sm:flex">Leads</div>
            </div>
            <div className="flex mt-3 items-center">
              <div className="mr-2 text-[#00106D] text-[24px] font-bold">0</div>
              <img className="mr-2 hidden sm:flex" src={arrow}></img>
              <div className="text-[14px] text-[#00106D] hidden sm:flex">
                0%
              </div>
            </div>
          </div>

          <div className="rounded-[10px] border-[#888EB8] border-[1px] p-[20px]">
            <div className="flex items-center">
              <img src={revenue} className="mr-2"></img>
              <div className="text-[#888EB8] hidden sm:flex">Revenue</div>
            </div>
            <div className="flex mt-3 items-center">
              <div className="mr-2 text-[#00106D] text-[24px] font-bold">
                $0
              </div>
              <img className="mr-2 hidden sm:flex" src={arrow}></img>
              <div className="text-[14px] hidden sm:flex text-[#00106D]">
                0%
              </div>
            </div>
          </div>
        </div>

        {/* <Table /> */}
      </div>
    </div>
  );
};
