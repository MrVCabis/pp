import { Hero } from "./components/hero";
import { Portfolio } from "./components/portfolio";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";
import { Navigation } from "./components/navigation";
import { LanguageProvider } from "./contexts/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Hero />
        <Portfolio />
        <About />
        <Skills />
        <Contact />
      </div>
    </LanguageProvider>
  );
}