import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductSortProps {
  onSortChange?: (value: string) => void;
  className?: string;
}

const ProductSort = ({ onSortChange, className = "" }: ProductSortProps) => {
  return (
    <Select onValueChange={onSortChange}>
      <SelectTrigger className={`${className}`}>
        <SelectValue placeholder="Сортировка" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="price_asc">Сначала дешевые</SelectItem>
        <SelectItem value="price_desc">Сначала дорогие</SelectItem>
        <SelectItem value="popular">По популярности</SelectItem>
        <SelectItem value="new">Сначала новинки</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default ProductSort;
