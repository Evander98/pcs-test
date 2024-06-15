import Link from "next/link";
import { GoBell } from "react-icons/go";
export const Header = () => {
  return (
    <div className="flex justify-between items-center h-14 px-5">
      <p className="text-[#F82D18] font-black text-xl">KerjaYuk!</p>
      <Link href="/notification">
        <GoBell />
      </Link>
    </div>
  );
};
