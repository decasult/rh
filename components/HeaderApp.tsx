import Link from "next/link";
import { LogoDecasult } from "./Icons";

export default function HeaderApp() {
  return (
    <header className="h-20 flex items-center justify-center bg-white border-b">
      <div className="w-3/4">
        <Link href="https://www.decasult.com/">
          <LogoDecasult className="h-8 w-auto" />
        </Link>
      </div>
    </header>
  );
}
