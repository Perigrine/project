import { store } from "../Store";
import { useEffect } from "react";
import { InputItem } from "../components/InputItem";

export const Settings = () => {
  const [header, setHeader] = store.useState("Header");
  useEffect(() => {
    setHeader("Settings");
  });
  return (
    <div className="text-black p-[20px]">
      <div className="font-bold">My Profile</div>

      <div className="mt-6 grid sm:grid-cols-2">
        <InputItem title="Name" />
        <InputItem title="Username" />
        <InputItem title="Email" />
        <InputItem title="Phone Number" />
      </div>

      <div className="btn w-max rounded-[10px] mt-6 mr-6">Update</div>

      <div className="font-bold mt-6">Password</div>

      <div className="mt-6 grid sm:grid-cols-2">
        <InputItem title="Current Password" />
        <br />
        <InputItem title="New Password" />
        <InputItem title="Confirm Password" />
      </div>

      <div className="btn w-max rounded-[10px] mt-6 mr-6">Update</div>
    </div>
  );
};
