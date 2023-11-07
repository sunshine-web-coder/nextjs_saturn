"use client";

import { NavLinkData } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const isHideHomeHeader =
    pathname.startsWith("/dashboard") || pathname === "/reset-password";
  const hideHomeHeader = !isHideHomeHeader;

  return (
    <>
      {hideHomeHeader && (
        <Navbar
          onMenuOpenChange={setIsMenuOpen}
          shouldHideOnScroll
          classNames={{
            base: "h-[80px] border border-b-[#00A9A4]/50",
            wrapper: "max-w-[1100px]",
          }}
        >
          <NavbarContent>
            <NavbarBrand>
              <Link
                href="/"
                className="text-2xl font-bold text-[#00A9A4] md:text-4xl"
              >
                Saturn
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden gap-4 md:flex" justify="center">
            {NavLinkData.map((links, i) => (
              <NavbarItem key={i}>
                <Link color="foreground" href={links.slug}>
                  {links.label}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
          <NavbarContent justify="end" className="hidden md:flex">
            <NavbarItem className="">
              <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                as={Link}
                color="primary"
                className="bg-[#00A9A4] text-[#ffffff]"
                href="/signup"
                variant="flat"
                size="md"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end" className="md:hidden">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </NavbarContent>
          <NavbarMenu className="pt-10">
            {NavLinkData.map((links, index) => (
              <NavbarMenuItem key={index}>
                <Link
                  color="foreground"
                  className="block p-2"
                  href={links.slug}
                >
                  {links.label}
                </Link>
              </NavbarMenuItem>
            ))}
            <NavbarItem className="mt-4 flex flex-col gap-4">
              <Button
                as={Link}
                color="primary"
                className="bg-[#00A9A4] text-[#ffffff]"
                size="lg"
                href="/login"
                variant="flat"
              >
                Login
              </Button>
              <Button
                as={Link}
                color="primary"
                className="bg-[#00A9A4] text-[#ffffff]"
                size="lg"
                href="/signup"
                variant="flat"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarMenu>
        </Navbar>
      )}
    </>
  );
}
