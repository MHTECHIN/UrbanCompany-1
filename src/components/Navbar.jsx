import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  MapPin,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isLocationPopupOpen, setIsLocationPopupOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(
    "Connaught Place, New ..."
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenLocationPopup = () => setIsLocationPopupOpen(true);
  const handleCloseLocationPopup = () => setIsLocationPopupOpen(false);

  const handleUseCurrentLocation = () => {
    // In a real implementation, you would use the Geolocation API here
    console.log("Using current location");
    setSelectedLocation("Current Location");
    handleCloseLocationPopup();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real implementation, you would integrate with Google Places API here
    console.log("Searching for:", searchQuery);
    setSelectedLocation(searchQuery);
    handleCloseLocationPopup();
  };

  return (
    <header className="border-b sticky top-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <img
            src="/logo.webp"
            alt="Urban Company Logo"
            width={100}
            height={100}
          />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Beauty
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Homes
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Native
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleOpenLocationPopup}
            className="hidden md:flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
            <MapPin size={16} />
            <span>{selectedLocation}</span>
            <ChevronDown size={16} />
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for" //typing effect need to add
              className="pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <ShoppingCart className="text-gray-600" size={24} />
          <User className="text-gray-600" size={24} />
        </div>
      </div>

      {isLocationPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Select Location</h2>
              <button
                onClick={handleCloseLocationPopup}
                className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="flex items-center border rounded-md">
                  <MapPin className="text-gray-400 ml-2" size={20} />
                  <input
                    type="text"
                    placeholder="Search for your location/society/apartment"
                    className="w-full p-2 outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
              <button
                onClick={handleUseCurrentLocation}
                className="flex items-center text-indigo-600 hover:text-indigo-800">
                <MapPin className="mr-2" size={20} />
                Use current location
              </button>
            </div>
            <div className="p-4 border-t text-center text-sm text-gray-500">
              {/*  */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
