"use client"
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bmufqwa",
        "template_zv8x88g",
        form.current,
        "D8rDIkKl7gptQMW5Z"
      )
      .then(
        () => {
          toast.success("Successfully Sent Message");
          e.target.reset();
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };
  return (
        <div className="bg-gray-300 py-12 px-10 my-6 rounded-lg">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name<span className="text-red-600">*</span></label>
            <input
              type="text"
              className="w-full px-4 py-3 mb-4 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="to_name"
            />
            <label>Email<span className="text-red-600">*</span></label>
            <input
              type="email"
              className="w-full px-4 py-3 mb-4 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
              name="from_name"
            />
            <label>Message<span className="text-red-600">*</span></label>
            <textarea
              name="message"
              className="block rounded-md mb-4 focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
            />
            <input
              type="submit"
              className="cursor-pointer w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
              value="Send"
            />
          </form>
          <Toaster></Toaster>
        </div>
  );
};

export default ContactUs;