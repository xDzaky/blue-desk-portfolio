import { useState, useEffect } from "react";

export function useScrollSpy(ids: string[], offset: number = 200) {
  const [activeId, setActiveId] = useState<string>(ids[0] || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;

      for (let i = ids.length - 1; i >= 0; i--) {
        const id = ids[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveId(id);
            return;
          }
        }
      }
      setActiveId(ids[0] || "");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
}
