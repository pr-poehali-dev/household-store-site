import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const CategoryFilter = () => {
  const categories = [
    { id: "kitchen", name: "Для кухни" },
    { id: "bathroom", name: "Для ванной" },
    { id: "cleaning", name: "Уборка" },
    { id: "storage", name: "Хранение" },
    { id: "garden", name: "Садовые товары" },
    { id: "tools", name: "Инструменты" }
  ];

  return (
    <div className="mb-6">
      <h3 className="font-medium mb-4">Категории</h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center space-x-2">
            <Checkbox id={category.id} />
            <Label htmlFor={category.id}>{category.name}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};
