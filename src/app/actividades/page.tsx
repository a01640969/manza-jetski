import Container from "@/app/_components/container";
import Link from "next/link";

export default function ActividadesPage() {
  return (
    <main className="py-16">
      <Container>
        <h1 className="text-4xl font-bold mb-6">Actividades en la Bahía</h1>
        <p className="mb-4">
          Disfruta de recorridos guiados, sesiones de jetski, snorkel y paseos al atardecer
          diseñados para todos los niveles de experiencia.
        </p>
        <p className="mb-4">
          Consulta la disponibilidad y personaliza tu paquete para vivir la mejor aventura
          acuática en Manzanillo.
        </p>
        <img src="/assets/blog/dynamic-routing/cover.jpeg" alt= "Seado WakePro 2017" />
        <Link
          href="/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          Volver al inicio
        </Link>
      </Container>
    </main>
  );
}
