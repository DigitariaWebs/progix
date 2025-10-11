'use client';

import React, { useEffect, useRef, useState } from 'react';
import './SectionFadeBg.css';

interface SectionFadeBgProps {
  threshold?: number;
  className?: string;
  children: React.ReactNode;
}

export default function SectionFadeBg({ threshold = 0.3, className = '', children }: SectionFadeBgProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          setDark(entry.isIntersecting);
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={`sf-bg ${dark ? 'sf-dark' : ''}${className ? ' ' + className : ''}`}>
      {children}
    </div>
  );
}


