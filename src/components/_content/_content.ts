import { Description } from "@radix-ui/react-dialog";


const page = {
    header:
    {
        links: [
            { text: 'Home', href: '#' },
            { text: 'About', href: '#' },
            { text: 'Contact', href: '#' }
        ]
    },
    hero:
    {
        title: 'Welcome to my website',
        term: "",
        description: "",
    },
    statistics: {
        items: [
            { title: 'Telegram', value: 12 },
            { title: 'Instagram', value: 100 },
            { title: 'LinkedIn', value: 5 },
            { title: 'Facebook', value: 5 }
        ]
    },
    portrait: {
        image: "https://via.placeholder.com/400",
        title: "Портрет учасника",
        description: "Опис учасника",
        course: {
            course_1: 1,
            course_2: 1,
            course_3: 1,
            course_4: 1,
            course_m: 1,
        },
        specialisation: {
            specialisation_1: {
                title: "specialisation_1",
                value: 1
            },
            specialisation_2: {
                title: "specialisation_1",
                value: 1
            },
            specialisation_3: {
                title: "specialisation_1",
                value: 1
            },
            specialisation_4: {
                title: "specialisation_1",
                value: 1
            },
            specialisation_5: {
                title: "specialisation_1",
                value: 1
            },

        }
    },
    offers: [
        {
            name: "offer_1",
            description: "Опис пропозиції 1",
            price: 100,
            services: [
                { title: "service 1", description: "service description" },
                { title: "service 2", description: "service description" },
                { title: "service 3", description: "service description" },

            ]
        },
        {
            name: "offer_2",
            description: "Опис пропозиції 2",
            price: 100,
            services: [
                { title: "service 1", description: "service description" },
                { title: "service 2", description: "service description" },
                { title: "service 3", description: "service description" },

            ]
        },
        {
            name: "offer_3",
            description: "Опис пропозиції 3",
            price: 100,
            services: [
                { title: "service 1", description: "service description" },
                { title: "service 2", description: "service description" },
                { title: "service 3", description: "service description" },

            ]
        },
    ],
    additionalOptions: [
        { title: "option 1", description: "description option 1", price: 1 },
        { title: "option 2", description: "description option 2", price: 2 },
        { title: "option 3", description: "description option 3", price: 3 },
    ],
    cart: {
        sales: [
            { value: 1, description: "sales 1 description" },
            { value: 2, description: "sales 2 description" },
            { value: 3, description: "sales 3 description" },
        ]
    },
    sponsors:
    {
        logos: ["revo.svg", "bearmix.svg", "lvivske rizdviane.svg", "best bus.svg",]
    },
    contacts: [
        { img: "person.png", name_surname: "ім'я прізвище", description: "Відповідальна за корпоративні зв'язки", mail: "mail@com", phone: "696969696969" },
        { img: "person.png", name_surname: "ім'я прізвище", description: "Відповідальна за корпоративні зв'язки", mail: "mail@com", phone: "696969696969" },
        { img: "person.png", name_surname: "ім'я прізвище", description: "Відповідальна за корпоративні зв'язки", mail: "mail@com", phone: "696969696969" },
    ],
    footer:{
        socialMedia: [
            { img: "facebook.png", link: "https://www.facebook.com/" },
            { img: "instagram.png", link: "https://www.instagram.com/" },
            { img: "linkedin.png", link: "https://www.linkedin.com/" },
        ],
        logo: "logo.png",
        year: 2007
    }
}