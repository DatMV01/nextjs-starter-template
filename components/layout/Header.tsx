import Link from "next/link";
import { ThemeButton, ThemeSwitch } from "@/components";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b">
      <Link href="/" className="text-lg font-semibold">
        Next Dashboard
      </Link>
      <nav className="flex items-center gap-6">
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <ThemeSwitch />
        <ThemeButton />
      </nav>
    </header>
  );
};

export default Header;
