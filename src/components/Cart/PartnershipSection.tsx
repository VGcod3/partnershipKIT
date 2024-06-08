"use client";
import Providers from "@/redux/Providers";

import Offers from "@/components/Cart/Offers";
import Additional from "@/components/Cart/Additional";
import Cart from "@/components/Cart/Cart";

const Section = () => {
  return (
    <div className="flex flex-col container ">
      <Offers />
      <Additional />
      <Cart />
    </div>
  );
};

export default function PartnershipSection() {
  return (
    <Providers>
      <Section />
    </Providers>
  );
}
