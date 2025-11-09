import { motion } from "framer-motion";

export default function Community() {
  return (
    <section className="py-16 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl font-semibold mb-4"
      >
        Join Our Free Support Community
      </motion.h2>
      <p className="max-w-2xl mx-auto text-gray-700">
        Get daily inspiration, weekly live sessions, and connect with others on the same journey.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <a href="https://youtube.com/@isabeldooshima-o3m?si=ILPRz1MEs28qh7Ou" target="_blank"
           className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90">
          Subscribe to YouTube Channel
        </a>
        <a href="https://chat.whatsapp.com/CjoP3b8jwCb0VuDnlvwIK3?mode=wwt" target="_blank"
           className="bg-secondary text-white px-6 py-3 rounded-lg hover:opacity-90">
          Join WhatsApp Group
        </a>
      </div>
    </section>
  );
}
