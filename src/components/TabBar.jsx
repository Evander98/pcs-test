import {
  FaHome,
  FaCalendarCheck,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
const tabs = [
  { name: "Home", icon: FaHome, active: true },
  { name: "Attendance", icon: FaCalendarCheck, active: false },
  { name: "Check Out", icon: FaSignOutAlt, active: false, isCenter: true },
  { name: "Form", icon: FaFileAlt, active: false },
  { name: "Setting", icon: FaCog, active: false },
];

const Tab = ({ name, Icon, active, isCenter }) => (
  <div
    className={`flex flex-col items-center ${isCenter ? "relative z-10" : ""}`}
  >
    <div
      className={`p-2 ${
        isCenter
          ? "bg-red-500 rounded-full w-16 h-16 flex items-center justify-center text-white mb-2"
          : "text-gray-500"
      } ${active ? "text-red-500" : ""}`}
    >
      <Icon className={active && "text-red-500"} size={isCenter ? 32 : 24} />
    </div>
    <span className={`text-xs  ${active ? "text-red-500" : "text-gray-500"}`}>
      {name}
    </span>
  </div>
);

export const TabBar = () => (
  <div className="sticky bottom-0 left-0 right-0 bg-white shadow-inner flex justify-around items-end py-1 h-16">
    {tabs.map((tab, index) => (
      <Tab
        key={index}
        name={tab.name}
        Icon={tab.icon}
        active={tab.active}
        isCenter={tab.isCenter}
      />
    ))}
  </div>
);
