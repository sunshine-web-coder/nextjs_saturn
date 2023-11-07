"use client";

import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

const timezone = [{ label: "(GMT-07:00 Pacific Time (Los Angeles))", value: "(GMT-07:00 Pacific Time (Los Angeles))" }];

export default function TimeZone() {
  return (
    <div className="flex w-full flex-row flex-wrap gap-4">
      <Select
        label="Time Zone"
        defaultSelectedKeys={["(GMT-07:00 Pacific Time (Los Angeles))"]}
        autoFocus={false}
        size="lg"
        classNames={{
          trigger: "bg-white border focus:bg-[#fff4f4]",
        }}
      >
        {timezone.map((list) => (
          <SelectItem key={list.value} value={list.value}>
            {list.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
