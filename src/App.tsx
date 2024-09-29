import { Route, Routes } from "react-router-dom";
import SideBar from "./components/common/SideBar";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import Navbar from "./components/Navbar";

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
        <div className="flex-1 flex flex-col h-full">
          <Navbar />
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
