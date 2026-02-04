"use client";

import React from "react";

import { useState } from "react";
import { Upload, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function PostForm({ initialData, onSubmit, onCancel }) {
  const isEdit = Boolean(initialData);

  const [title, setTitle] = useState(initialData?.title || "");
  const [category, setCategory] = useState(
    initialData?.category || "Leadership",
  );
  const [content, setContent] = useState(initialData?.content || "");
  const [previewImage, setPreviewImage] = useState(initialData?.image || null);
  const [fileName, setFileName] = useState("");

  const router = useRouter();

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        setPreviewImage(result);
        setImageUrl("");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClearImage = () => {
    setPreviewImage(null);
    setFileName("");
    setImageUrl("");
  };

  const handleCancel = () => {
    router.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      title,
      category,
      content,
      image: previewImage,
    });
  };

  return (
    <main className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              {isEdit ? "Edit Article" : "Post New Article"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {isEdit
                ? "Update your article."
                : "Refine your management insights."}
            </p>
          </div>
          <button
            onClick={handleCancel}
            className="text-primary hover:bg-muted/50 px-6 py-2 rounded-xl font-medium transition cursor-pointer"
          >
            Cancel
          </button>
        </div>

        {/* Form Card */}
        <div className="bg-card border border-border rounded-lg p-8">
          <form className="space-y-8">
            {/* Article Title */}
            <div>
              <label className="block text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                Article Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a compelling title..."
                className="w-full px-4 py-3 bg-muted text-foreground placeholder-muted-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 bg-muted text-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition appearance-none cursor-pointer"
              >
                <option>Leadership</option>
                <option>Culture</option>
                <option>Strategy</option>
                <option>Management</option>
                <option>Innovation</option>
              </select>
            </div>

            {/* Cover Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                Cover Image
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="flex items-center justify-center px-4 py-3 bg-muted border-2 border-dashed border-input rounded-md cursor-pointer hover:bg-muted/80 transition"
                >
                  <Upload className="w-5 h-5 mr-2 text-muted-foreground" />
                  <span className="text-foreground font-medium">
                    {fileName || "Upload Image"}
                  </span>
                </label>
              </div>
            </div>

            {/* Image Preview */}
            {previewImage && (
              <div className="relative">
                <div className="relative w-full h-64 bg-muted rounded-md overflow-hidden">
                  <Image
                    src={previewImage || "/placeholder.svg"}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleClearImage}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Content */}
            <div>
              <label className="block text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your management recipe here..."
                rows={12}
                className="w-full px-4 py-3 bg-muted text-foreground placeholder-muted-foreground rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-end pt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 border border-primary text-primary rounded-md font-medium hover:bg-primary/5 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-primary/95 text-primary-foreground rounded-md font-medium hover:bg-primary transition cursor-pointer"
              >
                {isEdit ? "Update" : "Publish"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
