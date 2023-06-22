import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

export const InputItem = ({ title }) => {
  const [value, setValue] = useState();

  return (
    <div>
      <div className="font-semibold my-4">{title}</div>

      {title == "Phone Number" ? (
        <>
          <PhoneInput
            className="outline-none bg-[#eeeeee] p-3 rounded-[10px] w-full sm:w-[400px]"
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
          <div className="mt-2">{value}</div>
        </>
      ) : title.includes("Password") ? (
        <input
          type="password"
          className="outline-none bg-[#eeeeee] p-3 rounded-[10px] w-full sm:w-[400px]"
        ></input>
      ) : (
        <input className="outline-none bg-[#eeeeee] p-3 rounded-[10px] w-full sm:w-[400px]"></input>
      )}
    </div>
  );
};
