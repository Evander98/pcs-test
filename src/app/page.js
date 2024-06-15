import { Activity } from "@/components/Activity";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { News } from "@/components/News";
import { Online } from "@/components/Online";
import { TabBar } from "@/components/TabBar";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="">
        <Header />
        <Banner />
        <Activity />
        <News />
        <Online />
      </div>
      <div className="relative">
        <TabBar />
      </div>
    </main>
  );
}
