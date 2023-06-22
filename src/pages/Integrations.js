import { store } from "../Store";
import { useEffect } from "react";
import { IntegrationItem } from "../components/IntegrationItem";
import calender from "../assets/calendar.png";
import mailchimp from "../assets/mailchimp.png";

export const Integraions = () => {
  const [header, setHeader] = store.useState("Header");
  useEffect(() => {
    setHeader("Integrations");
  });
  return (
    <div className="grid sm:grid-cols-2 text-black p-[20px] gap-[20px]">
      <IntegrationItem
        img={calender}
        title="Google Calendar"
        subtitle="Our Built-in Calendar Product"
        description="Stop paying for.."
      />

      <IntegrationItem
        img={mailchimp}
        title="Mailchimp"
        subtitle="Nurture Your Audience Via Email"
        description="Automate your email marketing.."
      />
    </div>
  );
};
