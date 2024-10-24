"use client";
import Sidebar from "@/components/Dashboard/Sidebar";
import React from "react";

const layout =
  () =>
  ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return (
      <div className="grid grid-cols-1  lg:grid-cols-8 mx-auto max-w-7xl">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>
        <div className="lg:col-span-6 space-y-20 ml-10 mt-10 ">{children}</div>
      </div>
    );
  };

export default layout;
