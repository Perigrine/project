import { useEffect } from "react";
import { store } from "../Store";
import question from "../assets/question.png";
import heart from "../assets/heart.png";
import copy from "../assets/copy.png";
import { useState } from "react";

export const Revenue = () => {
  const [header, setHeader] = store.useState("Header");
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  useEffect(() => {
    setHeader("Revenue");
  });

  return (
    <div className="p-[20px]">
      <div className="sm:flex block">
        <div className="w-full">
          <div className="flex items-center relative">
            <div className="text-[#888EB8]">Total Revenue</div>
            <img
              src={question}
              tabIndex={0}
              onClick={() => {
                setShow(true);
              }}
              onBlur={() => {
                setShow(false);
              }}
            ></img>

            {show ? (
              <div className="absolute top-[50px] border-[1px] border-gray shadow-lg text-[#00106D] p-[10px] bg-white w-[380px] rounded-[10px] z-10">
                <div className="font-bold">Revenue Breakdown</div>
                <div>
                  Stripe:
                  <span className="font-bold">$0.00</span>
                </div>
                <div>
                  Paypal:
                  <span className="font-bold">$0.00</span>
                </div>
                <div>
                  PayPal earnings will show up in your personal account, and not
                  in Hype It Account Balance.
                  <span className="text-[#B947F2]">Click here</span> to learn
                  more.
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="text-[#00106D] font-bold text-[40px]">$0.00</div>
          {/* <div className="h-[200px] border-[1px] border-black"></div> */}
        </div>
        <div className="sm:w-[800px] w-full h-min p-[30px] rounded-[20px] shadow-lg">
          <div className="flex items-center gap-6">
            <div>
              <div className="flex items-center relative">
                <div className="text-[#888EB8]">Account Balance</div>
                <img
                  src={question}
                  tabIndex={0}
                  onClick={() => {
                    setShow1(true);
                  }}
                  onBlur={() => {
                    setShow1(false);
                  }}
                ></img>

                {show1 ? (
                  <div className="absolute top-[50px] border-[1px] border-gray shadow-lg text-[#00106D] p-[10px] bg-white w-[300px] rounded-[10px]">
                    This includes your current Stripe balance available to cash
                    out now.
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="text[#00106D] font-bold">$0.00</div>
            </div>
            <div>
              <div className="flex">
                <div className="text-[#888EB8]">Held by Hype It</div>
              </div>
              <div className="text[#00106D] font-bold">$0.00</div>
            </div>
            <div>
              <div className="flex items-center relative">
                <div className="text-[#888EB8] ">Pending</div>
                <img
                  src={question}
                  tabIndex={0}
                  onClick={() => {
                    setShow2(true);
                  }}
                  onBlur={() => {
                    setShow2(false);
                  }}
                ></img>
                {show2 ? (
                  <div className="absolute top-[50px] right-[0px] border-[1px] border-gray shadow-lg text-[#00106D] p-[10px] bg-white w-[300px] rounded-[10px]">
                    This money is currently settling in Stripe and usually takes
                    around 1-3 business to become available in your Account
                    Balance.
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="text[#00106D] font-bold">$0.00</div>
            </div>
          </div>

          <div className="btn mt-6 flex justify-center items-center rounded-[10px]">
            Add Product
          </div>
        </div>
      </div>
      <div className="p-[30px] rounded-[20px] shadow-lg mt-6 border-[1px] border-[#EBEBFF]">
        <div className="text-[#00106D] font-bold">Recent Sales</div>
        <div className="grid justify-items-start grid-cols-4 text-[#818FB5]">
          <div>Date & Time</div>
          <div>Product</div>
          <div>Amount</div>
          <div>Email</div>
        </div>

        <div className="hidden sm:grid justify-items-start grid-cols-4 text-[#00106D] my-1">
          <div>17/08/2023</div>
          <div>Video Audit</div>
          <div>$50</div>
          <div>customeratgmail.com</div>
        </div>
      </div>

      <div className="p-[30px] rounded-[20px] shadow-lg mt-6 border-[1px] border-[#EBEBFF]">
        <div className="text-[#00106D] font-bold">Referral Income</div>

        <div className="flex justify-around gap-4 mt-4">
          <div className="w-full border-[1px] border-[#EBEBFF] p-[10px] rounded-[20px]">
            <div className="text-[#888EB8]">Active Referrals</div>
            <div className="text-[#00106D] text-[24px] font-bold">0</div>
          </div>
          <div className="w-full border-[1px] border-[#EBEBFF] p-[10px] rounded-[20px]">
            <div className="text-[#888EB8]">Active Referrals</div>
            <div className="text-[#00106D] text-[24px] font-bold">0</div>
          </div>
          <div className="w-full border-[1px] border-[#EBEBFF] p-[10px] rounded-[20px]">
            <div className="text-[#888EB8]">Active Referrals</div>
            <div className="text-[#00106D] text-[24px] font-bold">0</div>
          </div>
        </div>

        <div className="justify-center text-center font-bold mt-6">
          <span className="text-[#00106D] font-bold">
            Refer a friend to Hype It to earn monthly recurring income
          </span>
          <span className="underline text-[#B947F2]">
            join.hypeit.store/bk1
          </span>
        </div>

        <div className="justify-center text-center font-bold">
          <span className="text-[#00106D] font-bold">
            For each friend that joins Hype It using your link, you
          </span>
          <span className="underline text-[#B947F2]"> earn 20% profit</span>
          <span className="text-[#00106D] font-bold">share every month.</span>
        </div>
      </div>

      <div className="p-[30px] rounded-[20px] shadow-lg mt-6 border-[1px] border-[#EBEBFF] flex items-center justify-end relative">
        <div className="absolute left-[30px] flex items-center">
          <img src={heart} className="hidden sm:flex"></img>
          <div className="font-bold text-[#00106D] ml-2 hidden sm:flex">
            Share Referral Link
          </div>
        </div>
        <div className="mx-2 text-[#B947F2]">hypeit.store/bk1</div>
        <div className="mx-2 border-[1px] border-[#B947F2] w-max h-min text-[#B947F2] p-[5px] flex rounded-[10px] cursor-pointer items-center">
          <img src={copy}></img>
          <div className="pl-[5px]">Copy</div>
        </div>
      </div>
    </div>
  );
};
