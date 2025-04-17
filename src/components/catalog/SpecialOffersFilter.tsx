import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const SpecialOffersFilter = () => {
  const offers = [
    { id: "sale", name: "Скидки" },
    { id: "new", name: "Новинки" },
    { id: "popular", name: "Популярные" }
  ];

  return (
    <div>
      <h3 className="font-medium mb-4">Специальные предложения</h3>
      <div className="space-y-2">
        {offers.map((offer) => (
          <div key={offer.id} className="flex items-center space-x-2">
            <Checkbox id={offer.id} />
            <Label htmlFor={offer.id}>{offer.name}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};
