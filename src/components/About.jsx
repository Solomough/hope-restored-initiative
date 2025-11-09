import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-6"
      >
        Meet Your Guide to Recovery
      </motion.h2>
      <p className="text-gray-700 leading-relaxed">
        Hi, I'm <strong>Dooshima Isabel Nyaga</strong>, a Student Nurse at NKST College of Nursing Science, Mkar Gboko, Benue, Nigeria.  
        My passion is bringing hope to the hopeless and unlocking the potential in every life I touch. This initiative is my way of making a difference—providing free education, support, and a path to recovery for anyone struggling with alcohol dependency.
      </p>
    </section>
  );
}
