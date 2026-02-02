import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ArticlePage } from "@/components/ArticlePage";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ArticlePage />
      <Footer />
    </main>
  );
}
