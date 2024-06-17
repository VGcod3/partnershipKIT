import { dataItem, iOptional, ModalParams } from "@/types";
import { iSellingPoint } from "@/types";



import facebookLogo from "../../public/facebook.svg"
import instagramLogo from "../../public/instagram.svg"
import linkedinLogo from "../../public/linkedin.svg"
import telegramLogo from "../../public/telegram.svg"

import leobit from "@/public/leobit.svg"
import warbirds from "@/public/warbirds.svg"
import fujikura from "@/public/fujikura.svg"
import tskt from "@/public/tskt.svg"
import softserve from "@/public/softserve.svg"
import globallogic from "@/public/globallogic.svg"
import teamvoy from "@/public/teamvoy.svg"
import dialog from "@/public/dialog.svg"
import squad from "@/public/squad.svg"
import rozkvit from "@/public/rozkvit.svg"
import sigma from "@/public/sigma.svg"
import dataart from "@/public/dataart.svg"


import bestLvivLogo from "@/public/logo.svg"

const socialMediaLogos = [facebookLogo, instagramLogo, linkedinLogo, telegramLogo]

export const headerNavigation = [
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

export const introSection =
{
  title: 'Назва Проєкту',
  term: "Тема Проєкту",
  description: "Опис проєкту",
}

export const descriptionSection = {
  title: introSection.title,
  titleDescription: introSection.description,
  term: introSection.term,
  termDescription: "Опис теми проєкту",
  img1: {
    src: "https://picsum.photos/200/300",
    alt: "img1"
  },
  img2: {
    src: "https://picsum.photos/200/300",
    alt: "img2"
  }
}


export const statisticsSection = {
  items: [
    { title: 'telegram', value: 12, img: socialMediaLogos[0] },
    { title: 'instagram', value: 100, img: socialMediaLogos[1] },
    { title: 'linkedIn', value: 5, img: socialMediaLogos[2] },
    { title: 'facebook', value: 5, img: socialMediaLogos[3] }
  ]
}

export const portraitSection = {
  image: "https://via.placeholder.com/400",
  title: "Портрет учасника",
  description: "Опис учасника",
  course: [
    {
      title: "course_1",
      value: 1
    },
    {
      title: "course_1",
      value: 1
    },
    {
      title: "course_1",
      value: 1
    },
    {
      title: "course_1",
      value: 1
    },
    {
      title: "course_1",
      value: 1
    },

  ],
  specialisation: [
    {
      title: "specialisation_1",
      value: 1
    },
    {
      title: "specialisation_1",
      value: 1
    },
    {
      title: "specialisation_1",
      value: 1
    },
    {
      title: "specialisation_1",
      value: 1
    },
    {
      title: "specialisation_1",
      value: 1
    },

  ]
}


export const sellingPoints: iSellingPoint[] = [
  {
    compulsory: true,
    active: true,
    name: "Basic",
    price: 250,
    annotation: "Обов'язковий",
    services: [
      `Участь у нетворкінгу`,
      `2 Instagram Stories`,
      `Логотип на сайті проєкту`,
      `Логотип компанії на brand wall`,
    ],
  },
  {
    compulsory: false,
    active: false,
    name: "Engineer",
    price: 500,
    annotation: "4 left",
    services: [
      "Завдання для CS(Case Study)/ID(Innovative Design)",
      `Надання судді, ментора`,
      `Воркшоп`,
      `Номінація від компанії`,
      `Лого на плакатах`,
      `Логотип на футболках`,
    ],
  },
  {
    compulsory: false,
    active: false,
    name: "Brand",
    price: 250,
    annotation: "",
    services: [
      `Розміщення банера компанії на події`,
      `Розіграш на інфостійках`,
      `День з компанією`,
      `Пост у нашій сторінці LinkedIn`,
      `Пост у нашому Telegram - каналі`,
    ],
  },
];

export const sellingPointsExplanation = {
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

export const additionalOptions: dataItem[] = [

  { heading: "option 1", details: "description option 1" },
  { heading: "option 2", details: "description option 2" },
  { heading: "option 3", details: "description option 3" },
]

// export const cart = {
//   sales: [
//     { value: 1, description: "sales 1 description" },
//     { value: 2, description: "sales 2 description" },
//     { value: 3, description: "sales 3 description" },
//   ]
// }
export const partnersSection = [
  {
      image: leobit,
      width: 123,
      height: 50
  },
  {
      image: warbirds,
      width: 123,
      height: 50
  },
  {
      image: fujikura,
      width: 123,
      height: 50
  },
  {
      image: tskt,
      width: 123,
      height: 50
  },
  {
      image: softserve,
      width: 123,
      height: 50
  },
  {
      image:globallogic,
      width: 123,
      height: 50
  },
  {
      image: teamvoy,
      width: 123,
      height: 50
  },
  {
      image: dialog,
      width: 123,
      height: 50
  },  
  {
      image: sigma,
      width: 123,
      height: 50
  },  
  {
      image: dataart,
      width: 123,
      height: 50
  },  
  {
      image: squad,
      width: 123,
      height: 50
  },  
  {
      image: rozkvit,
      width: 123,
      height: 50
  },  
]
export const sponsorsSection =
{
  logos: ["revo.svg", "bearmix.svg", "lvivske rizdviane.svg", "best bus.svg",]
}
export const organizatorsSection = {
  title: "Best Lviv",
  logo: bestLvivLogo,
  description: "(Board of European Students of Technology) – осередок міжнародної неприбуткової громадської організації, який об’єднує студентів технічних спеціальностей. Нашою місією є розви-ток студентів через обмін знаннями та співпрацю компаній, університетів та студентів Європи.",
  statistics: [
    { title: "осередків", value: 85 },
    { title: "карїн", value: 30 },
    { title: "років досвіду", value: 35 },
  ]
}
export const contactsSection = [
  { img: "person.png", name_surname: "ім'я прізвище", description: "Відповідальна за корпоративні зв'язки", mail: "mail@com", phone: "696969696969" },
  { img: "person.png", name_surname: "ім'я прізвище", description: "Відповідальна за корпоративні зв'язки", mail: "mail@com", phone: "696969696969" },
  { img: "person.png", name_surname: "ім'я прізвище", description: "Відповідальна за корпоративні зв'язки", mail: "mail@com", phone: "696969696969" },
]

export const footerSection = {
  socialMedia: [
    { img: socialMediaLogos[0], link: "https://www.facebook.com/" },
    { img: socialMediaLogos[1], link: "https://www.instagram.com/" },
    { img: socialMediaLogos[2], link: "https://www.linkedin.com/" },
    { img: socialMediaLogos[3], link: "https://www.linkedin.com/" },
  ],
  logo: bestLvivLogo,
  year: 2007
}
