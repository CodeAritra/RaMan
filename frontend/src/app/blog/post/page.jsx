"use client";

import React, { useEffect, useState } from "react";
import { PostForm } from "@/components/PostForm";
import { useSearchParams, useRouter } from "next/navigation";
import { API_BASE_URL } from "@/lib/url";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  // const { token } = useAuth();

  const postId = searchParams.get("id");

  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(false);

   const token = localStorage.getItem("token");

  // Fetch post only in EDIT mode
  useEffect(() => {
    if (!postId) return;

    const fetchPost = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/blogs/${postId}`);

        if (!res.ok) {
          throw new Error("Failed to fetch post");
        }

        const data = await res.json();
        setInitialData(data);
      } catch (err) {
        toast.error(err.message || "Failed to load post");
      }
    };

    fetchPost();
  }, [postId]);

  const handleSave = async (formData) => {
    const isEdit = Boolean(postId);
    const toastId = toast.loading(
      isEdit ? "Updating post..." : "Creating post...",
    );

    try {
      const res = await fetch(
        isEdit
          ? `${API_BASE_URL}/api/blogs/${postId}`
          : `${API_BASE_URL}/api/blogs`,
        {
          method: isEdit ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to save post");
      }

      toast.success(
        isEdit ? "Post updated successfully" : "Post created successfully",
        { id: toastId },
      );

      router.back();
      router.refresh();
    } catch (err) {
      toast.error(err.message || "Something went wrong", { id: toastId });
    }
  };

  return (
    <PostForm
      initialData={initialData}
      onSubmit={handleSave}
      onCancel={() => router.back()}
      loading={loading}
    />
  );
}
