import Image from "next/image";
import Nav from "./UI/components/Navbar";
import Hero from "./(pages)/home/Hero";

export default function Home() {
  return (
    <div className="size-full">
      <Hero/>
    </div>
  );
}
