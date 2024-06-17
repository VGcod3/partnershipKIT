"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleSponsorship } from "@/redux/sponsorshipSlice";
import { toggleModal } from "@/redux/modalSlice";
import { ModalParams, dataItem, iSellingPoint } from "@/types";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Check, Info } from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";

import Modal from "./Modal";
import { sellingPointsExplanation } from "../_content/_content";

const Offer = ({
  name,
  price,
  services,
  annotation,
  active,
  compulsory,
}: iSellingPoint) => {
  const dispatch = useDispatch();

  const handleTogglePacket = () => {
    if (!compulsory) {
      dispatch(toggleSponsorship({ name }));
    }
  };

  const handleModal = ({ name, modalData }: ModalParams) =>
    dispatch(toggleModal({ name, modalData }));

  return (
    <Card
      className={cn(
        "flex flex-col relative max-w-2xl basis-[460px] border-4 transition-all",
        active && "border-red-700 dark:border-red-700"
      )}
    >
      <CardHeader>
        <CardTitle className="text-3xl text-center">{name}</CardTitle>

        <CardDescription className="text-center">
          Lorem ipsum dolor sit amet.
        </CardDescription>

        <div className="absolute top-2 right-2 flex gap-2 items-center">
          {annotation && (
            <Badge className="h-min p-1 px-2 ">{annotation}</Badge>
          )}

          <Dialog>
            <DialogTrigger asChild>
              <Button
                size={"icon"}
                variant={"ghost"}
                className="p-1"
                onClick={() => {
                  handleModal({ name, modalData: sellingPointsExplanation[name] as any });
                }}
              >
                <Info strokeWidth={1.5} />
              </Button>          
            </DialogTrigger>
            <Modal />
          </Dialog>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        {services.map((s, index) => (
          <div className="flex gap-2">
            <Check strokeWidth={1.5} />
            <p key={index} className="font-light text-lg">
              {s}
            </p>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button
          disabled={compulsory}
          className="w-full"
          onClick={handleTogglePacket}
          size={"lg"}
        >{`${price}$`}</Button>
      </CardFooter>
    </Card>
  );
};

export default function Offers() {
  const sellingPoints = useSelector((state: RootState) => state.sponsorship);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 mx-auto max-w-[1400px] gap-8 my-10"
      id="offers"
    >
      <h2 className={`uppercase text-5xl mt-16 md:text-7xl text-center`}>
        Пропозиції
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {sellingPoints.map((sp) => {
          return <Offer key={sp.name} {...sp} />;
        })}
      </div>
      <p className={` text-lg md:text-2xl`}>
        *10% від загальної суми буде передано на підтримку ЗСУ
      </p>
    </section>
  );
}
