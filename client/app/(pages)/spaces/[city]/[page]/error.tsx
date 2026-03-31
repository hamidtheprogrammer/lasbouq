"use client";

import Footer from "@/app/(pages)/home/Footer";
import Nav from "@/app/UI/components/Navbar";
import SpaceFetchFail from "@/app/UI/components/SpaceFetchFail";

export default function Error() {
  return (
    <div>
      <div className="bg-foreground m-3 mb-10 rounded-lg">
        <Nav />
      </div>
      <SpaceFetchFail/>
      <Footer/>
    </div>
  );
}