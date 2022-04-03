import { useEffect, useState } from "react";

export const useScrollOffset = () => {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);
  return offset;
};
