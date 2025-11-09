import { useState } from "react";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.location.href = "https://chat.whatsapp.com/CjoP3b8jwCb0VuDnlvwIK3?mode=wwt";
    }, 1200);
  };

  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-4">Take the First Step</h2>
      <p className="text-gray-700 mb-6">Join our free support program today</p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          required
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          required
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90"
        >
          {loading ? "Redirecting..." : "Join Now"}
        </button>
      </form>
    </section>
  );
}
