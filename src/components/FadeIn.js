"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reusable scroll-reveal fade-in component.
 * Smoothly animates children into view when scrolled into the viewport.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {string} [props.className] - Additional Tailwind classes
 * @param {number} [props.delay] - Delay in milliseconds (for staggered sequences)
 * @param {"up" | "down" | "none"} [props.direction] - Direction of subtle motion (default: "up")
 * @param {number} [props.duration] - Animation duration in ms (default: 700)
 * @param {number} [props.threshold] - Visibility threshold to trigger (default: 0.1)
 * @param {string} [props.as] - HTML tag to render (default: "div")
 */
export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 700,
  threshold = 0.1,
  as: Component = "div",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Respect user's preference for reduced motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    // Use IntersectionObserver to trigger animation when scrolled into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  const getTransformClasses = () => {
    if (direction === "up") {
      return isVisible ? "translate-y-0" : "translate-y-6";
    }
    if (direction === "down") {
      return isVisible ? "translate-y-0" : "-translate-y-6";
    }
    return "";
  };

  return (
    <Component
      ref={ref}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-out transform ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${getTransformClasses()} ${className}`}
    >
      {children}
    </Component>
  );
}
