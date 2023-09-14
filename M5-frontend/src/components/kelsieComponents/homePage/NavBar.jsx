import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import logo from "../../../images/metroLogo.png";

const Navbar = () => {
  const [isPropertyManagementOpen, setPropertyManagementOpen] = useState(false);
  const [isPropertyOwnerOpen, setPropertyOwnerOpen] = useState(false);
  const [isTenantsOpen, setTenantsOpen] = useState(false);

  const handlePropertyManagementHover = () => {
    setPropertyManagementOpen(true);
  };

  const handlePropertyManagementLeave = () => {
    setPropertyManagementOpen(false);
  };

  const handlePropertyOwnerHover = () => {
    setPropertyOwnerOpen(true);
  };

  const handlePropertyOwnerLeave = () => {
    setPropertyOwnerOpen(false);
  };

  const handleTenantsHover = () => {
    setTenantsOpen(true);
  };

  const handleTenantsLeave = () => {
    setTenantsOpen(false);
  };

  return (
    <nav className="bg-white h-16 px-6 flex items-center justify-between shadow-lg">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12" />
      </div>
      <div className="flex space-x-8">
        {/* Property Management Dropdown */}
        <div
          className="relative group"
          onMouseEnter={handlePropertyManagementHover}
          onMouseLeave={handlePropertyManagementLeave}
        >
          <span className="text-black hover:text-blue-500 cursor-pointer group-hover:text-blue-500">
            Property Management
          </span>
          <div
            className={`absolute ${
              isPropertyManagementOpen ? "block" : "hidden"
            } mt-2 space-y-2`}
            onMouseEnter={handlePropertyManagementHover}
            onMouseLeave={handlePropertyManagementLeave}
          >
            <Link
              to="/property-management/building"
              className="text-black hover:text-blue-500 block"
            >
              Building Management
            </Link>
            <Link
              to="/property-management/body-corp"
              className="text-black hover:text-blue-500 block"
            >
              Body Corp Management
            </Link>
            <Link
              to="/property-management/rental"
              className="text-black hover:text-blue-500 block"
            >
              Rental Property Management
            </Link>
          </div>
        </div>

        {/* Property Owners Dropdown */}
        <div
          className="relative group"
          onMouseEnter={handlePropertyOwnerHover}
          onMouseLeave={handlePropertyOwnerLeave}
        >
          <span className="text-black hover:text-blue-500 cursor-pointer group-hover:text-blue-500">
            Property Owners
          </span>
          <div
            className={`absolute ${
              isPropertyOwnerOpen ? "block" : "hidden"
            } mt-2 space-y-2`}
            onMouseEnter={handlePropertyOwnerHover}
            onMouseLeave={handlePropertyOwnerLeave}
          >
            <Link
              to="/property-owners/investment"
              className="text-black hover:text-blue-500 block"
            >
              Property Investment
            </Link>
            <Link
              to="/property-owners/body-corp-admin"
              className="text-black hover:text-blue-500 block"
            >
              Body Corporate Admin
            </Link>
            <Link
              to="/property-owners/renovation"
              className="text-black hover:text-blue-500 block"
            >
              Renovation Support
            </Link>
            <Link
              to="/property-owners/tenanted-sales"
              className="text-black hover:text-blue-500 block"
            >
              Tenanted Property Sales
            </Link>
          </div>
        </div>

        {/* Tenants Dropdown */}
        <div
          className="relative group"
          onMouseEnter={handleTenantsHover}
          onMouseLeave={handleTenantsLeave}
        >
          <span className="text-black hover:text-blue-500 cursor-pointer group-hover:text-blue-500">
            Tenants
          </span>
          <div
            className={`absolute ${
              isTenantsOpen ? "block" : "hidden"
            } mt-2 space-y-2`}
            onMouseEnter={handleTenantsHover}
            onMouseLeave={handleTenantsLeave}
          >
            <Link
              to="/tenants/listings"
              className="text-black hover:text-blue-500 block"
            >
              Property Listings
            </Link>
            <a href="#" className="text-black hover:text-blue-500 block">
              Steps Into Tenancy
            </a>
            <a href="#" className="text-black hover:text-blue-500 block">
              Contact Property Manager
            </a>
            <a href="#" className="text-black hover:text-blue-500 block">
              Disputes Process
            </a>
          </div>
        </div>

        {/* Listings */}
        <Link
          to="/listings"
          className="text-black hover:text-blue-500 cursor-pointer"
        >
          Listings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
