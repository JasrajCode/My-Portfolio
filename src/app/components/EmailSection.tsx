"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/public/github-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";

interface FormData {
  email: string;
  subject: string;
  message: string;
}

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: FormData = {
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();

      if (response.ok) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* Circle */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      <div className="z-55">
        <h5 className="text-7xl lg:text-9xl md:text-7xl sm:text-6xl font-bold text-white my-2">
          Contact
        </h5>

        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m open to exploring new opportunities. Whether you have a question
          or just want to say hello, feel free to reach out. I&apos;ll do my best to
          respond as soon as possible!
        </p>

        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/JasrajCode?tab=repositories" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>

          <Link href="https://www.linkedin.com/in/jasraj-gosal-635393243/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>

      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>

              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder=""
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>

              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder=""
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>

              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder=""
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
