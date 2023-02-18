import "../src/styles/global.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Landing } from "./pages/Landing";
import { Contact } from "./pages/Contact";
import { Menu } from "./pages/Menu";

export function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Landing />} />
        <Route path="/réservation" element={<Contact />} />
        <Route path="/nos-buffets" element={<Menu />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
