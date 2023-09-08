'use client'
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import AnimatedElement from '@/hooks/AnimatedElement';
import { RootState } from '@/redux/store';
import { toggleSponsorship } from '@/redux/sponsorshipSlice';
import { toggleModal } from '@/redux/modalSlice';
import { ModalParams, CardProps, dataItem } from '@/types';
import { capture_it, newZelek, anonymous_pro_regular, europeextendedRegular } from '../../fonts';

const explanation: { Basic: dataItem[], Engineer: dataItem[], Brand: dataItem[] } = {
    Basic: [
        {
            heading: 'Участь у нетворкінгу',
            details: "В останній день проєкту відбудеться нетворкінг — це подія для встановлення та розвитку взаємовідносин студентів та компаній з можливістю співпраці та розширення бізнес-зв’язків."
        },
        {
            heading: '2 Instagram Stories',
            details: "Поширення 2 сторіс в Instagram @best_lviv у день відкриття, закриття або після події. Контент складатиметься з відзнятого нами матеріалу та ресурсами, наданими компанією."
        },
        {
            heading: 'Логотип на сайті проєкту',
            details: "Для додаткового ознайомлення студентів з нашими партнерами, ми додамо до сайту BEC Ваше лого. Воно буде розміщене на сайті bec2023.vercel.app"
        },
        {
            heading: 'Логотип компанії на brand wall',
            details: "Під час події буде розміщений brand wall — великий банер,  на якому знаходяться логотипи всіх партнерів."
        },
    ],
    Engineer: [
        {
            heading: 'Завдання для CS/ID',
            details: "Компанія може надати завдання для Case Study або Innovative Design. Вони будуть обговорюватись командою організаторів разом із компанією, що їх надає. Пропозиція обмежена: компанія може надати до одного завдання на один з напрямків: Case Study або Innovative Design. Загалом, від всіх спонсорів категорія може містити не більше 2 завдань."
        },
        {
            heading: 'Надання судді, ментора',
            details: "Компанія може надати суддю або/і ментора для Case Study/Innovative Design. Вони повинні орієнтуватися в темах завдань, а також володіти англійською мовою рівня B1. Обмеження на кількість наданих менторів немає."
        },
        {
            heading: 'Тренінг, воркшоп для учасників',
            details: "Під час офіційного відкриття представник компанії отримає можливість провести тренінг або воркшоп тривалістю до 1 години. Партнер обирає будь-яку тему, яка може зацікавити та розвинути студентів або ж допомогти їм під час виконання завдання. Теми будуть обговорюватись командою організаторів разом із компанією, що їх надає."
        },
        {
            heading: 'Номінація від компанії ',
            details: "Це можливість обрати власну номінацію на змаганнях. Переможця у ній визначаєте Ви та нагороджуєте призом. Номінація може стосуватись використання певних технологій або інших особливостей роботи команди на Ваш вибір."
        },
        {
            heading: 'Лого на плакатах',
            details: "Плакати про подію будуть розповсюджені на території кампусу та студмістечка."
        },
        {
            heading: 'Логотип на футболках',
            details: "Проєкт буде мати свій мерч, який поширюватиметься серед учасників змагання та осередку BEST Lviv. Ми розмістимо лого Вашої компанії на спині футболок."
        },
    ],
    Brand: [
        {
            heading: 'Розміщення банера компанії під час події',
            details: "Впродовж змагання (25-27 листопада), Ви матимете змогу розмістити банер Вашої компанії на місці проведення."
        },
        {
            heading: 'Розіграш на інфостійках',
            details: "Інфостійки — це стенди, на яких розміщується рекламна інформація товарів, заходів чи брендів. Вони відбудуться в корпусах НУ “ЛП” за місяць до події. На них буде оголошено розіграш призів від Вашої компанії. Для цього повідомте, будь ласка, які саме призи Ви готові надати та які умови для участі у розіграші Вас цікавлять: підписка на сторінку компанії у соцмережах, поширення на своїй сторінці, коментування поста або виконання інших умов, які будуть визначені за домовленістю з Вами."
        },
        {
            heading: 'День з компанією',
            details: "Впродовж одного дня, після проведення події, сторіс нашої сторінки в Instagram BEST Lviv буде наповнений контентом про Вашу компанію. Ви надішлете відео про Вашу компанію або ж зможете провести різні рубрики в сторіс для взаємодії з аудиторією. Загалом таких сторіс буде до 5-ти."
        },
        {
            heading: 'Публікація на нашій сторінці LinkedIn ',
            details: "Поширення поста на сторінці LinkedIn BEST Lviv з короткою інформацією про Вашу компанію, досягненнями компанії та інформацією про партнерство. Текст надсилається Вашою компанією та публікується під час змагань або після проведення події."
        },
        {
            heading: 'Пост у нашому Telegram-каналі',
            details: "Пост у Telegram-каналі BEST Lviv Students, який міститиме інформацію про діяльність Вашої компанії. Наповнення надається [надсилається Вашою компанією] та публікується перед змаганнями або після проведення події."
        },

    ]
}

