import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="flex justify-center">
        <img
          src="/MVM-logo-full-dark.svg"
          alt="footerLogo"
          width="400"
          height="200"
        />
      </div>
      <div className="flex items-center justify-center font-serif p-12">
        <div className="flex gap-28">
          <div className="flex flex-col gap-4">
            <div>Contact</div>
            <span className="text-xs">cheesehsmay5th@gmail.com</span>
          </div>
          <div className="flex flex-col gap-4">
            <div>Explorate</div>
            <span className="text-xs">Home</span>
            <span className="text-xs">About</span>
            <span className="text-xs">Blog</span>
          </div>
          <div className="flex flex-col gap-4">
            <div>Connections</div>
            <div className="flex gap-6">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
