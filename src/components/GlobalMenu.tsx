'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { StaggeredMenu } from '@/components/StaggeredMenu';

export default function GlobalMenu() {
  const pathname = usePathname();
  const [menuButtonColor, setMenuButtonColor] = useState('#1B363C');
  const [logoFilter, setLogoFilter] = useState('none');
  const [ctaButtonColors, setCtaButtonColors] = useState({
    textColor: '#4FA3D1',
    borderColor: '#4FA3D1',
    circleColor: '#4FA3D1',
    arrowColor: '#4FA3D1',
    hoverTextColor: '#1a3a52',
    hoverArrowColor: '#1a3a52',
  });

  if (pathname.startsWith('/contact')) return null;

  // Detect if we're on a dark background (hero section on home page)
  useEffect(() => {
    const checkBackground = () => {
      // On home page, check if we're in the hero section (dark background)
      if (pathname === '/') {
        const heroSection = document.querySelector('section');
        if (heroSection) {
          const rect = heroSection.getBoundingClientRect();
          // If hero section is visible, use white/grey for everything
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            setMenuButtonColor('#ffffff');
            setLogoFilter('brightness(0) invert(1)'); // White logo
            setCtaButtonColors({
              textColor: '#ffffff',
              borderColor: '#ffffff',
              circleColor: '#ffffff',
              arrowColor: '#ffffff',
              hoverTextColor: '#1a3a52',
              hoverArrowColor: '#1a3a52',
            });
          } else {
            setMenuButtonColor('#1B363C');
            setLogoFilter('none'); // Normal colored logo
            setCtaButtonColors({
              textColor: '#4FA3D1',
              borderColor: '#4FA3D1',
              circleColor: '#4FA3D1',
              arrowColor: '#4FA3D1',
              hoverTextColor: '#ffffff',
              hoverArrowColor: '#ffffff',
            });
          }
        }
      } else {
        // For all other pages, use blue button
        setMenuButtonColor('#1B363C');
        setLogoFilter('none'); // Normal colored logo
        setCtaButtonColors({
          textColor: '#4FA3D1',
          borderColor: '#4FA3D1',
          circleColor: '#4FA3D1',
          arrowColor: '#4FA3D1',
          hoverTextColor: '#ffffff',
          hoverArrowColor: '#ffffff',
        });
      }
    };

    checkBackground();

    // Add scroll listener for home page to switch colors dynamically
    if (pathname === '/') {
      window.addEventListener('scroll', checkBackground);
      return () => window.removeEventListener('scroll', checkBackground);
    }
  }, [pathname]);

  const menuItems = [
    { label: 'Accueil', ariaLabel: "Aller à la page d'accueil", link: '/' },
    { label: 'Services', ariaLabel: 'Voir nos services', link: '/services' },
    {
      label: 'Portfolio',
      ariaLabel: 'Voir notre portfolio',
      link: '/portfolio',
    },
    { label: 'Équipe', ariaLabel: 'Découvrir notre équipe', link: '/team' },
    {
      label: 'Valeurs',
      ariaLabel: 'Connaître nos valeurs',
      link: '/nos-valeurs',
    },
    {
      label: 'ConFoo',
      ariaLabel: 'Découvrir ConFoo 2025',
      link: '/confoo-2025',
    },
  ];

  const socialItems = [
    { label: 'LinkedIn', link: 'https://linkedin.com/company/progix' },
    { label: 'GitHub', link: 'https://github.com/progix' },
    { label: 'Twitter', link: 'https://twitter.com/progix' },
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
        menuButtonColor={menuButtonColor}
        logoFilter={logoFilter}
        ctaButtonTextColor={ctaButtonColors.textColor}
        ctaButtonBorderColor={ctaButtonColors.borderColor}
        ctaButtonCircleColor={ctaButtonColors.circleColor}
        ctaButtonArrowColor={ctaButtonColors.arrowColor}
        ctaButtonHoverTextColor={ctaButtonColors.hoverTextColor}
        ctaButtonHoverArrowColor={ctaButtonColors.hoverArrowColor}
        openMenuButtonColor="#000000"
        changeMenuColorOnOpen={true}
        colors={['#4FA3D1', '#1B363C']}
        logoUrl="/images/logo.png"
        accentColor="#ffffff"
      />
    </div>
  );
}