const Card = ({ name, price, services, annotation, active, compulsory, handleModal }: CardProps) => {
    const dispatch = useDispatch();

    const handleTogglePacket = () => {
        if (!compulsory) {
            dispatch(toggleSponsorship({ name }));
        }
    };

    return (

        <div className={name === 'Basic' ? 'w-full' : 'flex-1'}>
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    handleTogglePacket();
                }}
                className={`cursor-pointer rounded-3xl backdrop-blur-lg max-w-2xl min-w-[300px] sm:min-w-[400px] md:min-w-[580px] min-h-[470px] mx-auto bg-bec-svg bg-opacity-30 flex flex-col justify-between gap-6 md:gap-10 p-7 ${active ? 'border-bec-darker border-2' : ''}`}>
                <div className="flex w-full justify-between items-start">
                    <h5 className={`${newZelek.className} text-3xl md:text-5xl`}>{name}</h5>
                    <div className="flex md:gap-4 gap-1">
                        {annotation && <span className="text-bec-orange bg-[#443625] text-sm md:text-lg md:py-3 py-1.5 md:px-4 px-2 rounded-full h-fit">{annotation}</span>}
                        <button onClick={() => {
                            handleModal({ name, modalData: explanation[name] as any });
                        }}>
                            <Image src="/information.svg" width={50} height={50} alt="info" className="md:w-12 w-8" />
                        </button>
                    </div>
                </div>
                <div className="w-full">
                    {services.map((s, index) => (
                        <p key={index} className={`${anonymous_pro_regular.className} text-lg md:text-2xl`}>
                            {s}
                        </p>
                    ))}
                </div>
                <button className={`${anonymous_pro_regular.className} ${compulsory ? "cursor-not-allowed" : 'cursor-auto'} text-2xl md:text-4xl bg-bec-bg rounded-2xl border-2 w-fit border-white px-10 py-2 self-center`}>{`${price}$`}</button>
            </div>
        </div >
    );
};

export default function Offers() {
    const sellingPoints = useSelector((state: RootState) => state.sponsorship);

    const dispatch = useDispatch();

    const handleModal = ({ name, modalData }: ModalParams) => dispatch(toggleModal({ name, modalData }))

    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 mx-auto max-w-[1400px] gap-8 my-10" id="offers">
            <h2 className={`${capture_it.className} uppercase text-5xl mt-16 md:text-7xl text-center`}>Пропозиції</h2>
            <div className="flex flex-wrap justify-center gap-10">
                {sellingPoints.map(sp => {
                    return <Card key={sp.name} handleModal={handleModal} {...sp} />;
                })}
            </div>
            <p className={`${europeextendedRegular.className} text-2xl md:text-4xl`}>*10% від загальної суми буде передано на підтримку ЗСУ</p>

        </section>
    );
}