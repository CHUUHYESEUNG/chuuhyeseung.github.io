import { NavButton } from "@/app/components/NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function NavBar() {
  return (
    <div className="flex justify-between gap-12 pr-8">
      <div className="flex gap-12">
        <NavButton text={"Home"} />
        <NavButton text={"About"} />
        <NavButton text={"Blog"} />
        <NavButton text={"Contact"} />
      </div>

      <div className="flex gap-6 pt-12">
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
}
