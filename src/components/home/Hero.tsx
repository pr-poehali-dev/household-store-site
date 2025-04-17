import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-store-dark to-store-primary text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Всё для дома и сада в одном месте
            </h1>
            <p className="text-lg mb-8 text-gray-100">
              Большой выбор хозяйственных товаров для дома, кухни, ванной комнаты 
              и сада по выгодным ценам.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-store-accent hover:bg-store-accent/90 text-white"
                asChild
              >
                <Link to="/catalog">
                  Перейти в каталог
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-store-dark"
                asChild
              >
                <Link to="/catalog?sale=true">
                  Скидки и акции
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -left-20 -top-10 w-40 h-40 bg-store-accent/30 rounded-full blur-3xl"></div>
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-store-secondary/30 rounded-full blur-3xl"></div>
            <img 
              src="/placeholder.svg" 
              alt="Хозяйственные товары" 
              className="relative z-10 rounded-lg shadow-xl max-h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden">
        <div className="w-full h-full bg-store-accent/10 skew-x-12 transform origin-top"></div>
      </div>
    </section>
  );
};

export default Hero;
