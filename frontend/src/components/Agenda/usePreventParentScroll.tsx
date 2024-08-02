"use client";
import { useEffect, useRef } from "react";
const usePreventParentScroll = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      const element = ref.current;
      if (element && element.scrollHeight > element.clientHeight) {
        const { scrollTop, scrollHeight, clientHeight } = element;
        const isScrollAtTop = scrollTop === 0;
        const isScrollAtBottom = scrollTop + clientHeight === scrollHeight;

        if (
          (event.deltaY < 0 && isScrollAtTop) ||
          (event.deltaY > 0 && isScrollAtBottom)
        ) {
          event.preventDefault();
        }
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (element) {
        element.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return ref;
};

export default usePreventParentScroll;
