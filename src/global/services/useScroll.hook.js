import { useState } from "react";

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  window.addEventListener("scroll", handleScroll);

  return { scrollPosition };
};


