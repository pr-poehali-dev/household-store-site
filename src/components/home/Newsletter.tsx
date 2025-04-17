import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-16 bg-store-primary text-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Подпишитесь на рассылку</h2>
          <p className="mb-8">
            Получайте первыми информацию о новинках, акциях и специальных предложениях
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Ваш email" 
              className="bg-white border-transparent focus:border-store-accent"
            />
            <Button className="bg-store-accent hover:bg-store-accent/90 text-white sm:flex-shrink-0">
              Подписаться
            </Button>
          </div>
          
          <p className="text-sm mt-4 text-white/70">
            Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
