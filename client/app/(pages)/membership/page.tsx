import Footer from "../home/Footer";
import Nav from "@/app/UI/components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <div className="size-full">
      <div className="bg-foreground m-3 mb-10 rounded-lg">
        <Nav />
      </div>
      <section className="w-full flex gap-5 p-3 max-md:flex-col text-foreground">
        <Image
          width={400}
          height={400}
          loading="eager"
          fetchPriority="high"
          alt="image"
          src={"/about-image-1.png"}
          className="md:sticky md:self-start md:top-3 rounded-lg object-cover md:w-1/3 md:h-[calc(100dvh-1.75rem)] max-md:w-full h-70"
        />
        <div className="flex-1 flex flex-col items-center">
          <section className="uppercase text-center flex flex-col items-center justify-center w-full max-sm:space-y-3 space-y-6 aspect-[16/7] max-md:aspect-[12/6] min-h-[20rem]">
            <p className="text-xs tracking-[0.5rem]">lasbouq</p>
            <div className="">
              <h1 className="max-sm:text-4xl max-md:text-5xl text-7xl">
                Apply NOW FOR
              </h1>
              <h2 className="max-sm:text-5xl max-md:text-6xl text-8xl font-italiana">
                MEMBERSHIP
              </h2>
            </div>
            <p className="max-sm:text-sm max-w-[25rem]">
              We craft a unique blend of style and functionality, made for
              working.
            </p>
          </section>
          <form
            action=""
            method="post"
            className="w-full max-w-[35rem] space-y-8"
          >
            <div className="flex gap-3">
              <div className="flex flex-col gap-1 flex-1">
                <label htmlFor="firstName" className="text-sm">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full px-2 outline-0 text-sm h-10 border border-foreground/50 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label htmlFor="lastName" className="text-sm">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full px-2 outline-0 text-sm h-10 border border-foreground/50 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="w-full px-2 outline-0 text-sm h-10 border border-foreground/50 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm">
                Let us know about yourself and your interest
              </label>
              <input
                type="textarea"
                name="info"
                className="w-full px-2 outline-0 text-sm h-30 border border-foreground/50 rounded-md"
              />
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
