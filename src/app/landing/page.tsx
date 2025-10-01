import HeroSection from '@/app/landing/HeroSection';
import Footer from '@/app/landing/Footer';
import CtaButton from './CtaButton';

// Move your entire hero section component/code here
export default function LandingPage() {
  return (
    <div className="landing-page font-montserrat">
      {/* This is your branch's hero section */}
      <HeroSection />

      <CtaButton />

      <Footer />
      {/* Rest of your landing page content */}
    </div>
  );
}
