import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import CompletedEvent from "../components/CompletedEvent";
import UpcomingEvent from "../components/UpcomingEvent";
import UpcomingTrek from "../components/UpcomingTrek";
import Reviews from "../components/Reviews";
import EnquirySection from "../components/EnquirySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      <Navbar />
      <HeroSection />
      <About />
      <CompletedEvent />
      <UpcomingEvent />
      <UpcomingTrek />
      <Reviews />
      <EnquirySection />
      <Footer />
    </div>
  );
}
