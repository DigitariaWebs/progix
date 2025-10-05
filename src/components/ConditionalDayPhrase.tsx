'use client';

import { usePathname } from 'next/navigation';
import DayPhrase from '@/components/DayPhrase';

export default function ConditionalDayPhrase() {
  const pathname = usePathname();

  // Don't show DayPhrase on the landing page
  if (pathname === '/landing' || pathname === '/portfolio') {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 px-4 py-2 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-lg shadow-sm">
      <DayPhrase />
    </div>
  );
}
