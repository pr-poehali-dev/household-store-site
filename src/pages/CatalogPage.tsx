import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FilterPanel from "@/components/catalog/FilterPanel";
import ProductGrid from "@/components/catalog/ProductGrid";
import ProductsHeader from "@/components/catalog/ProductsHeader";
import Pagination from "@/components/catalog/Pagination";
import MobileFilterToggle from "@/components/catalog/MobileFilterToggle";
import ProductSort from "@/components/catalog/ProductSort";
import { useCatalogFilters } from "@/hooks/useCatalogFilters";

const CatalogPage = () => {
  const [showFilters, setShowFilters] = useState(false);
  
  const {
    filteredProducts,
    priceRange,
    setPriceRange,
    currentPage,
    setCurrentPage,
    handleFilterByPrice,
    handleSortChange,
    resetFilters,
    getPageTitle,
    totalPages
  } = useCatalogFilters();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">{getPageTitle()}</h1>
          
          {/* Мобильный фильтр и сортировка */}
          <div className="flex items-center justify-between mb-6 md:hidden">
            <MobileFilterToggle 
              showFilters={showFilters} 
              onToggle={() => setShowFilters(!showFilters)} 
            />
            <ProductSort className="w-[180px]" onSortChange={handleSortChange} />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Сайдбар с фильтрами */}
            <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden'} md:block`}>
              <FilterPanel 
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                onApplyPriceFilter={handleFilterByPrice}
                onResetFilters={resetFilters}
              />
            </div>
            
            {/* Каталог товаров */}
            <div className="md:w-3/4">
              {/* Десктоп сортировка */}
              <ProductsHeader 
                totalProducts={filteredProducts.length} 
                onSortChange={handleSortChange}
              />
              
              {/* Товары */}
              <ProductGrid products={filteredProducts} />
              
              {/* Пагинация */}
              {filteredProducts.length > 0 && (
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CatalogPage;
