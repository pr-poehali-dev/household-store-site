import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import PopularProducts from "@/components/home/PopularProducts";
import Features from "@/components/home/Features";
import Newsletter from "@/components/home/Newsletter";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CategorySection />
        <PopularProducts />
        <Features />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
