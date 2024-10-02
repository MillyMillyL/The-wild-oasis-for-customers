/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { auth } from "../_lib/auth";
import NavLinks from "./NavLinks";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl flex">
      <ul className="flex gap-16 items-center">
        <NavLinks />
        {session?.user?.image ? (
          <li>
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-2"
            >
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                alt={session?.user?.name || ""}
                referrerPolicy="no-referrer"
              />
              <span>Guest Area</span>
            </Link>
          </li>
        ) : (
          <li>
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors"
            >
              <span>Guest Area</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
