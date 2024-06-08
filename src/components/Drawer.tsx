"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useEffect } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import useSmoothScrollTo from "@/hooks/useSmoothScrollTo";
import { Button } from "./ui/button";
import { XIcon } from "lucide-react";
import { ModeToggle } from "./ColorTheme/ColorThemeToggle";

interface drawerProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  navigation: MenuItem[];
}

type MenuItem = {
  name: string;
  href: string;
};

export default function Drawer({
  setMobileMenuOpen,
  navigation,
  mobileMenuOpen,
}: drawerProps) {
  const handleScrollClick = useSmoothScrollTo();

  useEffect(() => {
    // Toggle body overflow when the drawer opens or closes
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup the effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <Dialog.Portal>
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.2 }}
              className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-red-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200/10"
            >
              <div className="flex justify-between w-full">
                <ModeToggle />

                <Button
                  size={"icon"}
                  variant="ghost"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XIcon strokeWidth={1.5} size={32} />
                </Button>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                {navigation.map((item) => (
                  <Button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleScrollClick(item.href);
                    }}
                    key={item.name}
                    variant={"outline"}
                  >
                    {item.name}
                  </Button>
                ))}

                <Button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleScrollClick("#offers");
                  }}
                  className="flex-1"
                >
                  Стати партнером
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Dialog.Portal>
  );
}
