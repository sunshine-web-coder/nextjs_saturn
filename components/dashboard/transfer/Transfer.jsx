"use client";

import CustomButton from "@/components/button/CustomButton";
import { SearchIcon } from "@/components/svgIcons/SearchIcon";
import { MockUserData } from "@/constants/dashboard";
import { Button, User } from "@nextui-org/react";
import React, { useState } from "react";

export default function Transfer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // New state for selected user

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsListOpen(value !== "");

    const filteredUsers = MockUserData[0].filter(
      (user) =>
        user.name.toLowerCase().includes(value.toLowerCase()) ||
        user.username.toLowerCase().includes(value.toLowerCase()) ||
        user.phone.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase()),
    );

    setSearchResults(filteredUsers);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setSearchTerm(user.name); // Set the input field to the selected user's name
    setIsListOpen(false); // Close the list
  };

  const clearSelectedUser = () => {
    setSelectedUser(null);
    setSearchTerm(""); // Clear the input field
    setIsListOpen(false); // Close the list
  };

  return (
    <div className="mx-auto h-screen max-w-[500px] px-4 py-0 md:py-4">
      <div className="pb-5 pt-5 text-2xl font-semibold">
        <div>
          <label htmlFor="Send payment to" className="text-2xl font-semibold">
            Send payment to
          </label>
          <div className="relative mt-5">
            <SearchIcon className="pointer-events-none absolute left-3 top-5 z-10 flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90" />
            <div className="relative flex w-full flex-col">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Name, @username, email, or mobile..."
                className="w-full rounded-xl border px-12 py-4 text-lg font-normal placeholder-slate-400 shadow-sm focus:border-[#00A9A4] focus:outline-none focus:ring-1 focus:ring-[#00A9A4]"
              />
              {selectedUser && (
                <div className="absolute right-3 top-3 z-10">
                  <button
                    onClick={clearSelectedUser}
                    className="h-5 w-5 cursor-pointer rounded-full bg-[#00A9A4] text-center text-xs text-white shadow-md"
                  >
                    X
                  </button>
                </div>
              )}
              <div className="absolute top-[65px] z-10 w-full">
                {isListOpen && (
                  <>
                    {searchResults.length === 0 ? (
                      <div className="rounded-xl border bg-white p-4 text-center text-lg font-normal shadow-md">
                        User not found, Try their mobile number or email.
                      </div>
                    ) : (
                      <ul className="overflow-hidden rounded-xl border bg-white shadow-md">
                        <div className="px-5 py-3 text-lg">
                          People on Saturn
                        </div>
                        <hr className={`w-full border-gray-200`} />
                        {searchResults.map((user, index) => (
                          <li key={user.id}>
                            <div
                              key={user.id}
                              className="flex w-full cursor-pointer items-center justify-between p-3 pb-2 pt-2 hover:bg-gray-500/5"
                              onClick={() => handleUserClick(user)} // Handle user selection
                            >
                              <User
                                name={user.name}
                                description={`@${user.username}`}
                                avatarProps={{
                                  src: `${user.avatar}`,
                                }}
                              />
                            </div>
                            <hr
                              className={`w-full border-gray-200 ${
                                index === searchResults.length - 1
                                  ? "last:border-none"
                                  : ""
                              }`}
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="mt-5">
              <CustomButton
                text="Send"
                className="w-full rounded-lg text-lg font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
