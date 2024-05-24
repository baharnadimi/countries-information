import Link from "next/link";
import { FiMoon, FiSun } from "react-icons/fi";
import Button from "./Button";

function Header({ mode, onClick }: HeaderProps) {
  const buttonText = mode ? <FiSun /> : <FiMoon />;
  const buttonTitle = mode ? "Light Mode" : "Dark Mode";

  return (
    <header className="py-4 dark:bg-gray-800 dark:text-slate-100 shadow-lg relative">
      <nav className="w-11/12 max-w-6xl mx-auto">
        <ul className="flex items-center justify-between">
          <li>
            <Link href="/">
              <h1 className="text-2xl font-extrabold">Where in the World?</h1>
            </Link>
          </li>
          <li className="flex items-center">
            <Button
              onClick={onClick}
              btnText={buttonText}
              classes="p-2 text-3xl border-none"
            />
            {buttonTitle}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
