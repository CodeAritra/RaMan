"use client";

import { useAuth } from "@/context/AuthContext";
import { API_BASE_URL } from "@/lib/url";
import { Calendar, Clock, Pencil, Trash2, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function ArticleCard({ article }) {
  const router = useRouter();

  const { token, isLoggedIn } = useAuth();

  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this article?");
    if (!confirmed) return;

    const toastId = toast.loading("Deleting article...");

    try {
      const res = await fetch(`${API_BASE_URL}/api/blogs/${article._id}`, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      });

      if (!res.ok) {
        throw new Error("Failed to delete article");
      }

      toast.success("Article deleted", { id: toastId });
      router.refresh();
    } catch (error) {
      console.error("Delete error:", error);
      toast.error(error.message || "Something went wrong", {
        id: toastId,
      });
    }
  };

  return (
    <div className="flex flex-col group transition-transform duration-300 ease-out hover:scale-[1.02] mb-13">
      {/* Image Container */}
      <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gray-200">
        {/* Actual Image */}
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />

        {/* overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3))",
          }}
        />

        {/* Category Badge */}
        {/* <div
          className="absolute top-4 left-4 px-3 py-1 rounded font-bold text-xs text-white z-10"
          style={{ backgroundColor: article.categoryBg }}
        >
          {article.category}
        </div> */}
      </div>

      {/* Info */}
      <div className="flex items-center gap-4 text-sm mb-4">
        <div className="flex items-center gap-1 text-accent">
          <Calendar className="w-4 h-4" />
          <span className="font-semibold text-sm">
            {new Date(article.updatedAt).toLocaleDateString("en-IN")}
          </span>
        </div>
        {/* <div className="flex items-center gap-1 text-accent">
          <Clock className="w-4 h-4" />
          <span className="font-semibold">{article.readTime}</span>
        </div> */}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary">
        {article.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-6 grow">
        {article.content.slice(0, 150) + "..."}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <Link href={`/blog/${article._id}`}>
          <button className="flex items-center gap-2 text-primary font-semibold cursor-pointer">
            Read Article
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>
        </Link>
        {isLoggedIn && (
          <div className="flex gap-3">
            <Link href={`/blog/post?id=${article._id}`}>
              <button className="p-2 bg-muted hover:bg-primary hover:text-white rounded-lg transition text-foreground cursor-pointer">
                <Pencil className="w-4 h-4" />
              </button>
            </Link>
            <button className="p-2 bg-muted hover:bg-destructive hover:text-white rounded-lg transition text-destructive cursor-pointer">
              <Trash2 className="w-4 h-4" onClick={handleDelete} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
