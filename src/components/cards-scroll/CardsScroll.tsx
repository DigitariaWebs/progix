"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import "./styles.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export type CardsScrollItem = {
  title: string;
  copy: string;
  imageSrc?: string;
};

function Card({ title, copy, index, imageSrc }: CardsScrollItem & { index: number }) {
  return (
    <div className="cg-card" id={`cg-card-${index + 1}`}>
      <div className="cg-cardInner">
        <div className="cg-cardContent">
          <h1 className="cg-h1">{title}</h1>
          <p className="cg-p">{copy}</p>
        </div>
        <div className="cg-cardImg">
          {imageSrc ? <img src={imageSrc} alt={title} /> : null}
        </div>
      </div>
    </div>
  );
}

export default function CardsScroll({
  items,
  hideIntro,
  hideHero,
  hideOutro,
  outroText = "Let's build a brand that leaves a mark.",
  isDark,
}: {
  items: CardsScrollItem[];
  hideIntro?: boolean;
  hideHero?: boolean;
  hideOutro?: boolean;
  outroText?: string;
  isDark?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".cg-card");

      if (!hideIntro) {
        ScrollTrigger.create({
          trigger: cards[0],
          start: "top 35%",
          endTrigger: cards[cards.length - 1],
          end: "top 30%",
          pin: ".cg-intro",
          pinSpacing: false,
        });
      }

      cards.forEach((card, index) => {
        const cardInner = card.querySelector(".cg-cardInner") as HTMLElement | null;
        if (!cardInner) return;

        // Use the last card as endTrigger when outro is hidden
        const endTrigger = hideOutro ? cards[cards.length - 1] : ".cg-outro";
        
        ScrollTrigger.create({
          trigger: card,
          start: "top 35%",
          endTrigger: endTrigger,
          end: "top 65%",
          pin: true,
          pinSpacing: false,
        });

        // Different animation for first card (slower movement, starts earlier)
        if (index === 0) {
          gsap.to(cardInner, {
            y: `-${(cards.length - index) * 14 * 0.3}vh`, // 30% of normal movement
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 60%", // Starts earlier when card is 60% visible
              endTrigger: endTrigger,
              end: "top 20%", // Ends earlier when card is 20% visible
              scrub: 1.5, // Faster scrub for quicker response
            },
          });
        } else {
          gsap.to(cardInner, {
            y: `-${(cards.length - index) * 14}vh`,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 35%",
              endTrigger: endTrigger,
              end: "top 65%",
              scrub: true,
            },
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <div className="cg-reset">
      <div className={isDark ? "cg-app cg-dark" : "cg-app"} ref={containerRef}>
        {!hideHero && (
          <section className="cg-hero">
            <img src="/images/img04.jpg" alt="hero" />
          </section>
        )}

        {!hideIntro && (
          <section className="cg-intro">
            <h1 className="cg-h1">
              Creating standout brands for startups that bring joy and leave lasting impressions.
            </h1>
          </section>
        )}

        <section className="cg-cards">
          {items.map((item, i) => (
            <Card key={i} index={i} {...item} />
          ))}
        </section>

        {!hideOutro && (
          <section className="cg-outro">
            <h1 className="cg-h1">{outroText}</h1>
          </section>
        )}
      </div>
    </div>
  );
}


