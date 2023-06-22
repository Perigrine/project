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
import { store } from "../Store";
import Btn from "./Btn";
import usePath from "react-use-path";

export const SideBar = () => {
  const [header, setHeader] = store.useState("Header");
  const [path, setPath] = usePath();
  console.log(window.location.href);

  return (
    <div className="hidden sm:block min-w-[350px] min-h-[100vh] bg-[#fce5ec7c]">
      <div className="my-[50px] ml-[30px] flex items-center">
        <img className="" src={logo}></img>
        <img className="" src={hypeit}></img>
      </div>

      <div>
        <Btn
          id="Home"
          icon1={Home1}
          icon2={Home2}
          text={"Home"}
          link="/dashboard/home"
          islogout="false"
        />
        <Btn
          id="My Store"
          icon1={mystore1}
          icon2={mystore2}
          text={"My Store"}
          link="/dashboard/mystore"
          islogout="false"
        />
        <Btn
          id="Revenue"
          icon1={revenue1}
          icon2={revenue2}
          text={"Revenue"}
          link="/dashboard/revenue"
          islogout="false"
        />
        <Btn
          id="integrations"
          icon1={integrations2}
          icon2={integrations1}
          text={"Integrations"}
          link="/dashboard/integrations"
          islogout="false"
        />
        <Btn
          id="setting"
          icon1={setting2}
          icon2={setting1}
          text={"Settings"}
          link="/dashboard/settings"
          islogout="false"
        />
        <Btn
          id="logout"
          icon1={logout}
          icon2={logout}
          text={"Logout"}
          link="/login"
          islogout="ture"
        />
      </div>
    </div>
  );
};
