import { Truck, CreditCard, Clock, LifeBuoy } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-10 h-10 text-store-primary" />,
    title: "Быстрая доставка",
    description: "Доставляем заказы по всей России. Бесплатная доставка от 3000 ₽"
  },
  {
    icon: <CreditCard className="w-10 h-10 text-store-primary" />,
    title: "Удобная оплата",
    description: "Оплачивайте покупки удобным для вас способом"
  },
  {
    icon: <Clock className="w-10 h-10 text-store-primary" />,
    title: "Гарантия качества",
    description: "Гарантируем качество всех представленных в каталоге товаров"
  },
  {
    icon: <LifeBuoy className="w-10 h-10 text-store-primary" />,
    title: "Поддержка 24/7",
    description: "Служба поддержки работает круглосуточно без выходных"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Наши преимущества</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-store-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
