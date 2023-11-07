"use client";

import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  User,
} from "@nextui-org/react";
import { IoEllipsisVertical } from "react-icons/io5";
import Link from "next/link";
import { MockUserData } from "@/constants/dashboard";
import { BsFillSendCheckFill } from "react-icons/bs";

export default function Wallet() {
  return (
    <div className="max-w-[1030px] mx-auto flex gap-20 flex-col pt-7 md:flex-row">
      <div className="w-full pb-10 md:w-[60%] md:pb-32">
        <div className="text-2xl font-semibold">Good morning, Smith</div>
        <div className="mt-4 rounded-lg bg-white px-5 py-3 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-[#00A9A4]">Saturn balance</h3>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <button className="flex h-8 w-8 items-center justify-center rounded-full text-xl shadow-sm outline-none hover:bg-[#00A9A4]/10">
                  <IoEllipsisVertical />
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem as={Link} href="" className="text-[#00A9A4]">
                  Go to
                </DropdownItem>
                <DropdownItem as={Link} href="" className="text-[#00A9A4]">
                  Link a Card
                </DropdownItem>
                <DropdownItem as={Link} href="" className="text-[#00A9A4]">
                  Get help
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="mt-3 text-3xl">
            <p>$100.00</p>
            <p className="mt-1 text-sm">Available</p>
          </div>
          <Button className="mt-5 bg-[#00A9A4] pb-1 pt-1 font-semibold text-[#ffffff]">
            Transfer Money
          </Button>
        </div>
        <div className="mt-4 rounded-lg bg-white px-5 py-3 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold text-[#00A9A4]">Recent activity</h3>
            <Button as={Link} href="" className="h-4 hover:underline bg-transparent p-0">
              View More
            </Button>
          </div>
          {MockUserData[0].map((user, index) => (
            <div className="w-full" key={user.id}>
              <div className={`flex w-full justify-between py-2`}>
                <User
                  name={user.name}
                  description={user.description}
                  avatarProps={{
                    src: user.avatar,
                  }}
                />
                <div className="text-right text-sm">
                  <p>{user.amount}</p>
                  <p className="text-xs">{user.date}</p>
                </div>
                {/* You can add more content or components here as well */}
              </div>

              {index === MockUserData[0].length - 1 ? (
                <hr className="w-full border-none" />
              ) : (
                <hr className="w-full border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full pb-10 pt-0 md:w-[40%] md:pb-32">
        <div className="flex items-center justify-end gap-10">
          <Link href="" className="text-center rounded-full block w-12">
            <div className="rounded-full p-3 shadow-md text-2xl w-12 h-12 flex items-center justify-center border-red-500 bg-[#00A9A4] text-white">
              <BsFillSendCheckFill />
            </div>
            <p className="mt-1 font-semibold">Send</p>
          </Link>
          <Link href="" className="text-center rounded-full block w-12">
            <div className="rounded-full p-3 shadow-md text-2xl w-12 h-12 flex items-center justify-center border-red-500 bg-[#00A9A4] text-white">
              <BsFillSendCheckFill className="rotate-180" />
            </div>
            <p className="mt-1 font-semibold">Request</p>
          </Link>
          {/* <Link href="" className="text-center rounded-full block w-12">
            <div className="rounded-full p-3 shadow-md text-2xl w-12 h-12 flex items-center justify-center border-red-500 bg-[#00A9A4] text-white">
              <BsFillSendCheckFill />
            </div>
            <p className="mt-1 font-semibold">Crypto</p>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
