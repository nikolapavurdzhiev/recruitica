import heroImage from '../../assets/hero/recruitica-hero.png';

export function Hero() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Hero Image with theme-specific overlays */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center 25%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark mode overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent dark:from-black/80 dark:to-black/20" />
        
        {/* Light mode overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 dark:to-gray-900/10" />
      </div>
      
      {/* Content with theme-specific text colors */}
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white dark:text-white mb-8 leading-tight drop-shadow-lg">
            THE FUTURE IS NOW
          </h1>
          <p className="text-3xl md:text-4xl text-indigo-100 dark:text-purple-200 font-light leading-relaxed drop-shadow-md">
            Smarter, Faster Hiring with Recruitica
          </p>
          
          {/* Optional: Add a CTA button */}
          <div className="mt-12">
            <a
              href="/jobs"
              className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-purple-600 dark:hover:bg-purple-700 transition-colors duration-150 shadow-lg hover:shadow-xl"
            >
              Explore Opportunities
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 