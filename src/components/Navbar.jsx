import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { LINKS } from '../constants';
import { AnimatePresence, motion } from 'motion/react';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  // Handle body overflow when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  // Prevent scroll when menu is open
  useEffect(() => {
    const handleScroll = e => {
      if (isOpen) {
        e.preventDefault();
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  // Handle smooth scroll to section
  const handleClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const offset = -70;
    const element = document.getElementById(id);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: elementPosition + offset,
        behavior: 'smooth',
      });
    }
  };

  const linkVariants = {
    // hidden: { opacitY: 0, y: 20 },
    visible: { opacitY: 1, y: 20 },
  };

  return (
    <>
      <nav className="fixed z-10 w-full border-b border-orange-50/10 bg-emerald-900">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* logo */}
            <div className="flex items-center">
              <a href="/">
                <h2 className="text-3xl font-bold text-white">AI Solutions</h2>
              </a>
            </div>
            <div>
              <button
                onClick={() => setOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center bg-emerald-950 p-2 text-orange-50"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-20 flex flex-col space-y-4 bg-emerald-950 px-20 pt-20 text-5xl font-bold uppercase text-emerald-100"
          >
            <button
              onClick={() => setOpen(false)}
              type="button"
              className="absolute right-20 top-4 rounded-full bg-emerald-950 p-2 text-emerald-100"
              aria-label="Close menu"
            >
              <FaTimes className="h-8 w-8" />
            </button>
            {LINKS.map((link, index) => (
              <motion.a
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.2 }}
                key={index}
                href={`#${link.id}`}
                onClick={e => handleClick(e, link.id)}
                className="transition-colors duration-500 hover:text-orange-500"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
