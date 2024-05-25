import Hero from "@/components/hero";
import ExpandableCard from "@/components/ExpandableCard";
import HomeImg from "../../public/Fondo.jpg";
import SkillsSection from "@/components/SkillsSection"; // Importa el nuevo componente

export default function Home() {
  return (
    <div>
       <Hero imgData={HomeImg} imgAlt="Home">
        <div className="centered-content">
          <ExpandableCard />
        </div>
        
      </Hero>
    </div>
  );
}
