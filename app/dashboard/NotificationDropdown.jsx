import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Chip,
  Tabs,
  Tab,
} from "@nextui-org/react";

import { NotificationIcon } from "@/components/svgIcons/NotificationIcon";
import Link from "next/link";
import Image from "next/image";
import { inbox, notification } from "@/constants/dashboard";

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Chip
        variant="faded"
        color="danger"
        classNames={{
          base: "bg-red-500 absolute cursor-pointer z-50 top-[-8px] right-[-13px] max-w-max border-2 border-white",
          content: "text-white font-bold",
        }}
      >
        0
      </Chip>
      <div>
        <Popover
          placement="bottom"
          showArrow={true}
          isOpen={isOpen}
          onOpenChange={(open) => setIsOpen(open)}
        >
          <PopoverTrigger>
            <Button
              radius="full"
              isIconOnly
              aria-label="more than 99 notifications"
              variant="light"
              className="left-[8px]"
            >
              <NotificationIcon size={32} className="fill-current" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <Tabs
              aria-label="Options"
              classNames={{
                base: "w-[350px]",
                panel: "w-[350px] h-[450px] mt-3 overflow-y-auto",
                tab: "w-[300px] font-bold text-sm",
                tabContent:
                  "text-[#333333] group-data-[selected=true]:text-white",
                cursor: "bg-[#00A9A4]",
              }}
            >
              <Tab key="notification" title="Notification">
                <div>
                  {notification.length === 0 ? (
                    <div className="mt-4 p-5 pb-0 pt-0">
                      <div className="rounded-md border bg-white p-2 pb-5 pt-5">
                        <div className="pl-5 pr-5">
                          <p>Messages</p>
                          <p className="mt-1 text-sm">
                            You have no new messages.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {notification.map((group, index) => (
                        <div key={index} className="notification-group">
                          <div className="bg-white px-4 py-2 text-lg font-semibold text-gray-600">
                            {group.date}
                          </div>
                          {group.children.map((notify, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="bg-[#F5F7FA] px-4 py-4"
                            >
                              <div className="flex gap-3">
                                <div className="flex h-[40px] w-[46px] items-center justify-center overflow-hidden rounded-full border bg-white">
                                  <Image
                                    width={30}
                                    height={30}
                                    src={notify.avatar}
                                    alt="logo"
                                  />
                                </div>
                                <div className="w-full pr-2">
                                  <div className="mb-1 text-base font-semibold text-[#2c2e2f]">
                                    Changes to your account
                                  </div>
                                  <div className="text-sm">
                                    From September 11, 2023, updated Payment
                                    Receiving Preferences may impact the
                                    currencies that you can receive payments in.
                                    Please review your preference to continue
                                    with normal operation of your account.
                                  </div>
                                  <div className="mt-3">
                                    <Link
                                      href={notify.slug}
                                      className="block w-full rounded-full border border-[#00A9A4] p-2 pb-1 pt-1 text-center text-sm text-[#00A9A4]"
                                    >
                                      {notify.slugText}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </Tab>
              <Tab key="inbox" title="Inbox">
                <div>
                  {inbox.length === 0 ? (
                    <div className="mt-4 p-5 pb-0 pt-0">
                      <div className="rounded-md border bg-white p-2">
                        <div className="pl-5 pr-5">
                          <p>Messages</p>
                          <p className="mt-1 text-sm">
                            You have no new messages.
                          </p>
                        </div>
                        <div className="mb-3 mt-3">
                          <hr />
                        </div>
                        <div className="mb-1 text-center">
                          <Link
                            href="/dashboard/messages"
                            className="text-[#142C8E] hover:underline"
                          >
                            View Messages
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {inbox.map((group, index) => (
                        <div key={index} className="notification-group">
                          <div className="bg-white px-4 py-2 text-lg font-semibold text-gray-600">
                            {group.date}
                          </div>
                          {group.children.map((notify, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="bg-[#F5F7FA] px-4 py-4"
                            >
                              <div className="flex gap-3">
                                <div className="flex h-[40px] w-[46px] items-center justify-center overflow-hidden rounded-full border bg-white">
                                  <Image
                                    width={30}
                                    height={30}
                                    src={notify.avatar}
                                    alt="logo"
                                  />
                                </div>
                                <div className="w-full">
                                  <div className="mb-1 text-base font-semibold text-[#2c2e2f]">
                                    Changes to your account
                                  </div>
                                  <div className="text-sm">
                                    From September 11, 2023, updated Payment
                                    Receiving Preferences may impact the
                                    currencies that you can receive payments in.
                                    Please review your preference to continue
                                    with normal operation of your account.
                                  </div>
                                  <div className="mt-3">
                                    <Link
                                      href={notify.slug}
                                      className="block w-full rounded-full border border-[#00A9A4] p-2 pb-1 pt-1 text-center text-sm text-[#00A9A4]"
                                    >
                                      {notify.slugText}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </Tab>
            </Tabs>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
