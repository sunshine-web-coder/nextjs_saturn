import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import Link from "next/link";

export default function UserProfileDropDown({ setIsMenuOpen }) {
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
            }}
            classNames={{
              name: "text-[#333333] lg:text-white font-bold",
              description: "text-[#333333] lg:text-white font-bold",
            }}
            className="transition-transform"
            description="@walebalogun"
            name="Wale Balogun"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem as={Link} href="/dashboard/profile" key="settings" onClick={() => setIsMenuOpen(false)}>
            Profile
          </DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
