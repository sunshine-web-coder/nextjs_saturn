"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

const options = [
  {
    value: "USD",
    label: "USD",
  },
  {
    value: "EURO",
    label: "EURO",
  },
];

export default function SelectCurrency() {
  const [selectedOption, setSelectedOption] = useState("USD"); // State to manage the selected option

  const handleSelectChange = (value) => {
    setSelectedOption(value); // Update the selected option in state
  };
  return (
    <>
      <Select
        labelPlacement="outside"
        className="h-10 max-w-xs"
        radius="sm"
        disableSelectorIconRotation
        defaultSelectedKeys={[selectedOption]}
        onSelect={handleSelectChange}
        selectorIcon={
          <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            width="1em"
          >
            <path d="M0 0h24v24H0z" fill="none" stroke="none" />
            <path d="M8 9l4 -4l4 4" />
            <path d="M16 15l-4 4l-4 -4" />
          </svg>
        }
      >
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
    </>
  );
}
