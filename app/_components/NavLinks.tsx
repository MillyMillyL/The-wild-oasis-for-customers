"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks() {
  const currentPath = usePathname();
  return (
    <>
      <li>
        <Link
          href="/cabins"
          className={`${
            currentPath.startsWith("/cabins") ? "text-amber-300" : ""
          } hover:text-accent-400 transition-colors`}
        >
          Cabins
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={`${
            currentPath === "/about" ? "text-amber-300" : ""
          } hover:text-accent-400 transition-colors`}
        >
          About
        </Link>
      </li>
    </>
  );
}

export default NavLinks;
