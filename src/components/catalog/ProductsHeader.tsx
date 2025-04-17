import ProductSort from "./ProductSort";

interface ProductsHeaderProps {
  totalProducts: number;
  onSortChange?: (value: string) => void;
}

const ProductsHeader = ({ totalProducts, onSortChange }: ProductsHeaderProps) => {
  return (
    <div className="hidden md:flex justify-between items-center mb-6">
      <div>
        Найдено товаров: {totalProducts}
      </div>
      <ProductSort className="w-[220px]" onSortChange={onSortChange} />
    </div>
  );
};

export default ProductsHeader;
