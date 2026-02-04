"use client";

import { useAuth } from "@/context/AuthContext";
import { ArrowLeft, Calendar, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function BlogDetail({ blog, isAdmin }) {
  const router = useRouter();
  // console.log(blog);

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      {/* Back link */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6 cursor-pointer"
      >
        <ArrowLeft size={16} />
        Back to all articles
      </button>

      {/* Category + date */}
      {/* <div className="flex items-center gap-3 mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-yellow-100 text-yellow-800">
          {blog.category}
        </span>
        <span className="text-sm text-gray-500">{blog.date}</span>
      </div> */}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 pb-5 mb-8 border-b">
        {blog.title}
        <div className="flex items-center gap-1 text-accent">
          <Calendar className="w-4 h-4" />
          <span className="font-semibold text-sm">
            {new Date(blog.updatedAt).toLocaleDateString("en-IN")}
          </span>
        </div>
      </h1>

      {/* Author + actions */}
      {/* <div className="flex items-center justify-between border-y py-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-semibold text-blue-700">
            {blog.authorInitials}
          </div>

          
            <div>
              <p className="font-medium text-gray-900">{blog.author}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Senior Editorial Board
              </p>
            </div>
           
        </div>

        {/* {isAdmin && (
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 text-sm border rounded-md hover:bg-gray-100">
              <Pencil size={14} />
              Edit
            </button>

            <button className="flex items-center gap-2 px-3 py-2 text-sm border border-red-200 text-red-600 rounded-md hover:bg-red-50">
              <Trash2 size={14} />
              Delete
            </button>
          </div>
        )} */}
      {/* </div> */}

      {/* Cover img */}
      <div className="w-full h-95 rounded-xl overflow-hidden mb-10 bg-gray-200">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">{blog.content}</div>
    </article>
  );
}
