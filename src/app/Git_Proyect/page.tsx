import Hero from "@/components/hero";
import HomeImg from "../../../public/Fondo.jpg";
import GetRepositorys from "@/components/GetRepositorys";
import "../../app/globals.css"; 

const Proyect: React.FC = () => {
  return (
    <Hero imgData={HomeImg} imgAlt="Home">
      <div className="container mx-auto px-4">
        <GetRepositorys />
      </div>
    </Hero>
  );
};

export default Proyect;
