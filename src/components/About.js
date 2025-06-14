'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-20 text-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        src="about-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/70 z-[-1]" />

      {/* Heading */}
      <motion.h2
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent z-10"
      >
        Who We Are
      </motion.h2>

      {/* Paragraphs */}
      <motion.div
        variants={variants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="text-base sm:text-lg md:text-xl text-gray-700 max-w-[90%] sm:max-w-2xl md:max-w-3xl leading-relaxed space-y-6 z-10 text-center"
      >
        <p>
          StudioReel is a creative video production company focused on cinematic storytelling. We transform ideas into stunning visuals that connect, captivate, and inspire.
        </p>
        <p>
          From concept to final cut, we bring a director&rsquo;s eye to every frame. Whether it&rsquo;s a brand story, commercial, short film, or social media campaign — we craft each project with emotional resonance and technical finesse.
        </p>
        <p>
          Our team blends artistry and technology to deliver content that not only looks great but also drives real impact. With a passion for visuals and a commitment to quality, StudioReel is where vision becomes reality.
        </p>
      </motion.div>
    </section>
  );
}
