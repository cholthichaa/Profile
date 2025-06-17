import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
      <div className="font-bold text-lg">Cholthicha</div>
      <div className="flex items-center space-x-6">
        <Link
          to="/" // This is the main page URL path
          className="flex items-center hover:bg-yellow-400 text-black px-4 py-2 rounded"
        >
          Home
        </Link>
        <a
          href="#Work-Experience"
          className="flex items-center bg-[#f4a300] hover:bg-yellow-400 text-white px-4 py-2 rounded"
        >
          <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
          EXPERIENCES
        </a>
      </div>
    </nav>
  );
}
