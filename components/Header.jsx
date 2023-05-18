import Link from "next/link";
import { BsGrid3X3GapFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="flex items-center justify-end gap-5 py-3 p-4 text-sm">
      <Link href="/" className="hover:underline">
        Gmail
      </Link>
      <Link href="/" className="hover:underline">
        Images
      </Link>
      <BsGrid3X3GapFill className="icon" />
      <button type="button" className="bg-blue-400 p-2 rounded-md text-white">
        Sign In
      </button>
    </header>
  );
};

export default Header;
