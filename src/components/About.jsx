import { ABOUT } from '../constants';
import { motion } from 'framer-motion';
const About = () => {
  const imageVariants = {
    // hidden: { opacity: 0, y: 50 },
    visible: { opacitY: 1, y: 0 },
  };
  return (
    <section
      className="flex flex-col items-center justify-center bg-emerald-50 px-4 py-12 sm:px-6 lg:px-8"
      id="about"
    >
      <h2 className="mb-8 mt-4 text-center text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        About Us
      </h2>
      <div className="mb-10 flex w-full max-w-6xl flex-wrap items-center justify-center gap-4 sm:gap-6">
        {ABOUT.profileImages.map((image, index) => (
          <motion.img
            variants={imageVariants}
            initial="hidden"
            whileInView={{ once: true }}
            transition={{ duration: 0.5, dely: image.delay }}
            key={index}
            src={image.src}
            alt={image.alt || `Profile image ${index + 1}`}
            className="h-48 w-full rounded-3xl object-cover shadow-lg sm:h-56 sm:w-1/3 md:h-64 md:w-1/4 lg:w-1/5"
            loading="lazy"
          />
        ))}
      </div>
      <p className="mb-8 max-w-4xl text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
        {ABOUT.aboutUsText}
      </p>
    </section>
  );
};

export default About;
