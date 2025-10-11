import ContactSection from './ContactSection';
import Footer from '../../components/layout/Footer';
// Keep Navbar here if contact must not have StaggeredMenu; no change to header

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <ContactSection />
      <Footer />
    </div>
  );
}
