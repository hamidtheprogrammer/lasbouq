import Image from "next/image";
import Nav from "./UI/components/Navbar";

export default function Home() {
  return (
    <section className="size-full relative flex flex-col">
      <Nav />
      <Image
        id="hero"
        className="size-full object-cover absolute"
        fill
        alt="background image"
        loading="eager"
        fetchPriority="high"
        src={"/hero.png"}
      />
      <div className="size-full absolute bg-black/85 inset-0"></div>
      <div className="relative text-background w-full flex-1 p-5">
        <p className="absolute right-5 w-[20rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem esse
          veniam totam libero temporibus consectetur facilis quisquam iure fuga
          ad reiciendis quis ullam, voluptas eaque neque animi asperiores. Ea,
          cumque.
        </p>
        <h1 className="absolute bottom-5 font-italiana font-bold text-[8.8rem] leading-[8.5rem] capitalize text-balance w-[60rem]">
          Home of creative minds
        </h1>
        
      </div>
    </section>
  );
}
