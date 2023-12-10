"use client";

import Image from "next/image";
import { Fragment, useState } from 'react';
import { Combobox, Transition } from "@headlessui/react";

import { manufacturers } from "../constants";
import { SearchManufacturerProps } from "../types";


const SearchManufacturer = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');
  const filteredManufacturers = 
    query === "" ? manufacturers : manufacturers.filter((item) => (
      item.toLowerCase().replace(/\s+/g, "").includes(query.toLocaleLowerCase().replace(/\s+/g, ""))
    ))


  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>
          <Combobox.Input 
            className="search-manufacturer__input"
            placeholder="Volkswagon"
            displayValue={(manufacturer: string) => 
              manufacturer
            }
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opactiy-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}>
          <Combobox.Options>
              {filteredManufacturers.length === 0 && query != "" ? 
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  Create "{query}"
                </Combobox.Option> : filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  value={item}
                  className={({active}) => 
                    `relative search-manufacturer__option
                    ${active ? "bg-primary-blue text-white" : "text-gray-900"}`
                  }
                >
                  {item}
                </Combobox.Option>
              ))}
          </Combobox.Options>
        </Transition>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer