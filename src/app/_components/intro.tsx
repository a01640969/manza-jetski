import cn from "classnames";
import Link from "next/link";

type IntroProps = {
  className?: string;
};

export function Intro({ className }: IntroProps) {
  const ctaButtonClass =
    "inline-flex min-w-[160px] items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm md:text-base font-semibold text-white text-center leading-tight shadow-lg shadow-blue-900/30 transition-colors duration-200 hover:bg-blue-500";

  return (
    <section
      className={cn(
        "flex-col md:flex-row flex items-center md:justify-between mt-8 mb-16 md:mb-12",
        className,
      )}
    >
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Renta Jetski en Manzanillo
      </h1>
      <div className="flex flex-col md:pl-8 max-w-prose w-full">
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
      <div className="mt-10 flex justify-center flex-col gap-4 md:flex-row md:items-center md:gap-6 md:pl-8">
        <Link href="#promocion" className={ctaButtonClass}>
          Precios
        </Link>
        <Link href="#promocion" className={ctaButtonClass}>
          Agendar
        </Link>
      </div>
      </div>
    </section>
  );
}
