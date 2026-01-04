export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="font-cinzel text-6xl md:text-8xl font-bold gold-gradient-text text-shadow-gold">
          MAB AI Strategies
        </h1>

        <p className="text-xl md:text-2xl text-off-white/80 font-inter max-w-2xl mx-auto">
          Elite AI agents, custom automations, and web applications for discerning businesses.
        </p>

        <div className="glass-morph gold-border rounded-lg p-8 inline-block">
          <p className="text-champagne-gold font-cinzel text-lg">
            Foundation Phase: In Development
          </p>
        </div>
      </div>

      {/* Subtle background pattern */}
      <div className="fixed inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-champagne-gold/20 via-transparent to-midnight-navy/20" />
      </div>
    </main>
  );
}
