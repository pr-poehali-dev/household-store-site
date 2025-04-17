import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SlidersHorizontal } from "lucide-react";
import { CategoryFilter } from "./CategoryFilter";
import { SpecialOffersFilter } from "./SpecialOffersFilter";

interface FilterPanelProps {
  priceRange: { min: number; max: number };
  setPriceRange: React.Dispatch<React.SetStateAction<{ min: number; max: number }>>;
  onApplyPriceFilter: () => void;
  onResetFilters: () => void;
}

const FilterPanel = ({
  priceRange,
  setPriceRange,
  onApplyPriceFilter,
  onResetFilters
}: FilterPanelProps) => {
  return (
    <div className="bg-white rounded-lg border p-6">
      <div className="hidden md:flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <SlidersHorizontal size={18} />
          Фильтры
        </h2>
        <Button variant="ghost" size="sm" onClick={onResetFilters}>
          Сбросить
        </Button>
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
          onClick={onApplyPriceFilter}
        >
          Применить
        </Button>
      </div>
      
      {/* Фильтр по категориям */}
      <CategoryFilter />
      
      {/* Фильтр по специальным предложениям */}
      <SpecialOffersFilter />
    </div>
  );
};

export default FilterPanel;
