export default function NotFound() {
  return (
    <div className="container mx-auto py-32 px-4 flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-secondary-foreground">
          404
        </h1>
        <h2 className="text-3xl font-semibold mb-6 text-secondary-foreground">
          Pagina niet gevonden
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Sorry, de pagina die u zoekt bestaat niet of is verplaatst. Controleer
          de URL en probeer het opnieuw.
        </p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-tertiary transition-colors"
        >
          Terug naar startpagina
        </a>
      </div>
    </div>
  );
}
