import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="mt-5 mb-10">
          <img
            src="/footter/icon.webp"
            alt="Company Logo"
            className="w-30 mb-4"
          />
        </div>
        <div className="flex justify-between">
          {/* Company Section */}
          <div>
            <h3 className="text-black font-semibold text-xl">Company</h3>
            <ul className="mt-2 flex flex-col gap-2">
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
          <div>
            <h3 className="text-black font-semibold text-xl">For customers</h3>
            <ul className="mt-2 flex flex-col gap-2">
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
          <div>
            <h3 className="text-black font-semibold text-xl">For partners</h3>
            <ul className="mt-2 flex flex-col gap-2">
              <li>
                <a href="#" className="hover:underline">
                  Register as a professional
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg">Social links</h3>
            <div className="flex space-x-4 mt-2">
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

            {/* App Store and Google Play Buttons */}
            <div className="mt-4 flex flex-col space-y-2">
              <button className="py-2 px-4 rounded-md">
                <img
                  src="/footter/app-store.webp"
                  alt="App Store"
                  className="w-28"
                />
              </button>
              <button className="py-2 px-4 rounded-md">
                <img
                  src="/footter/googleplay.webp"
                  alt="Google Play"
                  className="w-28"
                />
              </button>
            </div>
          </div>
        </div>

        <hr className="border-[#ececec] border-solid border-t-2 mt-6 border-[0px]"></hr>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; 2024 Urban Company. All rights reserved. | CIN:
          U74140DL2014PTC274413
        </div>
      </div>
    </footer>
  );
};

export default Footer;
