'use client';

import { useEffect, useState } from 'react';

const dayPhrases: Record<number, string[]> = {
  0: [
    'Qui travaille un dimanche ?',
  ],
  1: [
    'Lundi... café obligatoire',
    'Nouveau lundi, nouvelles bugs',
    'Lundi = jour de survie',
  ],
  2: [
    'Encore 3 dodos avant vendredi',
  ],
  3: [
    'Encore 2 dodos avant vendredi',
  ],
  4: [
    'Jeudi, presque là',
  ],
  5: [
    'Finally Friday !',
  ],
  6: [
    'Profitez de votre samedi',
  ],
};

export default function DayPhrase() {
  const [phrase, setPhrase] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const today = new Date().getDay();
    const phrases = dayPhrases[today];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setPhrase(randomPhrase);

    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Only render on client to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="text-sm text-gray-600 dark:text-gray-400 italic opacity-0 -translate-y-2">
        Loading...
      </div>
    );
  }

  return (
    <div
      className={`text-sm text-gray-600 dark:text-gray-400 italic transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
      }`}
    >
      {phrase}
    </div>
  );
}
