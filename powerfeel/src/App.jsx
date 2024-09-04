import { DarkModeProvider } from "./components/DarkModeContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import PopularAreas from "./sections/PopularAreas";
import Properties from "./sections/Properties";
export default function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularAreas />
        <Properties />
        <Clients />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
}
