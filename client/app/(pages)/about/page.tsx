import Nav from "@/app/UI/components/Navbar";
import MembershipCTA from "../home/MembershipCTA";
import Footer from "../home/Footer";
import About from "../home/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Lasbouq",
  description: "About us",
};

const page = () => {
  return (
    <div className="size-full">
      <div className="bg-foreground m-3 mb-10 rounded-lg">
        <Nav />
      </div>
      <About />
      <div className="flex justify-end max-sm:mt-12 max-sm:mb-8 mt-30 mb-20 p-5">
        <p className="md:max-w-[40rem] text-right">
          Lasbouq began with a simple idea — that the way we work and live
          should not be separated by rigid boundaries. Too often, spaces are
          designed for a single purpose, forcing people to move between
          environments that don’t truly support how they think, create, or
          recharge. We brought these experiences together into one cohesive
          system, where work, wellness, and community exist side by side in
          balance. Today, Lasbouq is a growing network of thoughtfully designed
          spaces built around flexibility and intention. From focused work areas
          to fully equipped gyms and curated events, every element is crafted to
          support the rhythm of modern life—helping individuals and teams do
          their best work, stay balanced, and feel part of something bigger than
          their daily routine.
        </p>
      </div>
      <h1 className="text-9xl font-italiana max-sm:text-5xl">LASBOUQ</h1>
      <hr className="max-sm:mb-10" />
      <MembershipCTA />
      <Footer />
    </div>
  );
};

export default page;
