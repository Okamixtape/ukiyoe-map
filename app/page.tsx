"use client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Map from "@/components/Map";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Map />
    </div>
  );
}