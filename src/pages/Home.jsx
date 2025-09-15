import HomeBannerSection from "./HomeBannerSection";
function Home() {
  return (
    <div>
      <HomeBannerSection />
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-4">
          Home Us 🌿
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
          We are a passionate team building modern web applications using React
          and Tailwind CSS. Our goal is to deliver scalable, user-friendly, and
          performant solutions.
        </p>
      </section>
    </div>
  );
}
export default Home;
