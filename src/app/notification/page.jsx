import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdPayment, MdSick, MdAccessTime } from "react-icons/md";

const NotificationHeader = () => (
  <div className="bg-white p-4 shadow-md flex items-center">
    <FaArrowLeft className="text-red-500" />
    <h1 className="ml-4 text-xl font-semibold">Notification</h1>
  </div>
);

const NotificationItem = ({ icon: Icon, title, description, date, status }) => (
  <div className="flex items-start p-4 border-b border-gray-200">
    <div className="flex-shrink-0">
      <Icon className="w-12 h-12 text-red-500" />
    </div>
    <div className="ml-4 flex-grow">
      <div className="flex justify-between">
        <h2 className="text-sm font-bold">{title}</h2>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <p className="text-sm">{description}</p>
      <span
        className={`text-xs font-semibold ${
          status === "rejected"
            ? "text-red-500"
            : status === "approved"
            ? "text-green-500"
            : "text-gray-500"
        }`}
      >
        {status}
      </span>
    </div>
  </div>
);

const notifications = [
  {
    icon: MdPayment,
    title: "Reimbursement",
    description:
      'Your submission "Lorem ipsum dolor sit amet..." with the total cost of 50,000 has been paid, please check your BRIMO application, Thankyou',
    date: "Today",
    status: "paid",
  },
  {
    icon: MdPayment,
    title: "Reimbursement",
    description:
      'Your submission "description" has been rejected, please click for details.',
    date: "Yesterday",
    status: "rejected",
  },
  {
    icon: MdPayment,
    title: "Reimbursement",
    description:
      "Your submission will be processed according to the reimbursement schedule. Please wait",
    date: "2022-10-06",
    status: "processing",
  },
  {
    icon: MdSick,
    title: "Sickness",
    description: "Your submission has been approved by the Superior.",
    date: "2022-10-05",
    status: "approved",
  },
  {
    icon: MdSick,
    title: "Sickness",
    description:
      "Your submission has been rejected, please confirm with your Superior.",
    date: "2022-10-05",
    status: "rejected",
  },
  {
    icon: MdSick,
    title: "Sickness",
    description:
      "Your submission is being reviewed by the Superior for the approval process, please wait.",
    date: "2022-10-05",
    status: "reviewing",
  },
  {
    icon: MdAccessTime,
    title: "Overtime",
    description: "Your submission has been approved by the Superior.",
    date: "2022-10-05",
    status: "approved",
  },
  {
    icon: MdAccessTime,
    title: "Overtime",
    description:
      "Your submission has been rejected, please confirm with your Superior.",
    date: "2022-10-05",
    status: "rejected",
  },
  {
    icon: MdAccessTime,
    title: "Overtime",
    description:
      "Your submission is being reviewed by the Superior for the approval process, please wait.",
    date: "2022-10-05",
    status: "reviewing",
  },
];
const Notification = () => (
  <div className="bg-gray-100 min-h-screen">
    <NotificationHeader />
    <div className="p-4">
      {notifications.map((notification, index) => (
        <NotificationItem
          key={index}
          icon={notification.icon}
          title={notification.title}
          description={notification.description}
          date={notification.date}
          status={notification.status}
        />
      ))}
    </div>
  </div>
);

export default Notification;
