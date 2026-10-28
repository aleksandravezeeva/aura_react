import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';

export const categories = [
    { id: "1", title: "Верхняя одежда" },
    { id: "2", title: "Платья" },
    { id: "3", title: "Брюки" },
    { id: "4", title: "Футболки" },
    { id: "5", title: "Аксессуары" },
];

export const products = [
    {
        id: "1",
        title: "Шерстяное пальто свободного кроя",
        price: 13000,
        categoryId: "1",
        image: card5,
        description:
            "Тёплое пальто из шерсти свободного силуэта. Мягкая подкладка, глубокие карманы и лаконичный дизайн делают его удобным для повседневных образов.",
        color: "Бежевый",
        color_block: "#F5EBE6",
    },
    {
        id: "2",
        title: "Повседневное трикотажное платье",
        price: 5000,
        categoryId: "2",
        image: card1,
        description:
            "Комфортное трикотажное платье с мягкой текстурой. Свободный крой не сковывает движения и подходит для работы, прогулок и встреч с друзьями.",
        color: "Тёмно-коричневое",
        color_block: "#382A25",

    },
    {
        id: "3",
        title: "Прямые джинсы",
        price: 7000,
        categoryId: "3",
        image: card2,
        description:
            "Классические прямые джинсы из плотного денима. Универсальная посадка, устойчивый цвет и минимум декора — легко сочетаются с любой одеждой.",
        color: "Голубой деним",
        color_block: "#6B7D8D",
    },
    {
        id: "4",
        title: "Хлопковая куртка с карманами",
        price: 6000,
        categoryId: "1",
        image: card4,
        description:
            "Лёгкая куртка из хлопка с практичными карманами. Подходит для прохладной погоды, дополняет повседневный образ и удобна в носке.",
        color: "Хакки",
        color_block: "#6C6A50",
    },
    {
        id: "5",
        title: "Повседневная холщовая сумка",
        price: 4000,
        categoryId: "5",
        image: card3,
        description:
            "Вместительная сумка из плотного холста. Прочные ручки, просторное отделение и минималистичный дизайн для учёбы, работы и прогулок.",
        color: "Молочный",
        color_block: "#C1B29F",
    },
];