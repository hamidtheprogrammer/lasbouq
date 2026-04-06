"use client";
import { styles } from "@/app/UI/components/Button";
import Footer from "../home/Footer";
import Nav from "@/app/UI/components/Navbar";
import Image from "next/image";
import { useEffect, useState } from "react";

const page = () => {
  const [formData, setFormData] = useState<{
    firstName: string;
    lastName: string;
    email: string;
    info: string;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    info: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [formSubmited, setFormSubmited] = useState<boolean>(false);

  function handleFormDataChange(
    type: string,
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    let newFormData = { ...formData };
    setError(null);
    switch (type) {
      case "firstName":
        newFormData.firstName = e.target.value;
        break;
      case "lastName":
        newFormData.lastName = e.target.value;
        break;
      case "email":
        newFormData.email = e.target.value;
        break;
      case "info":
        newFormData.info = e.target.value;
        break;
      default:
        break;
    }

    setFormData(newFormData);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (formData.firstName.split("").length < 1) {
      setError("Invalid first name");
      return;
    }
    if (formData.lastName.split("").length < 1) {
      setError("Invalid last name");
      return;
    }
    // if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    //   setError("Invalid email");
    //   return;
    // }
    if (formData.info.split(" ").length < 1) {
      setError("Please enter at least 8 words in description");
      return;
    }

    localStorage.setItem("formSubmited", "true");
    setFormSubmited(true);
  }

  useEffect(() => {
    setFormSubmited(Boolean(localStorage.getItem("formSubmitted")));
  }, []);

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
          {formSubmited ? (
            <div className="max-sm:text-2xl max-md:text-3xl max-md:mb-30 text-4xl text-center">
              You have submitted the form.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
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
                    onChange={(e) => handleFormDataChange("firstName", e)}
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
                    onChange={(e) => handleFormDataChange("lastName", e)}
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
                  onChange={(e) => handleFormDataChange("email", e)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm">
                  Describe yourself and your interest (budget, location, etc.)
                </label>
                <textarea
                  name="info"
                  className="w-full p-2 outline-0 text-sm h-30 border border-foreground/50 rounded-md"
                  onChange={(e) => handleFormDataChange("info", e)}
                />
              </div>
              <div className="relative">
                {error && (
                  <p className="text-sm text-red-700 font-poppins text-center font-bold absolute -translate-y-[calc(100%+4px)] left-1/2 -translate-x-1/2">
                    {error}
                  </p>
                )}
                <button
                  className={`group relative w-full ${styles} cursor-pointer bg-[#A37A4B] before:bg-black`}
                  type="submit"
                >
                  <p
                    test-id="story-btn"
                    className={`relative text-white transition-colors duration-500`}
                  >
                    Submit
                  </p>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
