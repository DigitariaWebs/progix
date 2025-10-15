"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import Logo from "./Logo";

type PageTransitionProps = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const logoOverlayRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<SVGSVGElement | null>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const isTransitioning = useRef(false);
  const pathLengthRef = useRef(0);
  const revealTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const revealPage = useCallback(() => {
    if (revealTimeoutRef.current) {
      clearTimeout(revealTimeoutRef.current);
    }

    gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "right" });
    gsap.to(blocksRef.current, {
      scaleX: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "power2.out",
      transformOrigin: "right",
      onComplete: () => {
        isTransitioning.current = false;
        if (overlayRef.current) overlayRef.current.style.pointerEvents = "none";
        if (logoOverlayRef.current) logoOverlayRef.current.style.pointerEvents = "none";
      },
    });

    // safety fallback drastically reduced to avoid perceived stall
    revealTimeoutRef.current = setTimeout(() => {
      if (blocksRef.current.length > 0) {
        const firstBlock = blocksRef.current[0];
        const val = Number(gsap.getProperty(firstBlock, "scaleX"));
        if (firstBlock && val > 0.01) {
          gsap.to(blocksRef.current, {
            scaleX: 0,
            duration: 0.18,
            ease: "power2.out",
            transformOrigin: "right",
            onComplete: () => {
              isTransitioning.current = false;
              if (overlayRef.current) overlayRef.current.style.pointerEvents = "none";
              if (logoOverlayRef.current) logoOverlayRef.current.style.pointerEvents = "none";
            },
          });
        }
      }
    }, 250);
  }, []);

  const coverPage = useCallback(
    (url: string) => {
      if (overlayRef.current) overlayRef.current.style.pointerEvents = "auto";
      if (logoOverlayRef.current) logoOverlayRef.current.style.pointerEvents = "auto";

      const tl = gsap.timeline();

      // 1) Cover with blocks; THEN immediately start routing
      tl.to(blocksRef.current, {
        scaleX: 1,
        duration: 0.4,
        stagger: 0.02,
        ease: "power2.out",
        transformOrigin: "left",
        onComplete: () => {
          // begin navigation while logo animation plays over the cover
          router.push(url);
        },
      })
        // 2) Play logo animation while new page loads
        .set(logoOverlayRef.current, { opacity: 1 }, "-=0.2")
        .set(
          logoRef.current?.querySelector("path"),
          { strokeDashoffset: pathLengthRef.current, fill: "transparent" },
          "-=0.25"
        )
        .to(
          logoRef.current?.querySelector("path"),
          { strokeDashoffset: 0, duration: 1.2, ease: "power2.inOut" },
          "-=0.3"
        )
        .to(
          logoRef.current?.querySelector("path"),
          { fill: "#e3e4d8", duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .to(logoOverlayRef.current, { opacity: 0, duration: 0.25, ease: "power2.out" });
    },
    [router]
  );

  const handleRouteChange = useCallback(
    (url: string) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;
      coverPage(url);
    },
    [coverPage]
  );

  const onAnchorClick = useCallback(
    (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      if (isTransitioning.current) {
        e.preventDefault();
        return;
      }
      const mev = e as MouseEvent;
      if (
        mev.metaKey ||
        mev.ctrlKey ||
        mev.shiftKey ||
        mev.altKey ||
        mev.button !== 0 ||
        target.target === "_blank"
      ) {
        return;
      }
      e.preventDefault();
      const href = target.href;
      const url = new URL(href).pathname;
      if (url !== pathname) {
        handleRouteChange(url);
      }
    },
    [pathname, handleRouteChange]
  );

  useEffect(() => {
    const createBlocks = () => {
      if (!overlayRef.current) return;
      overlayRef.current.innerHTML = "";
      blocksRef.current = [];
      for (let i = 0; i < 20; i++) {
        const block = document.createElement("div");
        block.className = "block";
        overlayRef.current.appendChild(block);
        blocksRef.current.push(block);
      }
    };

    createBlocks();
    gsap.set(blocksRef.current, { scaleX: 0, transformOrigin: "left" });

    if (logoRef.current) {
      const path = logoRef.current.querySelector("path");
      if (path) {
        pathLengthRef.current = (path as SVGPathElement).getTotalLength();
        gsap.set(path, {
          strokeDasharray: pathLengthRef.current,
          strokeDashoffset: pathLengthRef.current,
          fill: "transparent",
        });
      }
    }

    revealPage();

    const links = Array.from(document.querySelectorAll('a[href^="/"]')) as HTMLAnchorElement[];
    links.forEach((link) => link.addEventListener("click", onAnchorClick));

    return () => {
      links.forEach((link) => link.removeEventListener("click", onAnchorClick));
      if (revealTimeoutRef.current) clearTimeout(revealTimeoutRef.current);
    };
  }, [router, pathname, onAnchorClick, revealPage]);

  return (
    <>
      <div ref={overlayRef} className="transition-overlay" />
      <div ref={logoOverlayRef} className="logo-overlay">
        <div className="logo-container">
          <Logo ref={logoRef} />
        </div>
      </div>
      {children}
    </>
  );
}


