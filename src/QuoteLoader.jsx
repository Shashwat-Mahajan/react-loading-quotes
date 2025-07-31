import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import RingLoader from "react-spinners/RingLoader";

export default function QuoteLoader({
  theme = "dark",
  duration = 2500,
  onDone,
}) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://dummyjson.com/quotes");
      if (!res.ok) throw new Error("Fetch failed");

      const data = await res.json();
      const all = data.quotes;
      const random = all[Math.floor(Math.random() * all.length)];
      setQuote({ text: random.quote, author: random.author });
    } catch (err) {
      console.warn("❌ Fetch error:", err.message);
      setQuote({
        text: "Inspiration survives when networks fail.",
        author: "Fallback",
      });
    }
  };

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setQuote(null);
    fetchQuote();

    // Lock scroll and hide body content flash
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      if (isMounted) {
        setLoading(false);
        document.body.style.overflow = ""; // Re-enable scroll
        onDone?.();
      }
    }, duration);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      document.body.style.overflow = ""; // Ensure scroll reset
    };
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {loading && quote && (
        <motion.div
          key="quote-loader"
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${
            theme === "dark" ? "bg-black text-white" : "bg-white text-black"
          }`}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: "100vh",
            width: "100vw",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <RingLoader color={theme === "dark" ? "#fff" : "#000"} />
          <p
            style={{
              marginTop: "1rem",
              maxWidth: "32rem",
              textAlign: "center",
              fontStyle: "italic",
              padding: "0 1rem",
              fontSize: "1.125rem",
            }}
          >
            "{quote.text}" —{" "}
            <span style={{ fontStyle: "normal", fontWeight: "600" }}>
              {quote.author}
            </span>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
