import { useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { type ProductProps } from "@/components/product/ProductCard";

// Имитация данных о популярных товарах
const popularProducts: ProductProps[] = [
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
  }
];

const PopularProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState<ProductProps[]>(popularProducts.slice(0, 4));
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    if (showAll) {
      setVisibleProducts(popularProducts.slice(0, 4));
    } else {
      setVisibleProducts(popularProducts);
    }
    setShowAll(!showAll);
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Популярные товары</h2>
          <Button variant="link" className="text-store-primary">
            Смотреть все
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            variant="outline" 
            onClick={handleShowMore}
            className="border-store-primary text-store-primary hover:bg-store-primary hover:text-white"
          >
            {showAll ? "Скрыть" : "Показать еще"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
