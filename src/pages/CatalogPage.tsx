import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products, getProductsByCategory, getSaleProducts } from "@/data/products";
import { Filter, SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react";

const CatalogPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const isSale = searchParams.get("sale") === "true";
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 5000 });

  useEffect(() => {
    let result = products;
    
    if (categoryParam) {
      result = getProductsByCategory(categoryParam);
    } else if (isSale) {
      result = getSaleProducts();
    }
    
    setFilteredProducts(result);
  }, [categoryParam, isSale]);

  const handleFilterByPrice = () => {
    const filtered = products.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );
    setFilteredProducts(filtered);
  };

  const pageTitle = categoryParam 
    ? `Товары категории: ${categoryParam}` 
    : isSale 
      ? "Товары со скидкой" 
      : "Каталог товаров";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">{pageTitle}</h1>
          
          {/* Мобильный фильтр и сортировка */}
          <div className="flex items-center justify-between mb-6 md:hidden">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={16} />
              Фильтры
              {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </Button>
            
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Сортировка" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price_asc">Сначала дешевые</SelectItem>
                <SelectItem value="price_desc">Сначала дорогие</SelectItem>
                <SelectItem value="popular">По популярности</SelectItem>
                <SelectItem value="new">Сначала новинки</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Сайдбар с фильтрами */}
            <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden'} md:block`}>
              <div className="bg-white rounded-lg border p-6">
                <div className="hidden md:flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <SlidersHorizontal size={18} />
                    Фильтры
                  </h2>
                  <Button variant="ghost" size="sm">Сбросить</Button>
                </div>
                
                {/* Фильтр по цене */}
                <div className="mb-6">
                  <h3 className="font-medium mb-4">Цена, ₽</h3>
                  <div className="flex gap-4 mb-4">
                    <div className="w-1/2">
                      <Input 
                        type="number" 
                        placeholder="От" 
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({...priceRange, min: Number(e.target.value)})}
                      />
                    </div>
                    <div className="w-1/2">
                      <Input 
                        type="number" 
                        placeholder="До" 
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})}
                      />
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleFilterByPrice}
                  >
                    Применить
                  </Button>
                </div>
                
                {/* Фильтр по категориям */}
                <div className="mb-6">
                  <h3 className="font-medium mb-4">Категории</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="kitchen" />
                      <Label htmlFor="kitchen">Для кухни</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="bathroom" />
                      <Label htmlFor="bathroom">Для ванной</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="cleaning" />
                      <Label htmlFor="cleaning">Уборка</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="storage" />
                      <Label htmlFor="storage">Хранение</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="garden" />
                      <Label htmlFor="garden">Садовые товары</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="tools" />
                      <Label htmlFor="tools">Инструменты</Label>
                    </div>
                  </div>
                </div>
                
                {/* Фильтр по специальным предложениям */}
                <div>
                  <h3 className="font-medium mb-4">Специальные предложения</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sale" />
                      <Label htmlFor="sale">Скидки</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="new" />
                      <Label htmlFor="new">Новинки</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="popular" />
                      <Label htmlFor="popular">Популярные</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Каталог товаров */}
            <div className="md:w-3/4">
              {/* Десктоп сортировка */}
              <div className="hidden md:flex justify-between items-center mb-6">
                <div>
                  Найдено товаров: {filteredProducts.length}
                </div>
                <Select>
                  <SelectTrigger className="w-[220px]">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price_asc">Сначала дешевые</SelectItem>
                    <SelectItem value="price_desc">Сначала дорогие</SelectItem>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="new">Сначала новинки</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {/* Товары */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium mb-4">Товары не найдены</h3>
                  <p className="text-gray-600 mb-8">
                    Попробуйте изменить параметры фильтрации или выбрать другую категорию
                  </p>
                  <Button>Вернуться в каталог</Button>
                </div>
              )}
              
              {/* Пагинация */}
              {filteredProducts.length > 0 && (
                <div className="flex justify-center mt-10">
                  <Button variant="outline" className="mx-1">1</Button>
                  <Button variant="outline" className="mx-1">2</Button>
                  <Button variant="outline" className="mx-1">3</Button>
                  <Button variant="ghost" className="mx-1" disabled>...</Button>
                  <Button variant="outline" className="mx-1">10</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CatalogPage;
