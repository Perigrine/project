import { store } from "../Store";
import copy from "../assets/copy.png";
import avatar from "../assets/avatar.png";
import { useState } from "react";
import back from "../assets/back.png";
import { NavLink } from "react-router-dom";

import responsive from "../assets/responsive.png";

import logo from "../assets/logo.png";
import hypeit from "../assets/hypeit.png";
import Home1 from "../assets/home1.png";
import Home2 from "../assets/home2.png";
import mystore1 from "../assets/mystore1.png";
import mystore2 from "../assets/mystore2.png";
import revenue1 from "../assets/revenue1.png";
import revenue2 from "../assets/revenue2.png";
import integrations1 from "../assets/integrations1.png";
import integrations2 from "../assets/integrations2.png";
import setting1 from "../assets/setting.png";
import setting2 from "../assets/setting1.png";
import logout from "../assets/logout.png";
import Btn from "./Btn";

export const Header = () => {
  const [header, setHeader] = store.useState("Header");
  const [show, setShow] = useState(false);

  return (
    <div className="h-[70px] border-b-[2px] border-[#EBEBFF] text-[#00106D] font-bold p-[10px] justify-end flex items-center relative">
      <div className="absolute left-[20px] text-[20px] flex items-center">
        {header == "Choose Product Type" ? (
          <img
            src={back}
            className="mr-1 cursor-pointer"
            onClick={() => {
              setHeader("My Store");
            }}
          ></img>
        ) : (
          <></>
        )}

        <div className="hidden sm:flex">{header}</div>
      </div>

      <div
      // onBlur={() => {
      //   setShow(false);
      // }}
      >
        <img
          src={responsive}
          className="mr-[50px] sm:hidden"
          tabIndex={0}
          onClick={() => {
            setShow(!show);
          }}
        ></img>
        {show ? (
          <div className="absolute top-[70px] bg-white left-0 z-10 sm:hidden shadow-lg">
            <div onClick={() => setShow(false)}>
              <Btn
                id="Home"
                icon1={Home1}
                icon2={Home2}
                text={"Home"}
                link="/home"
              />
              <Btn
                id="My Store"
                icon1={mystore1}
                icon2={mystore2}
                text={"My Store"}
                link="/mystore"
              />
              <Btn
                id="Revenue"
                icon1={revenue1}
                icon2={revenue2}
                text={"Revenue"}
                link="/revenue"
              />
              <Btn
                id="integrations"
                icon1={integrations2}
                icon2={integrations1}
                text={"Integrations"}
                link="/integrations"
              />
              <Btn
                id="setting"
                icon1={setting2}
                icon2={setting1}
                text={"Settings"}
                link="/settings"
              />
              <Btn
                id="logout"
                icon1={logout}
                icon2={logout}
                text={"Logout"}
                link="/signin"
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <NavLink to="/link">
        <div className="text-[#B947F2]">hypeit.store/bk1</div>
      </NavLink>
      <div className="hidden sm:flex mx-2 border-[1px] border-[#B947F2] w-max h-min text-[#B947F2] p-[5px] flex rounded-[10px] cursor-pointer items-center">
        <img src={copy}></img>
        <div className="pl-[5px]">Copy</div>
      </div>
      <img className="mx-2 rounded-[25px]" src={avatar} width={50}></img>
      <div className="hidden sm:flex">John's Store</div>
    </div>
  );
};
