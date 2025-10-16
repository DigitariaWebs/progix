import Image from 'next/image';

const EquipeHero = () => {
  return (
    <section className="pt-40 pb-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Main Title */}
            <div 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight relative z-10"
              style={{ 
                color: '#000000',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: '900',
                opacity: '1',
                visibility: 'visible',
                display: 'block',
                lineHeight: '1.1'
              }}
            >
              <div style={{ color: '#000000', opacity: '1', marginBottom: '0.5rem' }}>UNE PETITE ÉQUIPE</div>
              <div style={{ color: '#000000', opacity: '1', marginBottom: '0.5rem' }}>AUX GRANDES</div>
              <div style={{ color: '#000000', opacity: '1' }}>AMBITIONS</div>
            </div>

            {/* Descriptive Paragraph */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Notre pire cauchemar est d'un jour se réveiller et être une équipe de 100 et devenir, 
              ce qu'on appelle à l'interne, une usine à saucisses. On préfère avoir une petite équipe 
              de joueurs AAA et faire une vingtaine de projets par année qui nous tiennent à cœur.
            </p>

            {/* Call to Action Button */}
            <div className="flex items-center gap-4">
              {/* 3D Hand Emoji */}
              <div className="text-4xl transform rotate-12">
                🤘
              </div>
              
              {/* Button */}
              <a 
                href="#about" 
                className="bg-black text-white rounded-full px-8 py-4 font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                APPRENEZ-EN PLUS SUR NOUS
              </a>
            </div>
          </div>

          {/* Right Column - Team Image */}
          <div className="relative">
            {/* Team Photo */}
            <div className="relative transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/imagesculture/Picsart_25-09-29_19-39-01-194.jpg"
                alt="Équipe PROGIX"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipeHero;
