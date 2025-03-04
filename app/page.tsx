"use client";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Map from "@/components/map/Map";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <Sidebar />
        <Map />
      </main>
    </div>
  );
}