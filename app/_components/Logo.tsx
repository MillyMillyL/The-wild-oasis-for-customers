"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.png";

function Logo() {
  const currentPath = usePathname();
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      {/* <Image height="60" width="60" alt="The Wild Oasis logo" src="/logo.png" /> */}
      <Image
        src={logo}
        alt="The Wild Oasis logo"
        height="60"
        width="60"
        quality={1}
      />
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
