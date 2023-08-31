"use client";
import About from "@/components/About/About";
import CarouselComponent from "@/components/Carousel/Carousel";
import FilterBar from "@/components/Filters/FilterBar/FilterBar";
import ProductList from "@/components/Product/ProductList/ProductList";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main>
        <CarouselComponent />
        <About
          title="Otaku Shop
"
          text="Bem-vindo! à nossa loja online, onde oferecemos produtos de alta qualidade a preços acessíveis. Temos uma ampla variedade de categorias para que você possa encontrar o que precisa com facilidade. Nos esforçamos para fornecer um serviço excepcional e esperamos que encontre tudo o que precisa em nossa loja online. Obrigado por nos escolher!"
        />
        <FilterBar />
        <ProductList />
      </main>
    </QueryClientProvider>
  );
}
