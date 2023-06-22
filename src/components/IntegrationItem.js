import plus from "../assets/plus.png";

export const IntegrationItem = ({ img, title, subtitle, description }) => {
  return (
    <div className="w-full p-[20px] border-[1px] border-gray shadow-lg rounded-[10px] space-y-2">
      <div className="flex gap-[20px]">
        <img src={img}></img>
        <div className="font-bold">{title}</div>
      </div>
      <div className="font-semibold">{subtitle}</div>
      <div>{description}</div>
      <div className="btn mt-6 flex justify-center items-center rounded-[10px]">
        <img src={plus} className="w-[10px] h-[10px] mr-2"></img>
        Connect
      </div>
    </div>
  );
};
