"use client";

import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

const language = [{ label: "English", value: "eng" }];

export default function Language() {
  return (
    <div className="flex w-full flex-row flex-wrap gap-4">
      <Select
        label="Language"
        defaultSelectedKeys={["eng"]}
        autoFocus={false}
        size="lg"
        classNames={{
          trigger: "bg-white border focus:bg-[#fff4f4]",
        }}
      >
        {language.map((list) => (
          <SelectItem key={list.value} value={list.value}>
            {list.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
