import { motion } from "framer-motion";

export default function Mission() {
  return (
    <section className="bg-accent py-16 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-4"
      >
        Our Mission
      </motion.h2>
      <div className="max-w-3xl mx-auto text-gray-700 leading-relaxed space-y-4">
        <p><strong>Restore Hope:</strong> Reignite the flame of hope in lives dimmed by alcohol dependency.</p>
        <p><strong>Educate & Empower:</strong> Provide evidence-based information for lasting sobriety.</p>
        <p><strong>Build Community:</strong> Create a supportive, judgment-free space where individuals can grow together.</p>
      </div>
    </section>
  );
}
