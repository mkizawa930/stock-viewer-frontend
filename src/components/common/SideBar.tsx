import { ReactNode } from "react";
import { MdHome, MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

export default function SideBar(): JSX.Element {
  const ListItem = ({
    path,
    name,
    icon,
  }: {
    path: string;
    name: string;
    icon: ReactNode;
  }) => {
    return (
      <li className="rounded-xl hover:bg-slate-300 hover:text-black text-lg">
        <Link to={path} className="flex items-center px-2 py-4">
          {icon}
          <span className="ml-4">{name}</span>
        </Link>
      </li>
    );
  };

  return (
    <div className="w-[300px] h-full border-r bg-slate-800 text-slate-50">
      <div className="flex flex-col h-full">
        <div className="flex-0 text-2xl p-4 font-bold">
          <Link className="block" to="/">
            Chartify
          </Link>
        </div>
        <ul className="flex-1 flex flex-col space-y-2 m-4">
          {[
            { path: "/", name: "Home", icon: <MdHome size={24} /> },
            { path: "/search", name: "Search", icon: <MdSearch size={24} /> },
          ].map((item) => (
            <ListItem
              key={item.name}
              path={item.path}
              name={item.name}
              icon={item.icon}
            />
          ))}
        </ul>
        <div className=" justify-center m-4">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
