import { notFound } from "next/navigation";
import {BlogDetail} from "@/components/BlogDetail";
import { articles } from "@/data";

export default async function BlogPage({ params }) {
  const { id } = await params;
  console.log("id = ",id)

  const blog = articles.find((a) => a.id === Number(id));

  console.log("blog = ",blog)

  if (!blog) {
    // notFound();
    return null;
  }

  return <BlogDetail blog={blog} isAdmin={true} />;
}



