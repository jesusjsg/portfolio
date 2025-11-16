import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const useTyped = (strings = [], options = {}) => {
  const typedRef = useRef(null);

  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      ...options,
    });
    return () => typed.destroy();
  }, [strings, options]);

  return typedRef;
};
