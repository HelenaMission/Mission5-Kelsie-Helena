import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/homePage/metroLogo.png";

const Navbar = () => {
  const [isPropertyManagementOpen, setPropertyManagementOpen] = useState(false);
  const [isPropertyOwnerOpen, setPropertyOwnerOpen] = useState(false);
  const [isTenantsOpen, setTenantsOpen] = useState(false);

  const handlePropertyManagementHover = () => {
    setPropertyManagementOpen(true);
    setPropertyOwnerOpen(false);
    setTenantsOpen(false);
  };

  const handlePropertyOwnerHover = () => {
    setPropertyOwnerOpen(true);
    setPropertyManagementOpen(false);
    setTenantsOpen(false);
  };

  const handleTenantsHover = () => {
    setTenantsOpen(true);
    setPropertyManagementOpen(false);
    setPropertyOwnerOpen(false);
  };

  const handleCloseDropdowns = () => {
    setPropertyManagementOpen(false);
    setPropertyOwnerOpen(false);
    setTenantsOpen(false);
  };

  return (
    <nav className="bg-white h-16 px-6 flex items-center justify-between shadow-lg relative z-10">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12" />
      </div>
      <div className="flex space-x-8 relative z-10">
        {/* Property Management Dropdown */}
        <div
          className="relative group"
          onMouseEnter={handlePropertyManagementHover}
          onMouseLeave={handleCloseDropdowns}
        >
          <span className="text-black hover:text-blue-500 cursor-pointer group-hover:text-blue-500 px-5">
            Property Management
          </span>
          <div
            className={`menu-dropdown absolute z-20 ${
              isPropertyManagementOpen ? "block" : "hidden"
            } bg-white w-64`}
          >
            <Link
              to="/property-management/building"
              className="menu-link block hover:bg-indigo-300 p-4"
            >
              Building Management
            </Link>
            <Link
              to="/property-management/body-corp"
              className="menu-link block hover:bg-indigo-300 p-4"
            >
              Body Corp Management
            </Link>
            <Link
              to="/property-management/rental"
              className="menu-link block hover:bg-indigo-300 p-4"
            >
              Rental Property Management
            </Link>
          </div>
        </div>
        {/* Property Owners Dropdown */}
        <div
          className="relative group"
          onMouseEnter={handlePropertyOwnerHover}
          onMouseLeave={handleCloseDropdowns}
        >
          <span className="text-black hover:text-blue-500 cursor-pointer group-hover:text-blue-500 px-5">
            Property Owners
          </span>
          <div
            className={`menu-dropdown absolute z-20 ${
              isPropertyOwnerOpen ? "block" : "hidden"
            } bg-white w-64`}
          >
            <Link
              to="/property-owners/investment"
              className="menu-link block hover:bg-indigo-300 p-4"
            >
              Property Investment
            </Link>
            <Link
              to="/property-owners/body-corp-admin"
              className="menu-link block hover:bg-indigo-300 p-4"
            >
              Body Corporate Admin
            </Link>
            <Link
              to="/property-owners/renovation"
              className="menu-link block hover:bg-indigo-300 p-4"
            >
              Renovation Support
            </Link>
            <Link
              to="/property-owners/tenanted-sales"
              className="menu-link block hover:bg-indigo-300 p-4"
            >
              Tenanted Property Sales
            </Link>
          </div>
        </div>
        {/* Tenants Dropdown */}
        <div
          className="relative group"
          onMouseEnter={handleTenantsHover}
          onMouseLeave={handleCloseDropdowns}
        >
          <span className="text-black hover:text-blue-500 cursor-pointer group-hover:text-blue-500 px-5">
            Tenants
          </span>
          <div
            className={`menu-dropdown absolute z-20 ${
              isTenantsOpen ? "block" : "hidden"
            } bg-white w-64`}
          >
            <Link
              to="/tenants/listings"
              className="menu-link block hover:bg-indigo-300 p-4"
            >
              Property Listings
            </Link>
            <Link
              to="/tenants/steps-into-tenancy"
              className="menu-link block hover:bg-indigo-300 p-4"
            >
              Steps Into Tenancy
            </Link>
            <Link
              to="/tenants/contact-property-manager"
              className="menu-link block hover:bg-indigo-300 p-4"
            >
              Contact Property Manager
            </Link>
            <Link
              to="/tenants/disputes-process"
              className="menu-link block hover:bg-indigo-300 p-4"
            >
              Disputes Process
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <Link
          to="/listings"
          className="text-black hover:text-blue-500 pl-5 pr-10"
        >
          Listings
        </Link>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
