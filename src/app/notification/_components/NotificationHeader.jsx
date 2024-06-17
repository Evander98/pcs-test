import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const NotificationHeader = () => (
  <div className="sticky z-20 top-0 bg-white p-4 shadow-md flex items-center">
    <Link href="/">
      <FaArrowLeft className="" />
    </Link>
    <h1 className="ml-4 text-xl font-bold text-red-500">Notification</h1>
  </div>
);
