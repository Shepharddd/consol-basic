import { Associations } from "@/components/Associations/Associations";
import { Feature } from "@/components/Feature/Feature";
import { Gallery } from "@/components/Gallery/Gallery";
import { Hero } from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col justify-start">
      <Hero />
      <Gallery />
      <Feature />
      <Associations />
    </div>
  );
}
