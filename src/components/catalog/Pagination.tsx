import { Button } from "@/components/ui/button";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  // Создаем массив страниц для отображения
  const createPaginationItems = () => {
    // Для простоты отобразим первые 3 страницы, многоточие и последнюю страницу
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      return [1, 2, 3, "...", totalPages];
    }
  };

  const paginationItems = createPaginationItems();

  return (
    <div className="flex justify-center mt-10">
      {paginationItems.map((item, index) => (
        item === "..." ? (
          <Button key={`ellipsis-${index}`} variant="ghost" className="mx-1" disabled>
            ...
          </Button>
        ) : (
          <Button
            key={`page-${item}`}
            variant={currentPage === item ? "default" : "outline"}
            className="mx-1"
            onClick={() => typeof item === "number" && onPageChange(item)}
          >
            {item}
          </Button>
        )
      ))}
    </div>
  );
};

export default Pagination;
