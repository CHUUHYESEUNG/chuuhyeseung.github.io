import NavBar from "@/app/components/NavBar";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between px-8">
      <div>
        <Image
          src={"MVM-logo-full-dark.svg"}
          alt="logo"
          width="300"
          height="100"
        />
      </div>
      <NavBar />
    </div>
  );
}
