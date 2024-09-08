import { Link } from "react-router-dom";

export default function SideBar(): JSX.Element {
  const ListItem = ({ path, name }: { path: string; name: string }) => {
    return (
      <li className="p-2">
        <Link to={path}>{name}</Link>
      </li>
    );
  };

  return (
    <div className="w-[300px] bg-slate-50">
      <div className="text-xl p-4">StockView</div>
      <ul className="flex flex-col">
        {[
          { path: "/", name: "Home" },
          { path: "/search", name: "Search" },
        ].map((item) => (
          <ListItem key={item.name} path={item.path} name={item.name} />
        ))}
      </ul>
    </div>
  );
}
