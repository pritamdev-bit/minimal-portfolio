import Communication from "@/components/Communication";
import Projects from "@/components/Projects";
import Summary from "@/components/Summary";

export default function Home() {
  return (
    <main className="flex flex-col md:w-[775px] w-full mx-auto p-4">
      <Summary />
      <Communication />
      <Projects />
    </main>
  );
}
