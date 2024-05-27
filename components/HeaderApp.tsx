import Link from "next/link";
import { LogoDecasult, LinkedInIcon } from "./Icons";

export default function HeaderApp() {
  return (
    <header className="h-20 flex items-center bg-white border-b">
      <div className="w-full md:w-3/5 mx-auto flex items-center justify-between">
        <div>
          <Link href="https://www.decasult.com/">
            <LogoDecasult className="h-8 w-auto ml-4 md:ml-2" />
          </Link>
        </div>
        <div>
          <Link href="https://ca.linkedin.com/company/decasult">
            <LinkedInIcon className="h-9 w-9 mr-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
