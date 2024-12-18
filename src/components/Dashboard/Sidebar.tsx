"use client"

// import List from "../../Shared/List/List";
import { FaBookOpen, FaHome } from "react-icons/fa";
// import NavLinks from "../Student/NavLinks/NavLinks";
// import { Link } from "react-router-dom";
// import logo from "/logo.png";
import logo from "../../../public/logo.png"

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Collapse, IconButton } from "@material-tailwind/react";
// import TutorNavLinks from "../Tutor/NavLinks/NavLinks";
// import AdminNavLinks from "../Admin/NavLinks/NavLinks";
// import useRole from "../../../hooks/useRole";
// import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
// import useAuth from "../../../hooks/useAuth";
// import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./Farmer/NavLinks";
import List from "../shared/List";
import BusinessNavLink from "./Business/BusinessNavLink";
import AdminNavLink from "./Admin/AdminNavLink";

export const SideBarItem = () => {
//   const { user, logOut } = useAuth();

//   const { role, isLoading } = useRole();
const role = "admin";
//   const handleLogOut = async () => {
//     try {
//       await logOut();
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   if (isLoading) return <LoadingSpinner />;

  return (
    <div className="flex flex-col justify-between   p-3  lg:min-h-screen bg-primary items-center">
      <div className="space-y-3">
        {/* <Link
          href={"/"}
          className="flex items-center justify-center gap-1  pb-3 border-b-2 text-gray-900"
        >
          <Image className="w-12 rounded-full " src={logo} alt="" />
          <span className="mt-3 font-extrabold text-xl">LearnEnglish</span>
        </Link> */}
        <Link href={"/"} className="text-xl font-bold flex items-center gap-2">
          <Image
            className="rounded-full border-2 border-secondary"
            src={logo}
            width={50}
            height={50}
            alt="Logo"
          />
          <span>AgriMarketBD</span>
        </Link>
        {/*  */}
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <List label="Home" address="/" />
            <List
              label="View All Products"
              address="/dashboard"
              // icon={FaBookOpen}
              // icon={""}
            />

            {/* {role === "farmer" && <NavLinks />} */}
            {/* {role === "business" && <BusinessNavLink />} */}
            {role === "admin" && <AdminNavLink />}
            {/*
            {role === "admin" && <AdminNavLinks />} */}
          </ul>
        </div>
      </div>
      {/* <div></div> */}
      <div>
        {/* <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
          <img
            src={user?.photoURL}
            alt=""
            className="w-12 h-12 rounded-lg dark:bg-gray-500"
          />
          <div>
            <h2 className="text-lg font-semibold">{user?.displayName}</h2>
            <span className="flex items-center space-x-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline dark:text-gray-600"
              >
                View profile
              </a>
            </span>
          </div>
        </div> */}
        {/* llllllllllllllllll */}
        {/* <div onClick={() => handleLogOut()} className="rounded-sm">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex items-center p-2 space-x-3 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current dark:text-gray-600"
            >
              <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
              <rect width="32" height="64" x="256" y="232"></rect>
            </svg>
            <span>Logout</span>
          </a>
        </div> */}
        {/* llllllllllllllllll */}
      </div>
      {/* <div></div> */}
    </div>
  );
};

const Sidebar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="">
      <div className="hidden lg:block">
        <SideBarItem />
      </div>

      <IconButton
        variant="text"
        color="blue-gray"
        className="lg:hidden ml-12"
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <XMarkIcon className="h-6 w-6 " strokeWidth={2} />
        ) : (
          <Bars3Icon className="h-6 w-6" strokeWidth={2} />
        )}
      </IconButton>

      <Collapse open={openNav}>
        <SideBarItem />
      </Collapse>
    </div>
  );
};

export default Sidebar;
