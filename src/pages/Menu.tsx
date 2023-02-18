import Footer from "../components/Footer";
import { HeadNav } from "../components/HeadNav";
import { motion } from "framer-motion";
import { MainBtn } from "../components/MainBtn";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <HeadNav />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="grid bg-[#FBF6F2]"
      >
        <div className="lg:mt-40">
          <h1 className="text-3xl"></h1>
          <p className="italic text-green-600">
            L'ensemble de nos prestations inclus le service et le déplacement au
            canton de Vaud pour les évenements de plus de 50 personnes
          </p>
        </div>
        <div>
          <h1 className="text-2xl">Besoin de nous contacter ?</h1>
          <Link to="/réservation">
            <MainBtn value="Cliquez-ici" />
          </Link>
        </div>
      </motion.section>
      <Footer />
    </>
  );
};
