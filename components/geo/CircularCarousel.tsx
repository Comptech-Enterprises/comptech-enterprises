"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import styles from "./CircularCarousel.module.css";

export type CircularCarouselItem = {
  step: string;
  title: string;
  desc: string;
};

type CircularCarouselProps = {
  items: CircularCarouselItem[];
  className?: string;
};

function shortestOffset(index: number, active: number, count: number) {
  let offset = index - active;
  if (offset > count / 2) offset -= count;
  if (offset < -count / 2) offset += count;
  return offset;
}

export function CircularCarousel({ items, className = "" }: CircularCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragStart = useRef<number | null>(null);
  const count = items.length;

  const activeItem = items[active];
  const canRotate = count > 1;

  const move = (direction: number) => {
    if (!canRotate) return;
    setActive((current) => (current + direction + count) % count);
  };

  useEffect(() => {
    if (!canRotate || paused) return undefined;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;
    const timer = window.setInterval(() => move(1), 3800);
    return () => window.clearInterval(timer);
  }, [canRotate, count, paused]);

  const rendered = useMemo(
    () =>
      items.map((item, index) => {
        const offset = shortestOffset(index, active, count);
        const depth = Math.min(Math.abs(offset), 2);
        return { item, index, offset, depth };
      }),
    [active, count, items]
  );

  return (
    <div
      className={`${styles.carousel} ${className}`}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div
        className={styles.viewport}
        aria-roledescription="carousel"
        aria-label="GEO process steps"
        onPointerDown={(event) => {
          dragStart.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (dragStart.current === null) return;
          const delta = event.clientX - dragStart.current;
          dragStart.current = null;
          if (Math.abs(delta) < 35) return;
          move(delta < 0 ? 1 : -1);
        }}
      >
        {rendered.map(({ item, index, offset, depth }) => {
          const isActive = index === active;
          return (
            <button
              key={item.step}
              type="button"
              className={styles.card}
              aria-label={`${item.step}: ${item.title}`}
              aria-current={isActive ? "step" : undefined}
              onClick={() => setActive(index)}
              style={
                {
                  "--offset": offset,
                  "--x": `${offset * 250}px`,
                  "--rotate": `${offset * -18}deg`,
                  "--depth": depth,
                  "--z-depth": `${(1 - depth) * 90}px`,
                  "--scale": Math.max(0.82, 1 - depth * 0.1),
                  "--opacity": depth > 1 ? 0.36 : depth === 1 ? 0.72 : 1,
                  "--z": 10 - depth,
                } as CSSProperties
              }
            >
              <span className={styles.cardInner}>
                <span className={styles.step}>{item.step}</span>
                <span className={styles.subtitle}>GEO process</span>
                <span className={styles.title}>{item.title}</span>
                <span className={styles.desc}>{item.desc}</span>
                <span className={styles.rail} aria-hidden="true" />
              </span>
            </button>
          );
        })}
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.button} onClick={() => move(-1)} aria-label="Previous process step">
          <ChevronLeft size={18} />
        </button>
        <div className={styles.dots} aria-label={`Current step: ${activeItem?.title}`}>
          {items.map((item, index) => (
            <button
              key={item.step}
              type="button"
              className={styles.dot}
              data-active={index === active}
              onClick={() => setActive(index)}
              aria-label={`Show ${item.title}`}
            />
          ))}
        </div>
        <button type="button" className={styles.button} onClick={() => move(1)} aria-label="Next process step">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
