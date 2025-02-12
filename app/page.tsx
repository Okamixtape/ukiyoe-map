import Map from "@/app/components/Map";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Carte interactive d'Ukiyo-e</h1>
      <Map />
    </main>
  );
}
