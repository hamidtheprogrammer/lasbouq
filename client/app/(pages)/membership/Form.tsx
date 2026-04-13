"use client";
import React from "react";
import { useEffect, useState } from "react";
import { styles } from "@/app/UI/components/Button";

const Form = () => {
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

  if (formSubmited)
    return (
      <p data-testid="form-submitted" className="max-sm:text-xl max-md:text-2xl max-md:mb-30 text-3xl text-center">
        You have submitted the form.
      </p>
    );

  return (
    <form
      data-testid="form"
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
            id="firstName"
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
            id="lastName"
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
          id="email"
          type="email"
          name="email"
          className="w-full px-2 outline-0 text-sm h-10 border border-foreground/50 rounded-md"
          onChange={(e) => handleFormDataChange("email", e)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="info" className="text-sm">
          Describe yourself and your interest (budget, location, etc.)
        </label>
        <textarea
          id="info"
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
  );
};

export default Form;
