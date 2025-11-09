import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-20 px-4 bg-accent">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-gray-800"
      >
        Hope Restored Initiative
      </motion.h1>
      <p className="mt-4 text-lg text-gray-700">
        Free Support Program — Break Free from Alcohol, Reclaim Your Life
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <a
          href="https://chat.whatsapp.com/CjoP3b8jwCb0VuDnlvwIK3?mode=wwt"
          target="_blank"
          className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90"
        >
          Join WhatsApp Group
        </a>
        <a
          href="https://whatsapp.com/channel/0029VbBi3TW0gcfBo8oIGd3y"
          target="_blank"
          className="bg-secondary text-white px-6 py-3 rounded-lg hover:opacity-90"
        >
          Follow Our Channel
        </a>
      </div>
    </section>
  );
}
