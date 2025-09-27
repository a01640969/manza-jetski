import Container from "@/app/_components/container";
import Link from "next/link";

export default function PersonalDeApoyoPage() {
  return (
    <main className="py-16">
      <Container>
        <h1 className="text-4xl font-bold mb-6">Personal de Apoyo en Todo Momento</h1>
        <p className="mb-4">
          Nuestro equipo llevara la jetski hacia a ti, y se encargara de que no te falte nada.
        </p>
        <p className="mb-4">
          Si deseas descansar solo tendras que llamarnos y cuidaremos la jetski hasta que estes listo para continuar!!!
        </p>
        <p className="mb-4">
          Recibirás instrucciones personalizadas, supervisión constante y asistencia en
          cada actividad, .
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
