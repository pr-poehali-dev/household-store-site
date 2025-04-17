import { ProductProps } from "@/components/product/ProductCard";
import ProductCard from "@/components/product/ProductCard";

interface ProductGridProps {
  products: ProductProps[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  if (products.length === 0) {
    return <EmptyProductState />;
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;

const EmptyProductState = () => (
  <div className="text-center py-16">
    <h3 className="text-xl font-medium mb-4">Товары не найдены</h3>
    <p className="text-gray-600 mb-8">
      Попробуйте изменить параметры фильтрации или выбрать другую категорию
    </p>
    <a href="/catalog" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
      Вернуться в каталог
    </a>
  </div>
);
