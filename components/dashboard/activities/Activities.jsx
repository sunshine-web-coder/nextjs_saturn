"use client";

import { SearchIcon } from "@/components/svgIcons/SearchIcon";
import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { dateFilter, statusFilter, typeFilter } from "@/constants/dashboard";

export default function Activities() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  return (
    <div className="mx-auto h-screen max-w-[900px] px-4 py-0 md:py-4">
      <div>
        <div className="relative mt-5 max-w-[600px]">
          <SearchIcon className="pointer-events-none absolute left-3 top-[18px] z-10 h-7 w-7 flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90" />
          <div className="relative flex w-full flex-col">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search by name or email"
              className="w-full rounded-xl border px-14 py-4 text-lg font-normal placeholder-slate-400 shadow-sm focus:border-[#00A9A4] focus:outline-none focus:ring-1 focus:ring-[#00A9A4]"
            />
          </div>
        </div>
        <div className="mt-5 md:mt-16">
          <p className="text-xl">Filter by</p>
          <div className="mt-5 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Select
              label="Date"
              // defaultSelectedKeys={["cat"]}
              variant="bordered"
              className="max-w-xs rounded-xl bg-white"
              classNames={{
                base: "w-[150px]",
              }}
            >
              {dateFilter.map((date) => (
                <SelectItem key={date.value} value={date.value}>
                  {date.label}
                </SelectItem>
              ))}
            </Select>
            <Select
              label="Type"
              // defaultSelectedKeys={["cat"]}
              variant="bordered"
              className="max-w-xs rounded-xl bg-white"
              classNames={{
                base: "w-[210px]",
              }}
            >
              {typeFilter.map((date) => (
                <SelectItem key={date.value} value={date.value}>
                  {date.label}
                </SelectItem>
              ))}
            </Select>
            <Select
              label="Status"
              // defaultSelectedKeys={["cat"]}
              variant="bordered"
              className="max-w-xs rounded-xl bg-white"
              classNames={{
                base: "w-[255px]",
              }}
            >
              {statusFilter.map((date) => (
                <SelectItem key={date.value} value={date.value}>
                  {date.label}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="mt-5 pb-10 pt-10 md:mt-10">
          <div className="text-center">
            <p className="text-2xl font-normal text-[#0c0c0d]">
              No transactions yet.
            </p>
            <p className="text-lg font-normal text-[#0c0c0d]">
              Want to try again with different dates?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
