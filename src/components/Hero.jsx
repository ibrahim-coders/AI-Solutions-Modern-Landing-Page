import { IoArrowForward } from 'react-icons/io5';
import profileImg1 from '../assets/profile1.jpg';
import profileImg2 from '../assets/profile2.avif';
import profileImg3 from '../assets/profile3.jpg';
import hero1 from '../assets/hero1.avif';
import hero2 from '../assets/hero2.avif';
import hero3 from '../assets/hero3.avif';
import hero4 from '../assets/hero4.avif';
import hero5 from '../assets/hero5.avif';
import hero6 from '../assets/hero6.avif';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-wrap min-h-screen items-center  bg-emerald-950 text-orange-50">
        {/* Left Side */}
        <div className="w-full p-8 md:w-1/2 ">
          <div className="mb-4 flex space-x-2">
            {[profileImg1, profileImg2, profileImg3].map((img, idx) => (
              <motion.img
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                src={img}
                alt={`Team Member ${idx + 1}`}
                className="h-16 w-16 rounded-full border-2 border-orange-50"
              />
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl tracking-tighter md:text-5xl lg:text-7xl"
          >
            Transform Your Business With{' '}
            <span className="text-orange-500">AI Solutions</span>
          </motion.h1>

          <p className="mt-3 text-base text-white sm:text-lg">
            Leverage the power of artificial intelligence to streamline your
            operations, boost productivity, and drive innovation across your
            organization.
          </p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-8 flex items-center gap-2 rounded-full bg-emerald-900 px-6 py-3 hover:bg-emerald-800"
          >
            <span>Explore Our Work</span>
            <IoArrowForward />
          </motion.button>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[hero1, hero2, hero3, hero4, hero5, hero6].map((img, idx) => (
              <motion.img
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                src={img}
                alt={`Hero ${idx + 1}`}
                className={`w-32 h-44 md:w-40 md:h-56 object-cover rounded-lg transform ${
                  idx % 2 === 0 ? 'rotate-3' : '-rotate-3'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
