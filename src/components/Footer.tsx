

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import logo from "../../public/Logo3.png";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={70} height={70} />
        </div>
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} CesarEnterprises. Todos los derechos reservados.</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="mb-2">Contactos</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=100010913381642" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/c_perez67/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://wa.me/50687462555" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
