// import { articles } from "@/data"
import { ArticleCard } from "./ArticleCard";
import { API_BASE_URL } from "@/lib/url";

export async function ArticlePage() {
  const res = await fetch(`${API_BASE_URL}/api/blogs`);
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const articles = await res.json();
  //  console.log("articles = ", articles);
  return (
    <section id="blogs" className="max-w-7xl mx-auto px-6 pb-16 scroll-mt-35">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article}/>
        ))}
      </div>
    </section>
  );
}
