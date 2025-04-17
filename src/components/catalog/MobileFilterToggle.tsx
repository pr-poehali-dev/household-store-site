import { Button } from "@/components/ui/button";
import { Filter, ChevronUp, ChevronDown } from "lucide-react";

interface MobileFilterToggleProps {
  showFilters: boolean;
  onToggle: () => void;
}

const MobileFilterToggle = ({ showFilters, onToggle }: MobileFilterToggleProps) => {
  return (
    <Button 
      variant="outline" 
      className="flex items-center gap-2"
      onClick={onToggle}
    >
      <Filter size={16} />
      Фильтры
      {showFilters ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </Button>
  );
};

export default MobileFilterToggle;
