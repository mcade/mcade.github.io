import {
  forwardRef,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ReactNode,
} from "react";

type ClassValue = string | number | null | undefined | false;

const cn = (...inputs: ClassValue[]) =>
  inputs
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

export type SlippyWord =
  | string
  | { label: ReactNode; key?: string; gradient?: boolean };

export interface SlippyWordsProps extends ComponentPropsWithoutRef<"div"> {
  rows: SlippyWord[][];
  intensity?: number;
  startDirection?: "left" | "right";
  gap?: number;
  fade?: boolean;
  gradient?: boolean;
  static?: boolean;
}

export const SlippyWords = forwardRef<HTMLDivElement, SlippyWordsProps>(
  (
    {
      rows,
      intensity = 240,
      startDirection = "left",
      gap = 12,
      fade = true,
      gradient = false,
      static: isStatic,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    const hostRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const host = hostRef.current;
      if (!host || isStatic) return;

      const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      let raf = 0;
      const update = () => {
        raf = 0;
        const rect = host.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const progress = (vh - rect.top) / (vh + rect.height);
        const offset = (Math.min(1, Math.max(0, progress)) - 0.5) * intensity;
        host.style.setProperty("--pui-slip", `${offset}px`);
      };
      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(update);
      };

      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      return () => {
        if (raf) cancelAnimationFrame(raf);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }, [intensity, isStatic]);

    const setRef = (el: HTMLDivElement | null) => {
      hostRef.current = el;
      if (typeof ref === "function") ref(el);
      else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }
    };

    const firstDir = startDirection === "left" ? -1 : 1;
    const cssVars: CSSProperties = {
      ...(style ?? {}),
      ["--pui-slip-gap" as string]: `${gap}px`,
    };

    return (
      <div
        ref={setRef}
        className={cn("pui-slippy", fade && "pui-slippy--fade", className)}
        style={cssVars}
        aria-label="Featured terms"
        {...rest}
      >
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="pui-slippy__row"
            style={{
              ["--pui-slip-dir" as string]: rowIndex % 2 === 0 ? firstDir : -firstDir,
            }}
          >
            {row.map((word, wordIndex) => {
              const item = typeof word === "string" ? { label: word as ReactNode } : word;
              return (
                <span
                  key={(typeof word === "object" && word.key) || `${rowIndex}-${wordIndex}`}
                  className={cn(
                    "pui-slippy__word",
                    (gradient || (typeof word === "object" && word.gradient)) &&
                      "pui-slippy__word--gradient",
                  )}
                >
                  {item.label}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    );
  },
);

SlippyWords.displayName = "SlippyWords";
