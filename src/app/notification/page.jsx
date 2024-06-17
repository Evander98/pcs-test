import { NotificationHeader } from "./_components/NotificationHeader";
import { NotificationItem } from "./_components/NotificationItem";

const notifications = [
  {
    title: "Reimbursement",
    description:
      '<p>Your submission "Lorem ipsum dolor sit amet..." with the total cost of 50,000 has been <b>paid</b>, please check your BRIMO application, Thankyou</p>',
    date: "Today",
    status: "paid",
    isRead: false,
  },
  {
    title: "Reimbursement",
    description:
      '<p>Your submission "description" has been <b>rejected</b>, please click for details.</p>',
    date: "Yesterday",
    status: "rejected",
    isRead: true,
  },
  {
    title: "Reimbursement",
    description:
      "<p>Your submission will be <b>processed</b> according to the reimbursement schedule. Please wait</p>",
    date: "2022-10-06",
    status: "processing",
    isRead: false,
  },
  {
    title: "Sickness",
    description:
      "<p>Your submission has been <b>approved</b> by the Superior.</p>",
    date: "2022-10-05",
    status: "approved",
    isRead: false,
  },
  {
    title: "Sickness",
    description:
      "<p>Your submission has been <b>rejected</b>, please confirm with your Superior.</p>",
    date: "2022-10-05",
    status: "rejected",
    isRead: true,
  },
  {
    title: "Sickness",
    description:
      "<p>Your submission is being <b>reviewed</b> by the Superior for the approval process, please wait.</p>",
    date: "2022-10-05",
    status: "reviewing",
    isRead: true,
  },
  {
    title: "Overtime",
    description:
      "<p>Your submission has been <b>approved</b> by the Superior.</p>",
    date: "2022-10-05",
    status: "approved",
    isRead: false,
  },
  {
    title: "Overtime",
    description:
      "<p>Your submission has been <b>rejected</b>, please confirm with your Superior.</p>",
    date: "2022-10-05",
    status: "rejected",
    isRead: true,
  },
  {
    title: "Overtime",
    description:
      "<p>Your submission is being <b>reviewed</b> by the Superior for the approval process, please wait.</p>",
    date: "2022-10-05",
    status: "reviewing",
    isRead: true,
  },
];
const Notification = () => (
  <div className="bg-gray-100 min-h-screen">
    <NotificationHeader />
    <div className="py-4">
      {notifications.map(({ ...item }, index) => (
        <NotificationItem key={index} {...item} />
      ))}
    </div>
  </div>
);

export default Notification;
