"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// Define prop types with TypeScript interface
interface ListProps {
  label: string;
  address: string;
}

const List: React.FC<ListProps> = ({ label, address }) => {
    const pathName = usePathname();
  return (
    <li className="rounded-sm">
      <Link
        href={address}
        // end
        className={`flex items-center p-2 space-x-3 font-bold text-gray-900 rounded-md ${pathName===address ? "rounded-sm bg-gray-100" : ""
          }`
        }
      >
        {/* <Icon /> */}
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default List;
