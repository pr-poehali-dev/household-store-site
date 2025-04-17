import { ProductProps } from "@/components/product/ProductCard";

// Имитация данных о всех товарах
export const products: ProductProps[] = [
  {
    id: "1",
    name: "Набор кастрюль с антипригарным покрытием",
    price: 2990,
    oldPrice: 3590,
    image: "/placeholder.svg",
    category: "Для кухни",
    isPopular: true
  },
  {
    id: "2",
    name: "Органайзер для ванной комнаты",
    price: 890,
    image: "/placeholder.svg",
    category: "Для ванной",
    isNew: true
  },
  {
    id: "3",
    name: "Набор для уборки с отжимом",
    price: 1290,
    oldPrice: 1690,
    image: "/placeholder.svg",
    category: "Уборка",
    isSale: true
  },
  {
    id: "4",
    name: "Контейнеры для хранения продуктов, 5 шт.",
    price: 790,
    image: "/placeholder.svg",
    category: "Хранение",
    isPopular: true
  },
  {
    id: "5",
    name: "Садовый шланг растягивающийся, 30 м",
    price: 1490,
    oldPrice: 1990,
    image: "/placeholder.svg",
    category: "Садовые товары",
    isSale: true
  },
  {
    id: "6",
    name: "Набор отверток, 12 шт.",
    price: 990,
    image: "/placeholder.svg",
    category: "Инструменты",
    isNew: true
  },
  {
    id: "7",
    name: "Складная разделочная доска",
    price: 590,
    image: "/placeholder.svg",
    category: "Для кухни",
    isPopular: true
  },
  {
    id: "8",
    name: "Корзина для белья",
    price: 790,
    image: "/placeholder.svg",
    category: "Для ванной"
  },
  {
    id: "9",
    name: "Швабра с распылителем",
    price: 1290,
    image: "/placeholder.svg",
    category: "Уборка",
    isNew: true
  },
  {
    id: "10",
    name: "Пластиковые ящики для хранения, 3 шт.",
    price: 1090,
    oldPrice: 1290,
    image: "/placeholder.svg",
    category: "Хранение",
    isSale: true
  },
  {
    id: "11",
    name: "Садовые ножницы",
    price: 790,
    image: "/placeholder.svg",
    category: "Садовые товары"
  },
  {
    id: "12",
    name: "Электрическая отвертка",
    price: 1990,
    oldPrice: 2490,
    image: "/placeholder.svg",
    category: "Инструменты",
    isSale: true,
    isPopular: true
  }
];

// Функция для фильтрации товаров по категории
export const getProductsByCategory = (category: string) => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

// Функция для получения товара по ID
export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

// Функция для получения популярных товаров
export const getPopularProducts = () => {
  return products.filter(product => product.isPopular);
};

// Функция для получения товаров со скидкой
export const getSaleProducts = () => {
  return products.filter(product => product.isSale);
};

// Функция для получения новых товаров
export const getNewProducts = () => {
  return products.filter(product => product.isNew);
};
