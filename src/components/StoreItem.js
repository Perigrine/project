import option from "../assets/option.png";
import options from "../assets/options.png";

import unpublish from "../assets/uppublish.png";
import duplicate from "../assets/duplicate.png";
import deletei from "../assets/delete.png";

import Modal from "react-modal";

import { useEffect, useState } from "react";
import { fileDownload as download } from "js-file-download";
import api from "../utils/api";

export const StoreItem = ({ img, title, price, icon, onDelete }) => {
  const [show, setShow] = useState(false);
  const [unpublished, setUnpublished] = useState(false);

  const Unpublish = async () => {
    let store = await api.get(`/store/${img}`);
    setUnpublished(true);
  };

  const Delete = async () => {
    await api.delete(`/store/${img}`);
    await onDelete();
  };

  return unpublished ? (
    <></>
  ) : (
    <div className="border-[1px] border-[#EBEBFF] rounded-[10px] p-[20px] shadow-lg flex items-center relative">
      <img src={option}></img>
      <img className="ml-6" src={`/images/${img}`} width={60}></img>

      <div className="ml-6">
        <div className="flex items-center">
          <div className="text-[#00106D] font-bold mr-3">{title}</div>
          <img src={icon} className="hidden sm:block"></img>
        </div>
        <div className="text-[#B947F2] font-bold">{price}</div>
      </div>
      <img
        className="absolute right-[10px] ml-6 cursor-pointer"
        src={options}
        tabIndex={0}
        onClick={() => {
          setShow(true);
        }}
        // onBlur={() => {
        //   setShow(false);
        // }}
      ></img>

      {show ? (
        <div className="absolute right-[50px] top-[50px] width-[100px] border-[1px] border-gray px-[30px] py-[10px] bg-white rounded-[10px] z-10">
          <div className="flex items-center gap-2">
            <img src={unpublish}></img>
            <div className="text-[#00106D] cursor-pointer" onClick={Unpublish}>
              Unpublish
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src={duplicate}></img>
            <div className="text-[#00106D]">Duplicate</div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src={deletei}></img>
            <div className="text-[#00106D]" onClick={Delete}>
              Delete
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
