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

const explanation: {
  Basic: dataItem[];
  Engineer: dataItem[];
  Brand: dataItem[];
} = {
  Basic: [
    {
      heading: "Участь у нетворкінгу",
      details:
        "В останній день проєкту відбудеться нетворкінг — це подія для встановлення та розвитку взаємовідносин студентів та компаній з можливістю співпраці та розширення бізнес-зв’язків.",
    },
    {
      heading: "2 Instagram Stories",
      details:
        "Поширення 2 сторіс в Instagram @best_lviv у день відкриття, закриття або після події. Контент складатиметься з відзнятого нами матеріалу та ресурсами, наданими компанією.",
    },
    {
      heading: "Логотип на сайті проєкту",
      details:
        "Для додаткового ознайомлення студентів з нашими партнерами, ми додамо до сайту BEC Ваше лого. Воно буде розміщене на сайті bec2023.vercel.app",
    },
    {
      heading: "Логотип компанії на brand wall",
      details:
        "Під час події буде розміщений brand wall — великий банер,  на якому знаходяться логотипи всіх партнерів.",
    },
  ],
  Engineer: [
    {
      heading: "Завдання для CS/ID",
      details:
        "Компанія може надати завдання для Case Study або Innovative Design. Вони будуть обговорюватись командою організаторів разом із компанією, що їх надає. Пропозиція обмежена: компанія може надати до одного завдання на один з напрямків: Case Study або Innovative Design. Загалом, від всіх спонсорів категорія може містити не більше 2 завдань.",
    },
    {
      heading: "Надання судді, ментора",
      details:
        "Компанія може надати суддю або/і ментора для Case Study/Innovative Design. Вони повинні орієнтуватися в темах завдань, а також володіти англійською мовою рівня B1. Обмеження на кількість наданих менторів немає.",
    },
    {
      heading: "Тренінг, воркшоп для учасників",
      details:
        "Під час офіційного відкриття представник компанії отримає можливість провести тренінг або воркшоп тривалістю до 1 години. Партнер обирає будь-яку тему, яка може зацікавити та розвинути студентів або ж допомогти їм під час виконання завдання. Теми будуть обговорюватись командою організаторів разом із компанією, що їх надає.",
    },
    {
      heading: "Номінація від компанії ",
      details:
        "Це можливість обрати власну номінацію на змаганнях. Переможця у ній визначаєте Ви та нагороджуєте призом. Номінація може стосуватись використання певних технологій або інших особливостей роботи команди на Ваш вибір.",
    },
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
  ],
  Brand: [
    {
      heading: "Розміщення банера компанії під час події",
      details:
        "Впродовж змагання (25-27 листопада), Ви матимете змогу розмістити банер Вашої компанії на місці проведення.",
    },
    {
      heading: "Розіграш на інфостійках",
      details:
        "Інфостійки — це стенди, на яких розміщується рекламна інформація товарів, заходів чи брендів. Вони відбудуться в корпусах НУ “ЛП” за місяць до події. На них буде оголошено розіграш призів від Вашої компанії. Для цього повідомте, будь ласка, які саме призи Ви готові надати та які умови для участі у розіграші Вас цікавлять: підписка на сторінку компанії у соцмережах, поширення на своїй сторінці, коментування поста або виконання інших умов, які будуть визначені за домовленістю з Вами.",
    },
    {
      heading: "День з компанією",
      details:
        "Впродовж одного дня, після проведення події, сторіс нашої сторінки в Instagram BEST Lviv буде наповнений контентом про Вашу компанію. Ви надішлете відео про Вашу компанію або ж зможете провести різні рубрики в сторіс для взаємодії з аудиторією. Загалом таких сторіс буде до 5-ти.",
    },
    {
      heading: "Публікація на нашій сторінці LinkedIn ",
      details:
        "Поширення поста на сторінці LinkedIn BEST Lviv з короткою інформацією про Вашу компанію, досягненнями компанії та інформацією про партнерство. Текст надсилається Вашою компанією та публікується під час змагань або після проведення події.",
    },
    {
      heading: "Пост у нашому Telegram-каналі",
      details:
        "Пост у Telegram-каналі BEST Lviv Students, який міститиме інформацію про діяльність Вашої компанії. Наповнення надається [надсилається Вашою компанією] та публікується перед змаганнями або після проведення події.",
    },
  ],
};

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
                  handleModal({ name, modalData: explanation[name] as any });
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
