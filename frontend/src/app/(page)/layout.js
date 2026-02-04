import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";

export default function layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col">{children}</main>
      <Footer />
    </>
  );
}
