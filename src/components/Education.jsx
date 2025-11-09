import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="bg-accent py-16 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-semibold mb-4"
      >
        Alcohol: A Slow Killer
      </motion.h2>
      <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
        Alcohol doesn’t just affect the person drinking—it tears apart families, destroys careers, damages health, and steals futures.
        But recovery is possible. Join a community that understands your struggle and celebrates your victories.
      </p>
    </section>
  );
}
