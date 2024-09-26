"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const currentPath = usePathname();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
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
        <li>
          <Link
            href="/account"
            className={`${
              currentPath === "/account" ? "text-amber-300" : ""
            } hover:text-accent-400 transition-colors`}
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
}
