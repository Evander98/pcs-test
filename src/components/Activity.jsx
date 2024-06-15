import { LuClock6, LuClock9 } from "react-icons/lu";
import { GrRotateRight } from "react-icons/gr";
export const Activity = () => {
  return (
    <div className="px-5 mt-5">
      <p className="font-bold">Today's activity</p>
      <div className="grid grid-cols-[repeat(3,1fr)] py-1">
        <div className="flex flex-col items-center">
          <LuClock9 size={22} className="text-red-500" />
          <p className="font-bold">08:30</p>
          <p className="text-xs">Check In</p>
        </div>
        <div className="flex flex-col items-center">
          <GrRotateRight size={22} className="text-red-500" />
          <p className="font-bold text-red-500">03:00:00</p>
          <p className="text-xs">Working Hours</p>
        </div>
        <div className="flex flex-col items-center">
          <LuClock6 size={22} className="text-red-500" />
          <p className="font-bold">--:--</p>
          <p className="text-xs">Check Out</p>
        </div>
      </div>
    </div>
  );
};
