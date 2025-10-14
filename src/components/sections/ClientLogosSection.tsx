import Partners from '@/components/ui/Partners';

const ClientLogosSection = () => {
  return (
    <section className="relative bg-white py-12 overflow-hidden">
      {/* Decorative background elements (subtle) */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Blurry circles */}
        <div className="absolute top-16 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-12 right-16 w-96 h-96 bg-cyan-400/12 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-indigo-300/10 rounded-full blur-3xl"></div>

        {/* Vertical lines */}
        <div className="absolute left-[12%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200/40 to-transparent"></div>
        <div className="absolute left-[30%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-200/30 to-transparent"></div>
        <div className="absolute left-[55%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200/30 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <Partners />
      </div>
    </section>
  );
};

export default ClientLogosSection;
