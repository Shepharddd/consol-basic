// components/SetmoreWidget.tsx
"use client";
import { useEffect } from "react";

export default function SetmoreWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "setmore_script";
    script.src =
      "https://assets.setmore.com/integration/static/setmoreIframeLive.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existing = document.getElementById("setmore_script");
      if (existing) existing.remove();
    };
  }, []);

  return (
    <a
      id="Setmore_button_iframe"
      href="https://consol.setmore.com"
      className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
    >
      {/* Book an Appointment */}
      <img src="https://assets.setmore.com/integration/images/newdesign/others/book-now-button.svg" alt="Book an appointment with ConSol using Setmore" />
    </a>
  );
}