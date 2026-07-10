import { useEffect } from "react";

const FOCUSABLE_SELECTORS = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

export function useFocusTrap(ref, active, onEscape) {
  useEffect(() => {
    if (!active || !ref.current) return;

    const el = ref.current;
    const previously = document.activeElement;

    function getFocusable() {
      return Array.from(el.querySelectorAll(FOCUSABLE_SELECTORS));
    }

    // Move focus into the trapped element
    const focusable = getFocusable();

    focusable[0]?.focus();

    function onKey(e) {
      if (e.key === "Escape") {
        e.preventDefault();
        onEscape?.();
        return;
      }

      if (e.key !== "Tab") return;

      const items = getFocusable();
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      previously?.focus();
    };
  }, [active, ref, onEscape]);
}
