'use client';

import { useEffect, useState } from 'react';

const dayPhrases: Record<number, string[]> = {
  0: [
    'Un peu tôt pour un Dimanche non ?',
    'Bon Dimanche à vous !',
    'Dimanche, le jour du repos... ou pas',
    'Dimanche, le jour parfait pour coder',
  ],
  1: [
    "C'est Lundi, courage !",
    'Lundi, nouvelle semaine, nouvelles possibilités',
    "Lundi, le café est votre ami aujourd'hui",
    'Lundi motivation... ou pas',
  ],
  2: [
    'Mardi, on prend le rythme',
    'Déjà Mardi ? Le temps file',
    'Mardi productif en perspective',
    'Un Mardi comme les autres',
  ],
  3: [
    'Mercredi, mi-chemin !',
    'Mercredi, le milieu de semaine déjà',
    'Mercredi, jour des enfants... et des devs',
    "Mercredi, encore un peu et c'est le weekend",
  ],
  4: [
    'Jeudi, presque Vendredi',
    "Jeudi, plus qu'un jour avant Vendredi",
    'Jeudi, on tient bon !',
    'Jeudi, la fin de semaine approche',
  ],
  5: [
    'Enfin Vendredi !',
    'Vendredi, le meilleur jour',
    'Vendredi, weekend loading... 90%',
    'Vendredi, on peut souffler',
  ],
  6: [
    'Samedi, profitez bien !',
    'Samedi, weekend mode: ON',
    'Samedi relax ou Samedi projets ?',
    'Le Samedi, tout est permis',
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
