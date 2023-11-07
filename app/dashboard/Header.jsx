"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { NavLink } from "@/constants/dashboard";
import { usePathname } from "next/navigation";
import NotificationDropdown from "./NotificationDropdown";
import UserProfileDropDown from "./UserProfileDropDown";
import Link from "next/link";
import { HiBars2, HiXMark } from "react-icons/hi2";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: "h-[80px] bg-[#00A9A4] border-b border-b-white/50",
        wrapper: "max-w-[1100px]",
      }}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link
            href="/dashboard"
            className="text-2xl font-bold text-[#ffffff] md:text-4xl"
          >
            Saturn
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 lg:flex" justify="center">
        {NavLink.map((links, i) => (
          <NavbarItem key={i}>
            <Link
              color="foreground"
              href={links.slug}
              className={`block rounded-full border border-[#00A9A4] p-4 pb-2 pt-2 text-lg font-semibold text-white transition-all hover:border hover:border-gray-300/[0.15] ${
                pathname === links.slug ? "bg-[#31928f]/30" : ""
              }`}
            >
              {links.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="gap-10">
        <NavbarItem className="">
          <NotificationDropdown />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <UserProfileDropDown />
        </NavbarItem>
        <NavbarMenuToggle className="text-white lg:hidden" />
      </NavbarContent>
      <NavbarMenu className="pt-10">
        <NavbarItem className="flex lg:hidden">
          <UserProfileDropDown setIsMenuOpen={setIsMenuOpen} />
        </NavbarItem>
        {NavLink.map((links, index) => (
          <NavbarMenuItem key={index}>
            <Link
              color="foreground"
              className="block p-2"
              href={links.slug}
              onClick={() => setIsMenuOpen(false)}
            >
              {links.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
