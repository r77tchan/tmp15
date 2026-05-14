import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import hero from "@/public/hero.png";

export default function Home() {
  return (
    <div className="relative isolate bg-linear-to-r from-sky-50 to-sky-200">
      <div className="absolute inset-y-0 right-0 -z-10 w-1/2 mask-[linear-gradient(to_right,transparent,black_30%)]">
        <Image
          src={hero}
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
      </div>
      <Header />
      <Hero />
    </div>
  );
}
