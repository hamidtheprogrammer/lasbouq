import React from "react";
import MembershipCTA from "../home/MembershipCTA";
import Footer from "../home/Footer";
import Nav from "@/app/UI/components/Navbar";
import SpaceFetchFail from "@/app/UI/components/SpaceFetchFail";

const page = () => {
  return (
    <div className="size-full">
      <div className="bg-foreground m-3 mb-10 rounded-lg">
        <Nav />
      </div>
      <SpaceFetchFail />
      <Footer />
    </div>
  );
};

export default page;
