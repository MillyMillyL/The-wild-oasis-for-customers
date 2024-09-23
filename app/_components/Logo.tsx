"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Logo() {
  const currentPath = usePathname();
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image height="60" width="60" alt="The Wild Oasis logo" src="/logo.png" />
      <span
        className={` ${
          currentPath === "/" ? "text-amber-300" : ""
        } hover:text-accent-400 transition-colors text-xl font-semibold`}
      >
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
