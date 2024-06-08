"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

import useSmoothScrollTo from "@/hooks/useSmoothScrollTo";
import Drawer from "./Drawer";
import { Button } from "./ui/button";
import { ModeToggle } from "./ColorTheme/ColorThemeToggle";

type MenuItem = {
  name: string;
  href: string;
};

const navigation: MenuItem[] = [
  {
    name: "Про нас",
    href: "#about",
  },
  {
    name: "Статистика",
    href: "#stats",
  },
  {
    name: "Контакти",
    href: "#contacts",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollClick = useSmoothScrollTo();

  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" bg-red-700 w-full"
    >
      <div className="container flex justify-between">
        <h2
          onClick={() => {
            handleScrollClick("#top");
          }}
          className="cursor-pointer flex items-center text-2xl text-font-bold"
        >
          CTF
        </h2>

        <div className="hidden xl:flex gap-4 items-center">
          {navigation.map((nav_item) => (
            <Button
              variant={"ghost"}
              onClick={() => {
                handleScrollClick(nav_item.href);
              }}
              key={nav_item.name}
            >
              {nav_item.name}
            </Button>
          ))}

          <Button onClick={() => handleScrollClick("#offers")}>
            Стати партнером
          </Button>
          <ModeToggle />
        </div>
        <Dialog.Root>
          <div className="flex xl:hidden">
            <Dialog.Trigger asChild>
              <Button
                variant={"ghost"}
                size={"icon"}
                onClick={() => setMobileMenuOpen(true)}
              >
                <MenuIcon strokeWidth={1.5} size={32} />
              </Button>
            </Dialog.Trigger>
          </div>
          <Drawer
            setMobileMenuOpen={setMobileMenuOpen}
            navigation={navigation}
            mobileMenuOpen={mobileMenuOpen}
          />
        </Dialog.Root>
      </div>
    </motion.header>
  );
}
