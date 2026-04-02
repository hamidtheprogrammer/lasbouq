import Nav from "@/app/UI/components/Navbar";
import React from "react";
import MembershipCTA from "../home/MembershipCTA";
import Footer from "../home/Footer";
import About from "../home/About";
import RUMInit from "@/app/UI/components/RUMinit";

const page = () => {
  return (
    <div className="size-full">
      <div className="bg-foreground m-3 mb-10 rounded-lg">
        <Nav />
      </div>
      <About />
      <div className="flex justify-end max-sm:mt-12 max-sm:mb-8 mt-30 mb-20 p-5">
        <p className="md:max-w-[40rem] text-right">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          laboriosam eius voluptate dolore nobis nam temporibus ipsa, enim saepe
          aut maiores veniam itaque voluptatibus repellat rem facere deleniti ut
          ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          minus reiciendis ad maxime voluptatibus unde dolor saepe itaque
          recusandae, doloremque error laborum qui blanditiis dolore aliquam
          modi necessitatibus optio molestias! Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Recusandae, doloremque quia! Neque,
          minus unde nihil qui repellat omnis iusto veniam vitae reprehenderit
          delectus. Ratione accusamus quasi iste? Rem, voluptatibus veniam?
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
