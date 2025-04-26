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
import { motion } from 'motion/react';
const Hero = () => {
  return (
    <section className="container mx-auto flex pt-16 flex-wrap items-center bg-emerald-950 text-orange-50 sm:mt-10">
      <div className="w-full pt-10 px-4 sm:p-8 md:w-1/2">
        <div className="mb-4 flex space-x-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            src={profileImg1}
            alt="Team Member 1"
            className=" h-16 w-16 rounded-full border-2 border-orange-50"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            src={profileImg2}
            alt="Team Member 1"
            className=" h-16 w-16 rounded-full border-2 border-orange-50"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            src={profileImg3}
            alt="Team Member 1"
            className=" h-16 w-16 rounded-full border-2 border-orange-50"
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl tracking-tighter md:text-5xl lg:text-7xl"
        >
          Transform Your Business With
          <span className="text-orange-500"> AI Solutions</span>
        </motion.h1>
        {/* <p className="text-base text-white mt-3 sm:text-lg">
          Leverage the power of artificial intelligence to streamline your
          operations, boost productivity, and drive innovation across your
          organization.
        </p> */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-3 hover:bg-emerald-800"
        >
          <span>Explore Our Work</span>
          <IoArrowForward />
        </motion.button>
      </div>
      <div className="w-full md:w-1/2 lg:p-8">
        <section class=" bg-emerald-950 flex items-center justify-center px-4 py-10 sm:p-10">
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={hero1}
              class="w-48 h-52 object-cover rounded-lg transform rotate-6"
              alt="Image 1"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={hero2}
              class="w-48 h-52 object-cover rounded-lg transform -rotate-3"
              alt="Image 2"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={hero3}
              class="w-48 h-52 object-cover rounded-lg transform rotate-2"
              alt="Image 3"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={hero4}
              class="w-48 h-52 object-cover rounded-lg transform -rotate-2"
              alt="Image 4"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={hero5}
              class="w-48 h-52 object-cover rounded-lg transform rotate-3"
              alt="Image 5"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              src={hero6}
              class="w-48 h-52 object-cover rounded-lg transform -rotate-6"
              alt="Image 6"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
