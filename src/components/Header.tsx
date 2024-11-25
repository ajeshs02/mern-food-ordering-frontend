import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

export default function Header() {
  return (
    <header className="py-6 border-b-2 border-b-orange-500">
      <div className="container flex justify-between items-center mx-auto">
        <Link
          to={"/"}
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          MernEats.com
        </Link>

        <div className="md:hidden">
          <MobileNav />
        </div>

        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </header>
  );
}
