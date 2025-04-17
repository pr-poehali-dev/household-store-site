import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProductById, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { ShoppingCart, Heart, Share2, Check, Minus, Plus, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-16 container">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
            <p className="mb-8">К сожалению, данный товар не существует или был удален.</p>
            <Button asChild>
              <Link to="/catalog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Вернуться в каталог
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Получаем похожие товары из той же категории
  const similarProducts = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4);

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container">
          {/* Хлебные крошки */}
          <div className="mb-6 text-sm flex items-center gap-2">
            <Link to="/" className="text-gray-500 hover:text-store-primary">Главная</Link>
            <span className="text-gray-500">/</span>
            <Link to="/catalog" className="text-gray-500 hover:text-store-primary">Каталог</Link>
            <span className="text-gray-500">/</span>
            <Link to={`/catalog?category=${product.category}`} className="text-gray-500 hover:text-store-primary">
              {product.category}
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">{product.name}</span>
          </div>
          
          {/* Информация о товаре */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Изображение товара */}
            <div className="bg-white p-4 rounded-lg border">
              <div className="relative">
                {product.isNew && (
                  <Badge className="absolute top-2 left-2 z-10 bg-store-accent">Новинка</Badge>
                )}
                {product.isPopular && (
                  <Badge className="absolute top-2 left-2 z-10 bg-store-secondary text-store-dark">Популярное</Badge>
                )}
                {product.isSale && (
                  <Badge className="absolute top-2 left-2 z-10 bg-red-500">Скидка</Badge>
                )}
                <img 
                  src={product.image || "/placeholder.svg"} 
                  alt={product.name} 
                  className="w-full h-auto rounded-lg aspect-square object-cover"
                />
              </div>
            </div>
            
            {/* Описание товара */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                {product.name}
              </h1>
              
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-green-100 text-green-700 rounded-full px-2 py-1 text-xs flex items-center">
                    <Check size={14} className="mr-1" /> В наличии
                  </div>
                  <div className="text-sm text-gray-500">Код товара: {product.id}</div>
                </div>
              </div>
              
              {/* Цена */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold">{product.price.toLocaleString()} ₽</span>
                {product.oldPrice && (
                  <span className="text-gray-500 line-through text-lg">
                    {product.oldPrice.toLocaleString()} ₽
                  </span>
                )}
                {product.oldPrice && (
                  <Badge className="bg-red-500">
                    Скидка {Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </Badge>
                )}
              </div>
              
              {/* Краткое описание */}
              <div className="mb-8">
                <p className="text-gray-700 mb-4">
                  Качественный товар для вашего дома из категории "{product.category}". 
                  Идеально подойдет для повседневного использования и сделает ваш быт комфортнее.
                </p>
                <p className="text-gray-700">
                  Преимущества товара: надежность, удобство использования, 
                  долгий срок службы и современный дизайн.
                </p>
              </div>
              
              {/* Добавление в корзину */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={decrementQuantity}
                      className="h-10 rounded-r-none"
                    >
                      <Minus size={16} />
                    </Button>
                    <div className="w-12 h-10 flex items-center justify-center font-medium">
                      {quantity}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={incrementQuantity}
                      className="h-10 rounded-l-none"
                    >
                      <Plus size={16} />
                    </Button>
                  </div>
                  
                  <Button className="flex-1 bg-store-primary hover:bg-store-primary/90">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Добавить в корзину
                  </Button>
                </div>
                
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1">
                    <Heart className="mr-2 h-4 w-4" />
                    В избранное
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Вкладки с подробной информацией */}
          <Tabs defaultValue="description" className="mb-16">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="characteristics">Характеристики</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="p-6 border rounded-b-lg bg-white mt-2">
              <h3 className="text-xl font-semibold mb-4">Описание товара</h3>
              <p className="mb-4">
                Данный товар отличается высоким качеством материалов и сборки, 
                что гарантирует его долгую и надежную службу. Он прост в использовании 
                и подойдет как для новичков, так и для опытных пользователей.
              </p>
              <p className="mb-4">
                Товар изготовлен из экологически чистых материалов, безопасных для здоровья 
                всех членов семьи. Он обладает стильным современным дизайном, который впишется 
                в любой интерьер и станет его украшением.
              </p>
              <p>
                Благодаря компактным размерам, товар не займет много места и будет всегда под рукой, 
                когда он вам понадобится. При регулярном использовании вы оцените его удобство 
                и функциональность.
              </p>
            </TabsContent>
            <TabsContent value="characteristics" className="p-6 border rounded-b-lg bg-white mt-2">
              <h3 className="text-xl font-semibold mb-4">Характеристики</h3>
              <div className="space-y-2">
                <div className="grid grid-cols-2 py-2 border-b">
                  <div className="text-gray-600">Категория</div>
                  <div>{product.category}</div>
                </div>
                <div className="grid grid-cols-2 py-2 border-b">
                  <div className="text-gray-600">Артикул</div>
                  <div>{product.id}</div>
                </div>
                <div className="grid grid-cols-2 py-2 border-b">
                  <div className="text-gray-600">Материал</div>
                  <div>Высококачественный пластик</div>
                </div>
                <div className="grid grid-cols-2 py-2 border-b">
                  <div className="text-gray-600">Цвет</div>
                  <div>Белый</div>
                </div>
                <div className="grid grid-cols-2 py-2 border-b">
                  <div className="text-gray-600">Размеры</div>
                  <div>30 x 20 x 15 см</div>
                </div>
                <div className="grid grid-cols-2 py-2 border-b">
                  <div className="text-gray-600">Вес</div>
                  <div>0.5 кг</div>
                </div>
                <div className="grid grid-cols-2 py-2">
                  <div className="text-gray-600">Гарантия</div>
                  <div>12 месяцев</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="p-6 border rounded-b-lg bg-white mt-2">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Отзывы о товаре</h3>
                <Button>Написать отзыв</Button>
              </div>
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">У этого товара пока нет отзывов.</p>
                <p className="text-gray-500">Будьте первым, кто оставит отзыв!</p>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Похожие товары */}
          {similarProducts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Похожие товары</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
