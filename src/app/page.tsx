"use client";
import About from "@/components/About/About";
import CarouselComponent from "@/components/Carousel/Carousel";
import FilterBar from "@/components/Filters/FilterBar/FilterBar";
import Navbar from "@/components/Navbar/Header";
import ProductList from "@/components/Product/ProductList/ProductList";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { MyContextProvider } from "@/contexts/FilterContext";

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <main>
        <CarouselComponent />
        <About />
        <FilterBar />
        <ProductList />
      </main>
    </QueryClientProvider>
  );
}
