import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function LanguageMenu () {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-black text-white">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent className="bg-black text-white">
        <SelectGroup>
          <SelectLabel>English</SelectLabel>
          <SelectItem value="apple">English</SelectItem>
          <SelectItem value="banana">Malayalam</SelectItem>
          <SelectItem value="blueberry">Hindhi</SelectItem>
          <SelectItem value="grapes">Koria</SelectItem>
          <SelectItem value="pineapple">Tamil</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
