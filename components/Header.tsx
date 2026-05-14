import Image from "next/image";
import logo from "@/public/logo.png";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-352 items-center gap-3 px-4 py-4">
      <Image
        src={logo}
        alt="ABCソリューションズ株式会社 ロゴ"
        className="h-10 w-auto"
        priority
      />
      <span className="text-lg font-semibold">ABCソリューションズ株式会社</span>
    </header>
  );
}
