import { MdPerson } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="flex justify-end w-full px-6 py-2">
      <button className="block rounded-full bg-slate-50 p-1">
        <MdPerson size={28} />
      </button>
    </nav>
  );
}
