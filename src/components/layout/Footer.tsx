import { Link } from "react-router-dom";
import { PhoneCall, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-store-dark text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Блок с информацией о компании */}
          <div>
            <h3 className="text-xl font-bold mb-4">ДомоСтрой</h3>
            <p className="text-gray-300 mb-4">
              Магазин хозяйственных товаров для дома, сада и огорода. 
              У нас вы найдете всё необходимое для комфортной жизни.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-store-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-store-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-store-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Блок с категориями */}
          <div>
            <h3 className="text-xl font-bold mb-4">Категории</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog?category=kitchen" className="hover:text-store-accent transition-colors">Для кухни</Link></li>
              <li><Link to="/catalog?category=bathroom" className="hover:text-store-accent transition-colors">Для ванной</Link></li>
              <li><Link to="/catalog?category=cleaning" className="hover:text-store-accent transition-colors">Уборка</Link></li>
              <li><Link to="/catalog?category=storage" className="hover:text-store-accent transition-colors">Хранение</Link></li>
              <li><Link to="/catalog?category=garden" className="hover:text-store-accent transition-colors">Садовые товары</Link></li>
              <li><Link to="/catalog?category=tools" className="hover:text-store-accent transition-colors">Инструменты</Link></li>
            </ul>
          </div>
          
          {/* Блок с информацией */}
          <div>
            <h3 className="text-xl font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-store-accent transition-colors">О компании</Link></li>
              <li><Link to="/delivery" className="hover:text-store-accent transition-colors">Доставка и оплата</Link></li>
              <li><Link to="/return" className="hover:text-store-accent transition-colors">Возврат и обмен</Link></li>
              <li><Link to="/faq" className="hover:text-store-accent transition-colors">Частые вопросы</Link></li>
              <li><Link to="/contacts" className="hover:text-store-accent transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          {/* Блок с контактами */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <PhoneCall size={18} className="text-store-accent" />
                <a href="tel:88005553535" className="hover:text-store-accent transition-colors">8 (800) 555-35-35</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-store-accent" />
                <a href="mailto:info@domostroy.ru" className="hover:text-store-accent transition-colors">info@domostroy.ru</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-store-accent" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </li>
              <li>
                <p className="text-gray-300">Ежедневно с 9:00 до 21:00</p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Копирайт */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© 2024 ДомоСтрой. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
