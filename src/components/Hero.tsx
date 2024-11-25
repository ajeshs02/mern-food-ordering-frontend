import hero from "@/assets/hero.webp";

export default function Hero() {
  return (
    <div>
      <img
        src={hero}
        alt="hero banner"
        className="w-full max-h-[600px] object-cover"
      />
    </div>
  );
}
