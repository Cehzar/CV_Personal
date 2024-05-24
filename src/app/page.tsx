import Hero from "@/components/hero";
import ExpandableCard from "@/components/ExpandableCard";
import HomeImg from "../../public/fondo_Home.webp";


export default function Home() {
  return (
    <div>
    <Hero imgData={HomeImg} imgAlt = "Home"  >
      <ExpandableCard/>
    </Hero>
    </div>
  );
}
