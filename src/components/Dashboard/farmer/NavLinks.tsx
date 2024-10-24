"use client"

import List from "@/components/shared/List";

// import { List } from "@material-tailwind/react";
// import { FaBookmark } from "react-icons/fa";
// import { FaPen } from "react-icons/fa6";
// import { IoDocument } from "react-icons/io5";
// import List from "../../../Shared/List/List";

const NavLinks = () => {
  return (
    <>
      <List label="List Products" address="/dashboard/list-products" />
      <List label=" Receive Orders " address="/dashboard/receive-orders" />
      <List label="Manage Products" address="/dashboard/manage-products" />
    </>
  );
};

export default NavLinks;
