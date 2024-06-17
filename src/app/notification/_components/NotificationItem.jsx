import { CgPill } from "react-icons/cg";
import {
  FaCircleArrowRight,
  FaCircleCheck,
  FaCircleXmark,
  FaClock,
  FaCoins,
} from "react-icons/fa6";

export const NotificationItem = ({
  title,
  description,
  date,
  status,
  isRead,
}) => {
  const Icons = {
    reimbursement: FaCoins,
    sickness: CgPill,
    overtime: FaClock,
  };

  const statusIcons = {
    paid: { icon: FaCircleCheck, color: "green" },
    approved: { icon: FaCircleCheck, color: "green" },
    rejected: { icon: FaCircleXmark, color: "red" },
    processing: { icon: FaCircleArrowRight, color: "blue" },
    reviewing: { icon: FaCircleArrowRight, color: "blue" },
  };

  const Icon = Icons[title.toLowerCase()];
  const { icon: StatusIcon, color: statusColor } = statusIcons[status] || {};

  return (
    <div
      className={`flex items-start py-4 px-8 ${!isRead ? "bg-blue-100" : ""}`}
    >
      <div className="flex-shrink-0 relative bg-red-500 rounded-md ">
        {Icon && <Icon className="w-12 h-12 p-1" />}
        {StatusIcon && (
          <div className="bg-white absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 rounded-full">
            <StatusIcon color={statusColor} />
          </div>
        )}
      </div>
      <div className="ml-4 flex-grow">
        <div className="flex justify-between">
          <h2 className="text-sm font-bold">{title}</h2>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <div
          className="text-sm"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};
