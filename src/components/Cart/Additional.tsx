"use client";

import { useSelector, useDispatch } from "react-redux";
import { toggleOptionActive } from "@/redux/optionalSlice";
import { toggleModal } from "@/redux/modalSlice";
import { RootState } from "@/redux/store";

import { dataItem, iOptional, ModalParams } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import Modal from "./Modal";

const explanation: dataItem[] = [
  {
    heading: "Лого на плакатах",
    details:
      "Плакати про подію будуть розповсюджені на території кампусу та студмістечка.",
  },
  {
    heading: "Логотип на футболках",
    details:
      "Проєкт буде мати свій мерч, який поширюватиметься серед учасників змагання та осередку BEST Lviv. Ми розмістимо лого Вашої компанії на спині футболок.",
  },
  {
    heading: "Розсилка вакансій в телеграм боті",
    details:
      "Проєкт буде мати свого бота в телеграмі для реєстрації команд учасників (зможливістью прикріпити своє CV), розсилки важливої інформації та комунікації під час заходу.",
  },
];

const Option = ({ name, price, active }: iOptional) => {
  const dispatch = useDispatch();

  const handleToggleOption = () => {
    dispatch(toggleOptionActive({ name }));
  };

  return (
    <div className="flex justify-between w-full p-1">
      <div className="flex items-center space-x-2">
        <Checkbox
          id={name}
          checked={active}
          onCheckedChange={handleToggleOption}
        />
        <Label htmlFor={name}>{name}</Label>
      </div>
      {price}$
    </div>
  );
};

export default function Offers() {
  const options = useSelector((state: RootState) => state.optionalPackets);

  const dispatch = useDispatch();

  const handleModal = ({ name, modalData }: ModalParams) =>
    dispatch(toggleModal({ name, modalData }));

  return (
    <Card className="max-w-3xl w-full mx-auto">
      <CardHeader>
        <h2 className="uppercase text-5xl md:text-4xl">Додаткові Опції</h2>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-4">
          {options.map((op) => (
            <Option key={op.name} {...op} />
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="mx-auto"
              size={"lg"}
              onClick={() =>
                handleModal({ name: "Додаткові Опції", modalData: explanation })
              }
            >
              Переглянути деталі
            </Button>
          </DialogTrigger>
          <Modal />
        </Dialog>
      </CardFooter>
    </Card>
  );
}
