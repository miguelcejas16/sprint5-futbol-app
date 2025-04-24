export default function NotFound() {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
      <div className="text-center px-6 max-w-lg">
        <h1 className="text-6xl font-bold text-blue-700 dark:text-blue-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          Página No Encontrada
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Lo sentimos, la página que buscas no existe.
        </p>
        <p className="text-gray-500 dark:text-gray-300 mb-8">
          ¡Pronto podrás gestionar tus equipos!
        </p>
        <a
          href="/"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Volver al inicio
        </a>
      </div>
    </section>
  );
}