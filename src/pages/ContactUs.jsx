import React from "react";
import Title from "../components/Title/Title";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const ContactUs = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//   };

  return (
    <div
      className="flex items-center justify-center"
      id="contact"
    >
      <div className="py-10 w-full">
        <div className="max-w-5xl mx-5 lg:mx-auto md:mx-5">
          <Title title={"Contact Us"} shadowColor="rgba(0,0,0,0.3)" />
          <div className="mt-16">
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-x-4">
              <div className="bg-white rounded-lg p-6 md:flex-1">
                <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
                <form
                  //   onSubmit={handleSubmit}
                  action="https://formspree.io/f/mbjnndne"
                  method="POST"
                >
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-600 font-semibold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-600 font-semibold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-gray-600 font-semibold mb-2"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      placeholder="Your Mobile Number"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-gray-600 font-semibold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Your Message"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="bg-white rounded-lg p-6 md:flex-1">
                <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
                <div className="mt-8 flex flex-row">
                  <a
                    href="https://github.com/sathyasivamloganathan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4"
                  >
                    <FaGithub className="mr-1 text-[40px] text-[#414c5c] hover:text-gray-900" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sathya-sivam-loganathan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4"
                  >
                    <FaLinkedin className="mr-1 text-[40px] text-[#414c5c] hover:text-gray-900" />
                  </a>
                  <a
                    href="mailto:sathyasivamloganathan@gmail.com"
                    className="mr-4"
                  >
                    <IoMdMail className="mr-1 text-[40px] text-[#414c5c] hover:text-gray-900" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
