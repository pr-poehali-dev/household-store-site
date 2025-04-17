import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  link: string;
}

const categories: Category[] = [
  {
    id: "kitchen",
    name: "Для кухни",
    image: "/placeholder.svg",
    description: "Посуда, приборы и принадлежности для готовки",
    link: "/catalog?category=kitchen"
  },
  {
    id: "bathroom",
    name: "Для ванной",
    image: "/placeholder.svg",
    description: "Аксессуары и принадлежности для ванной комнаты",
    link: "/catalog?category=bathroom"
  },
  {
    id: "cleaning",
    name: "Уборка",
    image: "/placeholder.svg",
    description: "Всё необходимое для чистоты в доме",
    link: "/catalog?category=cleaning"
  },
  {
    id: "storage",
    name: "Хранение",
    image: "/placeholder.svg",
    description: "Органайзеры, контейнеры и системы хранения",
    link: "/catalog?category=storage"
  },
  {
    id: "garden",
    name: "Садовые товары",
    image: "/placeholder.svg",
    description: "Инвентарь и аксессуары для сада и огорода",
    link: "/catalog?category=garden"
  },
  {
    id: "tools",
    name: "Инструменты",
    image: "/placeholder.svg",
    description: "Бытовые инструменты для дома и сада",
    link: "/catalog?category=tools"
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Категории товаров</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              to={category.link} 
              key={category.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-store-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
