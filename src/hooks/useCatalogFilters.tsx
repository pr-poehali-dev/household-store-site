import { useState, useEffect } from "react";
import { ProductProps } from "@/components/product/ProductCard";
import { products, getProductsByCategory, getSaleProducts } from "@/data/products";
import { useSearchParams } from "react-router-dom";

export type SortOption = "price_asc" | "price_desc" | "popular" | "new" | "";

export const useCatalogFilters = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const isSale = searchParams.get("sale") === "true";
  
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>(products);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 5000 });
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<SortOption>("");

  // Применить фильтры при изменении URL-параметров
  useEffect(() => {
    let result = products;
    
    if (categoryParam) {
      result = getProductsByCategory(categoryParam);
    } else if (isSale) {
      result = getSaleProducts();
    }
    
    // Сбросить страницу к первой при изменении фильтров
    setCurrentPage(1);
    setFilteredProducts(applySorting(result, sortOption));
  }, [categoryParam, isSale, sortOption]);

  // Обработчик для фильтрации по цене
  const handleFilterByPrice = () => {
    let result = products;
    
    if (categoryParam) {
      result = getProductsByCategory(categoryParam);
    } else if (isSale) {
      result = getSaleProducts();
    }
    
    result = result.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    setFilteredProducts(applySorting(result, sortOption));
    setCurrentPage(1);
  };

  // Обработчик для сортировки
  const handleSortChange = (value: string) => {
    setSortOption(value as SortOption);
  };

  // Функция для сброса всех фильтров
  const resetFilters = () => {
    setPriceRange({ min: 0, max: 5000 });
    setSortOption("");
    setCurrentPage(1);
    
    let result = products;
    if (categoryParam) {
      result = getProductsByCategory(categoryParam);
    } else if (isSale) {
      result = getSaleProducts();
    }
    
    setFilteredProducts(result);
  };

  // Получить название страницы на основе текущих фильтров
  const getPageTitle = () => {
    if (categoryParam) {
      return `Товары категории: ${categoryParam}`;
    } else if (isSale) {
      return "Товары со скидкой";
    }
    return "Каталог товаров";
  };

  // Применить сортировку к массиву товаров
  const applySorting = (products: ProductProps[], sortOption: SortOption) => {
    if (!sortOption) return products;
    
    let sortedProducts = [...products];
    
    switch (sortOption) {
      case "price_asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        sortedProducts.sort((a, b) => (a.isPopular === b.isPopular) ? 0 : a.isPopular ? -1 : 1);
        break;
      case "new":
        sortedProducts.sort((a, b) => (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1);
        break;
      default:
        break;
    }
    
    return sortedProducts;
  };

  return {
    filteredProducts,
    priceRange,
    setPriceRange,
    currentPage,
    setCurrentPage,
    handleFilterByPrice,
    handleSortChange,
    resetFilters,
    getPageTitle,
    totalPages: Math.ceil(filteredProducts.length / 12) // Предполагая 12 товаров на странице
  };
};
