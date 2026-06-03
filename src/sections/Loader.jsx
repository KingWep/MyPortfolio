import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#05010d]"
        >
          <div className="relative">
            <div className="h-25 w-25 rounded-full border-2 border-white/10" />
            <div className="absolute inset-0 h-25 w-25 rounded-full border-t-2 border-[oklch(0.65_0.25_295)] animate-spin shadow-[0_0_30px_oklch(0.65_0.25_295/0.7)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center font-bold text-gradient leading-none">
              <span>LENG</span>
              <span>CHANTHA</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}