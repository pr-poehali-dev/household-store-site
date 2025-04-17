import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Menu, X, Phone } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

const categories = [
  { name: "Для кухни", link: "/catalog?category=kitchen" },
  { name: "Для ванной", link: "/catalog?category=bathroom" },
  { name: "Уборка", link: "/catalog?category=cleaning" },
  { name: "Хранение", link: "/catalog?category=storage" },
  { name: "Инструменты", link: "/catalog?category=tools" }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      {/* Верхняя полоса */}
      <div className="bg-store-primary text-white py-2">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>8 (800) 555-35-35</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-4 text-sm">
              <li><a href="/about">О компании</a></li>
              <li><a href="/delivery">Доставка</a></li>
              <li><a href="/contacts">Контакты</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Основная навигация */}
      <div className="container py-4">
        <div className="flex justify-between items-center">
          {/* Логотип */}
          <Link to="/" className="font-bold text-2xl text-store-dark">
            Копеечка
          </Link>

          {/* Поиск - скрывается на мобильных */}
          <div className="hidden md:flex relative w-1/3">
            <Input 
              type="text" 
              placeholder="Поиск товаров..." 
              className="pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>

          {/* Корзина и мобильное меню */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="relative">
              <ShoppingCart />
              <span className="absolute -top-1 -right-1 bg-store-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
            
            {/* Кнопка мобильного меню */}
            <Button 
              variant="ghost" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Категории - десктоп версия */}
        <div className="hidden md:block mt-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Каталог товаров</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={category.link}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{category.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/catalog" className="px-4 py-2 hover:text-store-primary">
                  Акции
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/catalog" className="px-4 py-2 hover:text-store-primary">
                  Новинки
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/catalog" className="px-4 py-2 hover:text-store-primary">
                  Популярное
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 absolute w-full z-50">
          <div className="container">
            <div className="relative mb-4">
              <Input 
                type="text" 
                placeholder="Поиск товаров..." 
                className="pr-10"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <div className="space-y-4">
              <div className="font-medium">Категории:</div>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link 
                      to={category.link}
                      className="block py-2 hover:text-store-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="border-t pt-4 mt-4">
                <ul className="space-y-2">
                  <li><a href="/about" className="block py-2">О компании</a></li>
                  <li><a href="/delivery" className="block py-2">Доставка</a></li>
                  <li><a href="/contacts" className="block py-2">Контакты</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;