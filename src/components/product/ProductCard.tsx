import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
  isSale?: boolean;
  rating?: number;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  oldPrice, 
  image, 
  category, 
  isNew = false,
  isPopular = false,
  isSale = false 
}: ProductProps) => {
  return (
    <div className="group relative bg-white border rounded-lg overflow-hidden transition-shadow hover:shadow-md">
      {/* Бейджи */}
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
        {isNew && (
          <Badge className="bg-store-accent">Новинка</Badge>
        )}
        {isPopular && (
          <Badge className="bg-store-secondary text-store-dark">Популярное</Badge>
        )}
        {isSale && (
          <Badge className="bg-red-500">Скидка</Badge>
        )}
      </div>
      
      {/* Изображение */}
      <Link to={`/product/${id}`} className="block aspect-square overflow-hidden">
        <img 
          src={image || "/placeholder.svg"} 
          alt={name} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </Link>
      
      {/* Избранное */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white rounded-full w-8 h-8"
      >
        <Heart className="w-4 h-4" />
      </Button>
      
      {/* Информация о товаре */}
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`} className="block mb-2">
          <h3 className="font-medium line-clamp-2 h-12 hover:text-store-primary transition-colors">
            {name}
          </h3>
        </Link>
        
        {/* Цена */}
        <div className="flex items-baseline gap-2 mb-3">
          <span className="font-bold text-lg">{price.toLocaleString()} ₽</span>
          {oldPrice && (
            <span className="text-gray-500 line-through text-sm">
              {oldPrice.toLocaleString()} ₽
            </span>
          )}
        </div>
        
        {/* Кнопка добавления в корзину */}
        <Button className="w-full bg-store-primary hover:bg-store-primary/90">
          <ShoppingCart className="mr-2 h-4 w-4" />
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
