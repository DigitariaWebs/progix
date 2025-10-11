'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { StaggeredMenu } from '@/components/StaggeredMenu';

export default function GlobalMenu() {
  const pathname = usePathname();
  if (pathname.startsWith('/contact')) return null;

  const menuItems = [
    { label: 'Accueil', ariaLabel: "Aller à la page d'accueil", link: '/' },
    { label: 'Services', ariaLabel: 'Voir nos services', link: '/services' },
    { label: 'Portfolio', ariaLabel: 'Voir notre portfolio', link: '/portfolio' },
    { label: 'Équipe', ariaLabel: 'Découvrir notre équipe', link: '/team' },
    { label: 'Valeurs', ariaLabel: 'Connaître nos valeurs', link: '/nos-valeurs' },
    { label: 'ConFoo', ariaLabel: 'Découvrir ConFoo 2025', link: '/confoo-2025' }
  ];

  const socialItems = [
    { label: 'LinkedIn', link: 'https://linkedin.com/company/progix' },
    { label: 'GitHub', link: 'https://github.com/progix' },
    { label: 'Twitter', link: 'https://twitter.com/progix' }
  ];

  // duplicates removed

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#000000"
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen={false}
        colors={['#4FA3D1', '#1B363C']}
        logoUrl="/images/logo.png"
        accentColor="#4FA3D1"
      />
    </div>
  );
}


