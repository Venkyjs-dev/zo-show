import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Home() {
  return (
    <div className="h-[100vh] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')]">
      <Header />
      <Navbar />
      <div className="flex flex-col justify-center items-center font-bold mt-[10%]">
        <p className="text-orange-400 m-2">
          Your Story, Our Screens, Everywhere
        </p>
        <h1 className="text-white text-3xl m-2">
          India's Largest Screen Netword Meets Life in Motion
        </h1>
        <button className="bg-orange-400 p-3 text-white rounded font-bold m-2">
          Get Started
        </button>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
