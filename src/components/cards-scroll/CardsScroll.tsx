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
  outroText = "Let’s build a brand that leaves a mark.",
  isDark,
}: {
  items: CardsScrollItem[];
  hideIntro?: boolean;
  hideHero?: boolean;
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
        const isLast = index === cards.length - 1;
        const cardInner = card.querySelector(".cg-cardInner") as HTMLElement | null;
        if (!cardInner) return;

        if (!isLast) {
          ScrollTrigger.create({
            trigger: card,
            start: "top 35%",
            endTrigger: ".cg-outro",
            end: "top 65%",
            pin: true,
            pinSpacing: false,
          });

          gsap.to(cardInner, {
            y: `-${(cards.length - index) * 14}vh`,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 35%",
              endTrigger: ".cg-outro",
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

        <section className="cg-outro">
          <h1 className="cg-h1">{outroText}</h1>
        </section>
      </div>
    </div>
  );
}


