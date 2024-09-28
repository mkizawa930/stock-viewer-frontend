import { Route, Routes } from "react-router-dom";
import SideBar from "./components/common/SideBar";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
// ]);

function App() {
  return (
    <>
      <div className="flex w-screen h-screen">
        <SideBar />
        <div className="flex-1 mt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
