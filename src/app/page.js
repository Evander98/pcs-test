import { Activity } from "@/components/Activity";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { News } from "@/components/News";
import { Online } from "@/components/Online";
import { TabBar } from "@/components/TabBar";

export default function Home() {
  return (
    <main className="flex flex-col border min-h-screen">
      <div className="flex-1">
        <Header />
        <Banner />
        <Activity />
        <News />
        <Online />
      </div>
      <TabBar />
    </main>
  );
}
