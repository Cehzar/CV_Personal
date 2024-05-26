import Hero from "@/components/hero";
import HomeImg from "../../../public/Fondo.jpg";
import SkillsSection from "@/components/SkillsSection";

export default function Experience() {
    return (
      <Hero imgData={HomeImg} imgAlt="Home">
        <SkillsSection/>
      </Hero>
    );
  } 