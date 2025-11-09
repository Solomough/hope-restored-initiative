import { motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Community from "./components/Community";
import Education from "./components/Education";
import Contact from "./components/Contact";
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Mission />
      <Community />
      <Education />
      <RegisterForm />
      <Contact />
      <Footer />
    </div>
  );
}
