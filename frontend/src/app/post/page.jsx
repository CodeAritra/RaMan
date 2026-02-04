'use client'

import React from "react";
import { PostForm } from "@/components/PostForm";
import { articles } from "@/data";
import { useSearchParams } from "next/navigation";

export default function page() {
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");
  const post = articles.find((a) => a.id === Number(postId));

  return (
    <>
      <PostForm
        initialData={post || null}
        // onSubmit={handleSave}
        onCancel={() => router.back()}
      />
    </>
  );
}
