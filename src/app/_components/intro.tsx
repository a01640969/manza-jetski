import Link from "next/link";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Renta Jetski en Manzanillo
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Renta de waverunner con{" "}
        <Link
          href="/personal-de-apoyo"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          personal de apoyo en todo momento
        </Link>{" "}
        disfruta de las mejores{" "}
        <Link
          href="/actividades"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          actividades
        </Link>{" "}
        en Bahía de Santiago.
      </h4>
    </section>
  );
}
