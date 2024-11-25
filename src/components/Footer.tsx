export default function Footer() {
  return (
    <footer className="py-10 bg-orange-500">
      <div className="container flex flex-col justify-between items-center mx-auto md:flex-row">
        <span className="text-3xl font-bold tracking-tight text-white">
          MernEats.com
        </span>
        <span className="flex gap-4 font-bold tracking-tight text-white">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </footer>
  );
}
