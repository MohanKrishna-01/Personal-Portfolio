import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-accent origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ProgressBar;
