import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navbar />
      <main className="p-6">
        <Outlet /> {/* child routes render here */}
      </main>
    </div>
  );
}
