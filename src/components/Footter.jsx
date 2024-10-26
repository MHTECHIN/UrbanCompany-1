import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 text-gray-700 bg-gray-100">
      <div className="container max-w-screen-xl mx-auto px-11 ">
        <div className="flex justify-center mt-5 mb-10 sm:justify-start">
          <img
            src="/footter/icon.webp"
            alt="Company Logo"
            className="w-24 mb-4 sm:w-30"
          />
        </div>
        <div className="flex flex-wrap justify-between gap-8">
          {/* Company Section */}
          <div className="w-fit">
            <h3 className="text-lg font-semibold text-black sm:text-xl">
              Company
            </h3>
            <ul className="flex flex-col gap-2 mt-2">
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Anti-discrimination policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  UC impact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* For Customers Section */}
          <div className="w-fit">
            <h3 className="text-lg font-semibold text-black sm:text-xl">
              For customers
            </h3>
            <ul className="flex flex-col gap-2 mt-2">
              <li>
                <a href="#" className="hover:underline">
                  UC reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Categories near you
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* For Partners Section */}
          <div className="w-fit">
            <h3 className="text-lg font-semibold text-black sm:text-xl">
              For partners
            </h3>
            <ul className="flex flex-col gap-2 mt-2">
              <li>
                <a href="#" className="hover:underline">
                  Register as a professional
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media and App Buttons Section */}
          <div className="w-auto max-sm:w-full">
            <h3 className="text-lg font-semibold sm:text-xl">Follow Us</h3>
            <div className="flex mt-2 space-x-4">
              <a href="#" className="text-gray-600 hover:text-black">
                <div className="w-fit p-2 rounded-full border-solid border-2 border-[#e3e3e3] bg-white">
                  <img
                    src="/footter/twitter.svg"
                    alt="Twitter"
                    className="w-5 h-5"
                  />
                </div>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <div className="w-fit p-2 rounded-full border-solid border-2 border-[#e3e3e3] bg-white">
                  <img
                    src="/footter/facebook.svg"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                </div>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <div className="w-fit p-2 rounded-full border-solid border-2 border-[#e3e3e3] bg-white">
                  <img
                    src="/footter/instagram.svg"
                    alt="Instagram"
                    className="w-6 h-6"
                  />
                </div>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <div className="w-fit p-2 rounded-full border-solid border-2 border-[#e3e3e3] bg-white">
                  <img
                    src="/footter/linkedin.svg"
                    alt="LinkedIn"
                    className="w-6 h-6"
                  />
                </div>
              </a>
            </div>

            {/* App Store and Google Play Buttons in Column */}
            <div className="flex flex-col mt-4 space-y-2">
              <button className="px-4 py-2 rounded-md">
                <img
                  src="/footter/app-store.webp"
                  alt="App Store"
                  className="w-28"
                />
              </button>
              <button className="px-4 py-2 rounded-md">
                <img
                  src="/footter/googleplay.webp"
                  alt="Google Play"
                  className="w-28"
                />
              </button>
            </div>
          </div>
        </div>

        <hr className="border-[#ececec] border-solid border-t-2 mt-6"></hr>

        {/* Footer Bottom */}
        <div className="mt-8 text-sm text-center text-gray-500">
          &copy; 2024 Urban Company. All rights reserved. | CIN:
          U74140DL2014PTC274413
        </div>
      </div>
    </footer>
  );
};

export default Footer;
