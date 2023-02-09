import { MenuIcon } from "../assets/icons/Icons";
import { PrimaryBtn } from "./PrimaryBtn";
import Logo from "../assets/pics/SP_Logo.jpg";
import { motion, useCycle } from "framer-motion";
import { NavItem } from "./NavItem";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menu = {
  open: (height = 500) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const HeadNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const aStyle = " hidden lg:flex flex-1 ";
  const liStyle = "p-1";
  return (
    <>
      {/*Desktop */}
      <nav
        className="flex
      hidden h-16 flex-row justify-between 
      p-3
      md:flex lg:justify-evenly"
      >
        <div
          className=" md: hidden h-full
           flex-1 bg-contain bg-center bg-no-repeat
           lg:flex "
          style={{ backgroundImage: `url(${Logo})` }}
        ></div>

        <a href="" className={aStyle}>
          Home
        </a>
        <a href="" className={aStyle}>
          Menu
        </a>
        <a href="" className={aStyle}>
          Shop
        </a>
        <a href="" className={aStyle}>
          About Us
        </a>
      </nav>

      {/*Mobile */}

      <motion.nav
        className="flex flex-col"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <MenuToggle toggle={() => toggleOpen()} />

        <motion.div variants={menu} />
        <motion.ul variants={variants} className="">
          <Link to="/">
            {" "}
            <NavItem name="Home" />
          </Link>
          <NavItem name="Menu" />
          <NavItem name="Shop" />
          <NavItem name="About Us" />
        </motion.ul>
      </motion.nav>
    </>
  );
};

export const MenuToggle = ({ toggle }: any) => (
  <button onClick={toggle}>
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      className="mt-3 ml-2 lg:hidden"
    >
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};
