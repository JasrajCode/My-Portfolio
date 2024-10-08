import Navbar from "./components/Navbar.tsx";
import HeroSection from "./components/HeroSection";
import Technologies from "./components/Technologies";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <Technologies />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
