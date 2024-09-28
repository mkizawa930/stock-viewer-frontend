export default function LogoutButton() {
    const handleClick = () => {
        confirm("ログアウトしますか");
    }

  return (
    <button className="block w-full border border-slate-500 p-2 rounded-3xl hover:bg-slate-500"
        onClick={handleClick}
    >
      Logout
    </button>
  );
}
