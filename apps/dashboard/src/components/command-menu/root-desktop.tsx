"use client";

import { MenuOption, useCommandStore } from "@/store/command";
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@midday/ui/command";
import { Icons } from "@midday/ui/icons";
import {
  Calculator,
  Calendar,
  MoveUpRight,
  Settings,
  Smile,
  User,
} from "lucide-react";

const navigation = [
  {
    name: "Overview",
    path: "/",
  },
  {
    name: "Inbox",
    path: "/inbox",
  },
  {
    name: "Transactions",
    path: "/transactions",
  },
  {
    name: "Invoices",
    path: "/invoices",
  },
  {
    name: "Tracker",
    path: "/tracker",
  },
  {
    name: "Vault",
    path: "/vault",
  },
  {
    name: "Exports",
    path: "/vault/exports",
  },
  {
    name: "Apps",
    path: "/apps",
  },
  {
    name: "Settings",
    path: "/settings",
  },
];

export function CommandRootDesktop() {
  const { setMenu } = useCommandStore();

  return (
    <div>
      <CommandInput
        placeholder="Type a command or search..."
        autoFocus
        className="backdrop-filter backdrop-blur-lg"
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Suggestion">
          <CommandItem onSelect={() => setMenu(MenuOption.AI)}>
            <Icons.AI className="mr-2 h-[20px] w-[20px] text-[#0091ff]" />
            <div className="flex items-center justify-between w-full">
              <span>Ask Midday AI...</span>

              <span
                className="relative rounded-lg overflow-hidden border dark:p-[1px] dark:border-none"
                style={{
                  background:
                    "linear-gradient(-45deg, rgba(235,248,255,.18) 0%, #848f9c 50%, rgba(235,248,255,.18) 100%)",
                }}
              >
                <span className="flex items-center py-[3px] px-3 rounded-[7px] bg-background text-[10px] h-full font-normal">
                  Experimental
                </span>
              </span>
            </div>
          </CommandItem>
          <CommandItem onSelect={() => setMenu(MenuOption.Tracker)}>
            <Icons.Tracker className="mr-2 h-[20px] w-[20px]" />
            <span>Time Tracker</span>
          </CommandItem>
        </CommandGroup>

        <CommandGroup heading="Latest Notifications">
          <CommandItem className="flex items-center justify-between">
            Supabase Pte Ltd - Your receipt from Supabase Pte Ltd #2627-2457
          </CommandItem>
          <CommandItem className="flex items-center justify-between">
            Vercel Inc. - Your receipt from Vercel Inc. #2405-8181
          </CommandItem>
          <CommandItem className="flex items-center justify-between">
            DigitalOcean Support - Your 2023-11 invoice is available
          </CommandItem>
          <CommandItem className="flex items-center justify-between">
            GitHub - Payment Receipt
          </CommandItem>
          <CommandItem className="flex items-center justify-between">
            Supabase Pte Ltd - Your receipt from Supabase Pte Ltd #2627-2451
          </CommandItem>
          <CommandItem className="flex items-center justify-between">
            Vercel Inc. - Your receipt from Vercel Inc. #2405-8183
          </CommandItem>
        </CommandGroup>

        <CommandGroup heading="Navigation" className="pb-6">
          {navigation.map((item) => (
            <CommandItem
              key={item.path}
              onSelect={() => window.location.replace(`midday://${item.path}`)}
            >
              <MoveUpRight className="mr-2 h-4 w-4" />
              <span>{item.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </div>
  );
}