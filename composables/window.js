import { useEffect, useState } from "react";

export default function useWindow() {
  if (typeof window === "undefined") return {};

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, []);

  return {
    scrollY
  };
}
