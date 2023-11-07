"use client";

import { ProfileNavLink } from "@/constants/dashboard";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="bg-white w-full pt-3 pb-3 z-10">
      <div className="flex items-center justify-center max-w-[750px] mx-auto">
        <nav className="w-full">
          <ul className="flex pb-2 pt-2 justify-between font-semibold text-lg gap-3 max-w-[100%] md:w-full border-b md:border-0 overflow-scroll md:overflow-hidden">
            {ProfileNavLink.map((links, i) => (
              <li key={i}>
                <Link
                  href={links.slug}
                  className={`block whitespace-nowrap p-4 pb-2 pt-2 text-[#00A9A4] border border-[#ffffff] hover:border hover:border-[#dfeff7] transition-all rounded-full ${
                    pathname === links.slug ? "bg-[#EDF9FF]" : ""
                  }`}
                >
                  {links.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
