import About from "./(pages)/home/About";
import Hero from "./(pages)/home/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Lasbouq",
  description: "Find a home for your team"
}

export default function Home() {
  return (
    <div className="size-full">
      <Hero/>
      <About/>
    </div>
  );
}
