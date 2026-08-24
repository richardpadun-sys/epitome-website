"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The hero's background plate: drone footage of the Kingston riverside where
 * Epitome's office is, treated so it reads as brand surface rather than as
 * raw footage.
 *
 * Handling:
 * — The clip is a ping-pong loop (forward then reversed), so it turns rather
 *   than jump-cutting, and it is slowed to 1.4× duration so nothing about it
 *   feels like a showreel.
 * — The poster carries the frame until the video can actually play, then the
 *   video cross-fades in. Nothing pops.
 * — Under prefers-reduced-motion the video is never attached to the DOM at
 *   all; the poster stands in. That saves the download as well as the motion.
 * — A 1024px cut is served below 900px viewport width so phones do not pull
 *   the 1920 file.
 *
 * The colour treatment lives in the parent (Hero) as overlay layers, not
 * baked into the encode, so it can be tuned without a re-render.
 */
export function HeroVideo({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [motionOk, setMotionOk] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotionOk(!query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || !motionOk) return;

    const play = () => void node.play().catch(() => {});

    if (node.readyState >= 3) {
      setReady(true);
      play();
    }

    /**
     * `autoplay` is refused often enough — iOS Low Power Mode, some data-saver
     * modes, a bfcache restore — that it cannot be the only thing starting
     * playback. Retry when the tab becomes visible and on the first
     * interaction, then stop listening.
     */
    const retry = () => {
      if (node.paused) play();
    };
    const onVisible = () => {
      if (document.visibilityState === "visible") retry();
    };

    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("pointerdown", retry, { once: true });
    window.addEventListener("touchstart", retry, { once: true, passive: true });

    return () => {
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pointerdown", retry);
      window.removeEventListener("touchstart", retry);
    };
  }, [motionOk]);

  const handleCanPlay = () => {
    setReady(true);
    void ref.current?.play().catch(() => {});
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Poster is always painted, so there is never an empty frame. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/video/kingston-poster.jpg)" }}
      />

      {motionOk ? (
        <video
          ref={ref}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
          poster="/video/kingston-poster.jpg"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={handleCanPlay}
          onLoadedData={handleCanPlay}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <source
            src="/video/kingston-1024.mp4"
            type="video/mp4"
            media="(max-width: 900px)"
          />
          <source src="/video/kingston-1920.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
