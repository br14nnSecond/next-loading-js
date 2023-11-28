import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white p-4 text-black">
      <div className="flex flex-row gap-4 ">
        <Link className="underline" href="/">
          Home
        </Link>
        <Link className="underline" href="/dashboard">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
