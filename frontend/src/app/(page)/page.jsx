import { ArticlePage } from "@/components/ArticlePage";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex-1 bg-background">
      {/* <Header /> */}
      <Hero />
      <ArticlePage />
      {/* <Footer /> */}
    </main>
  );
}
