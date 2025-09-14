import { Outlet } from "react-router-dom";
import Home from "./components/Home";
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header />
      <Navbar /> */}
      <Home />
      <main className="p-6">
        <Outlet /> {/* child routes render here */}
      </main>
    </div>
  );
}
