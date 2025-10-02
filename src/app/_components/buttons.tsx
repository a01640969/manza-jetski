const Buttons = () => {
  return (
    <div className="absolute top-7 left-1/2 z-30 w-full max-w-4xl -translate-x-1/2 px-6">
    <nav className="flex flex-nowrap items-center justify-center gap-6 overflow-x-auto whitespace-nowrap text-xs font-semibold uppercase tracking-wide text-white md:text-sm">
      <a
        href="#promocion"
        className="px-1 py-2 transition-colors duration-200 hover:text-blue-200"
      >
        Precios
      </a>
      <a
        href="#acts"
        className="px-1 py-2 transition-colors duration-200 hover:text-blue-200"
      >
        Actividades
      </a>
      <a
        href="#acts"
        className="px-1 py-2 transition-colors duration-200 hover:text-blue-200"
      >
        Reglas
      </a>
      <a
        href="#acts"
        className="px-1 py-2 transition-colors duration-200 hover:text-blue-200"
      >
        Preguntas
      </a>
    </nav>
  </div>
  );
}

export default Buttons;