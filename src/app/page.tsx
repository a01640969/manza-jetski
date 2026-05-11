import Image from "next/image";

const PHONE_INTL = "523121898177";
const WA_MSG = encodeURIComponent(
  "Hola, vi tu Sea-Doo Wake Pro 230 2017 en manzajetski.com y me interesa. ¿Sigue disponible? ¿Cuál es el precio?"
);
const WA_URL = `https://wa.me/${PHONE_INTL}?text=${WA_MSG}`;
const TEL_URL = `tel:+${PHONE_INTL}`;

const IMG_HERO = "/assets/blog/hello-world/cover.jpg";
const IMG_GALLERY_1 = "/assets/blog/dynamic-routing/cover.jpeg";
const IMG_GALLERY_2 = "/assets/blog/preview/cover.jpg";
const IMG_GALLERY_3 = "/assets/blog/hello-world/cover.jpg";
const IMG_SPECS = "/assets/blog/dynamic-routing/cover.jpeg";

const WAIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5c1.5.9 3.3 1.4 5.2 1.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.8a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0122 16.92z" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function TopBar() {
  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <div className="brand">
          <div className="brand-mark">M</div>
          <span>Manzajetski</span>
        </div>
        <nav className="top-nav">
          <a href="#destacado">Destacado</a>
          <a href="#galeria">Galería</a>
          <a href="#especificaciones">Ficha técnica</a>
          <a href="#entrega">Entrega</a>
          <a href="#preguntas">Preguntas</a>
        </nav>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="top-cta">
          <span className="dot"></span>
          WhatsApp · 312 189 8177
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-eyebrow">
            <span className="pill">En venta</span>
            <span>Manzanillo, Colima · México</span>
          </div>
          <h1>
            Sea-Doo<br />
            Wake Pro <em>230</em><br />
            <span style={{ fontStyle: "italic", color: "var(--muted)", fontSize: "0.6em" }}>modelo 2017</span>
          </h1>
          <p className="hero-sub">
            Moto acuática <strong>Sea-Doo Wake Pro 230 (2017)</strong> en excelente estado,
            recién salida del mecánico, con remolque incluido y papeles en regla.
            Lista para subirse al agua hoy mismo.
          </p>

          <div className="hero-meta">
            <div className="m"><span className="m-k">Año</span><span className="m-v">2017</span></div>
            <div className="m"><span className="m-k">Horas</span><span className="m-v">≈ 150</span></div>
            <div className="m"><span className="m-k">Capacidad</span><span className="m-v">3 personas</span></div>
            <div className="m"><span className="m-k">Motor</span><span className="m-v">Rotax 1503</span></div>
            <div className="m"><span className="m-k">Remolque</span><span className="m-v">Incluido</span></div>
          </div>

          <div className="hero-cta">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wa">
              <WAIcon />
              Escribir por WhatsApp para precio
            </a>
            <a href={TEL_URL} className="btn-tel">
              <PhoneIcon />
              Llamar 312 189 8177
            </a>
          </div>
        </div>

        <div className="hero-img-wrap">
          <div className="hero-badge">
            <span className="b accent">Disponible ahora</span>
            <span className="b">Papeles en regla</span>
          </div>
          <Image
            src={IMG_HERO}
            alt="Sea-Doo Wake Pro 230 en agua"
            fill
            priority
            sizes="(max-width: 880px) 100vw, 50vw"
            className="cover"
            style={{ objectFit: "cover" }}
          />
          <div className="hero-caption">
            <span>MZL · 19.10°N 104.34°W</span>
            <span>Bahía de Santiago</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Sea-Doo Wake Pro 230",
    "Modelo 2017",
    "≈ 150 horas",
    "Remolque incluido",
    "Papeles en regla",
    "Recién servida",
    "Manzanillo, Col.",
  ];
  const row = (
    <span>
      {items.map((t, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 56 }}>
          {t}
          <span className="mq-dot">✦</span>
        </span>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row}{row}{row}
      </div>
    </div>
  );
}

function Highlights() {
  const cards = [
    {
      ic: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" /></svg>
      ),
      title: "Recién del mecánico",
      body: "Servicio completo, lista para entregar y navegar. Todo revisado por mecánico de confianza.",
    },
    {
      ic: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="6" rx="1" /><circle cx="7" cy="19" r="2" /><circle cx="17" cy="19" r="2" /><path d="M3 11l3-5h12l3 5" /></svg>
      ),
      title: "Remolque incluido",
      body: "Te la llevas con todo. Remolque listo para trasladar a cualquier playa de la región.",
    },
    {
      ic: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" /></svg>
      ),
      title: "Papeles al corriente",
      body: "Documentación lista para transferir. Sin adeudos. Trámite limpio y rápido.",
    },
    {
      accent: true,
      ic: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" /><path d="M12 6c2 3 2 9 0 12M8 8c-1 2-1 6 0 8M16 8c1 2 1 6 0 8" /></svg>
      ),
      title: "Apta para deportes acuáticos",
      body: "Wake, ski, donas, tubing. Wake Pro 230 trae torre y pylon para deportes de remolque.",
    },
  ];
  return (
    <section data-section id="destacado">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">01 — Por qué interesa</span>
          <h2 className="sec-title">
            Una moto <em>cuidada</em> y lista para divertirse.
          </h2>
        </div>
        <div className="highlights">
          {cards.map((c, i) => (
            <div key={i} className={"h-card" + (c.accent ? " accent" : "")}>
              <div className="ic">{c.ic}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const items: { src: string; alt: string; cls: string }[] = [
    { src: IMG_GALLERY_1, alt: "Foto real · vista lateral en agua", cls: "g-item span-3 wide" },
    { src: IMG_GALLERY_2, alt: "Sea-Doo Wake Pro 230 (referencia)", cls: "g-item span-3 wide" },
    { src: IMG_GALLERY_3, alt: "Foto real · remolque", cls: "g-item span-2" },
    { src: IMG_GALLERY_1, alt: "Foto real · panel y volante", cls: "g-item span-2" },
    { src: IMG_GALLERY_2, alt: "Detalle de torre y pylon", cls: "g-item span-2" },
    { src: IMG_GALLERY_3, alt: "Foto real · jetski completa en plataforma", cls: "g-item span-3 tall" },
    { src: IMG_GALLERY_1, alt: "Sea-Doo Wake Pro 230 · vista frontal", cls: "g-item span-3 tall" },
  ];
  return (
    <section data-section id="galeria">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">02 — Galería</span>
          <h2 className="sec-title">
            Fotos <em>reales</em> y fotos del modelo de fábrica.
          </h2>
        </div>

        <div className="gallery">
          {items.map((it, i) => (
            <div key={i} className={it.cls}>
              <Image src={it.src} alt={it.alt} fill sizes="(max-width: 760px) 50vw, 33vw" style={{ objectFit: "cover" }} />
            </div>
          ))}
        </div>

        <p style={{ marginTop: 18, fontSize: 12, color: "var(--muted)", fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.04em" }}>
          * Algunas imágenes son del fabricante para referencia del modelo. Las fotos reales se muestran al contactar por WhatsApp.
        </p>
      </div>
    </section>
  );
}

function Specs() {
  const groups: { title: string; rows: [string, string, string?][] }[] = [
    {
      title: "Motor y rendimiento",
      rows: [
        ["Motor", "Rotax 1503 NA", "4-tiempos · 3 cil"],
        ["Potencia", "155 HP", "naturalmente aspirado"],
        ["Aceleración", "iTC", "throttle electrónico"],
        ["Frenado / reversa", "iBR", "control inteligente"],
        ["Velocidad máxima", "≈ 80 km/h", "50 mph"],
        ["Tanque combustible", "60 L", "gasolina premium"],
      ],
    },
    {
      title: "Dimensiones y capacidad",
      rows: [
        ["Año / modelo", "2017", "Wake Pro 230"],
        ["Eslora", "3.44 m", "135.6 in"],
        ["Manga", "1.25 m", "49.2 in"],
        ["Peso en seco", "371 kg", "818 lb"],
        ["Capacidad", "3 personas", "272 kg · 600 lb"],
        ["Almacenamiento", "116 L", "compartimentos"],
      ],
    },
    {
      title: "Equipamiento Wake Pro",
      rows: [
        ["Torre y pylon de wake", "Incluido"],
        ["Espejo retrovisor amplio", "Incluido"],
        ["Sistema iControl", "Sí"],
        ["Modos de manejo", "Sport · Touring · Eco"],
        ["Llave de aprendizaje", "Incluida"],
        ["Cruise control", "Sí"],
      ],
    },
    {
      title: "Lo que incluye la venta",
      rows: [
        ["Jetski Sea-Doo Wake Pro 230", "✓"],
        ["Remolque", "✓"],
        ["Papeles y factura", "✓"],
        ["Servicio reciente", "✓"],
        ["Horas estimadas", "≈ 150 h"],
        ["Estado general", "Excelente"],
      ],
    },
  ];

  return (
    <section data-section id="especificaciones">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">03 — Ficha técnica</span>
          <h2 className="sec-title">
            Todo lo que un comprador <em>quiere saber</em>.
          </h2>
        </div>

        <div className="specs">
          <aside className="specs-aside">
            <div className="ph-block">
              <Image src={IMG_SPECS} alt="Sea-Doo Wake Pro 230 vista 3/4" fill sizes="(max-width: 880px) 100vw, 40vw" style={{ objectFit: "cover" }} />
            </div>
            <p>
              La <strong>Sea-Doo Wake Pro 230</strong> es la versión optimizada para
              deportes acuáticos de remolque: torre de wake, pylon reforzado y
              espejo amplio para vigilar al jalado. Misma plataforma confiable
              GTI con motor Rotax 1503 NA.
            </p>
          </aside>

          <div className="spec-groups">
            {groups.map((g, gi) => (
              <div key={gi}>
                <h3 className="spec-group-title">{g.title}</h3>
                {g.rows.map(([k, v, hint], i) => (
                  <div key={i} className="spec-row">
                    <span className="k">{k}</span>
                    <span className="v">
                      {v}
                      {hint && <small>{hint}</small>}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Includes() {
  const items = [
    { lbl: "01", h: "La jetski", p: "Sea-Doo Wake Pro 230 modelo 2017, motor Rotax 1503 NA de 155 HP. Aproximadamente 150 horas. Recién salida de servicio mecánico completo." },
    { lbl: "02", h: "El remolque", p: "Remolque incluido en la venta, listo para trasladar la moto por carretera. Te la llevas el mismo día si así lo decides." },
    { lbl: "03", h: "Los papeles", p: "Factura, documentación y permisos en regla. Trámite de transferencia limpio. Sin adeudos ni pendientes." },
  ];
  return (
    <section data-section id="incluye">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">04 — Qué incluye</span>
          <h2 className="sec-title">
            Tres cosas. <em>Sin sorpresas.</em>
          </h2>
        </div>
        <div className="includes">
          {items.map((it, i) => (
            <div key={i} className="inc-card">
              <span className="lbl">{it.lbl}</span>
              <h4>{it.h}</h4>
              <p>{it.p}</p>
              <span className="check"><CheckIcon /> Incluido en la venta</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  const cities: [string, string][] = [
    ["Manzanillo, Col.", "Punto de entrega"],
    ["Colima capital", "≈ 1 h"],
    ["Tecomán, Col.", "≈ 1 h"],
    ["Cihuatlán / Barra de Navidad, Jal.", "≈ 1 h"],
    ["Lázaro Cárdenas, Mich.", "≈ 3 h"],
    ["Puerto Vallarta, Jal.", "≈ 4.5 h"],
    ["Guadalajara, Jal.", "≈ 4 h"],
  ];
  return (
    <section data-section id="entrega">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">05 — Ubicación y entrega</span>
          <h2 className="sec-title">
            En Manzanillo. <em>Vendo a la región.</em>
          </h2>
        </div>

        <div className="location">
          <div className="loc-card">
            <div className="lbl">Punto de entrega</div>
            <h3>Manzanillo,<br />Colima</h3>
            <p>
              La jetski está físicamente en Manzanillo. Puedes venir a verla,
              probarla y llevarla con su remolque. También vendo a ciudades
              cercanas de Colima, Jalisco y Michoacán — coordinamos por WhatsApp.
            </p>
          </div>

          <div className="loc-list">
            <h4>Vendo a compradores en:</h4>
            <ul>
              {cities.map(([name, dist], i) => (
                <li key={i}>
                  <span>{name}</span>
                  <span className="dist">{dist}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qa = [
    { q: "¿Cuál es el precio de la jetski?", a: "El precio se maneja directo por WhatsApp para asegurar que cada interesado reciba la información actualizada. Escríbeme al 312 189 8177 y te paso precio, fotos reales y disponibilidad al momento." },
    { q: "¿La Sea-Doo Wake Pro 230 2017 está realmente en buen estado?", a: "Sí. Acaba de salir del mecánico con servicio completo. Motor Rotax 1503 NA funcionando perfecto, sin fugas, sin fallas. Aproximadamente 150 horas de uso. Puedes venir a verla y probarla antes de cerrar." },
    { q: "¿Cuántas personas suben?", a: "Hasta 3 personas o 272 kg / 600 lb. Diseñada como moto familiar/deportiva — cómoda para pasear, potente para wakeboard, ski y donas inflables." },
    { q: "¿El remolque está incluido en el precio?", a: "Sí. La venta incluye jetski + remolque. Te la puedes llevar el mismo día por carretera a Colima, Jalisco, Michoacán o donde la necesites." },
    { q: "¿Los papeles están en regla?", a: "Sí. Factura original, documentación al corriente y sin adeudos. Hago el trámite de transferencia contigo de forma limpia." },
    { q: "¿Aceptas cambios, financiamiento o pagos a plazos?", a: "Hablémoslo por WhatsApp. Lo más sencillo es pago de contado, pero estoy abierto a propuestas serias." },
    { q: "¿Puedo verla y probarla antes de comprar?", a: "Por supuesto. Si vienes a Manzanillo agendamos una cita en la marina. Si estás en otra ciudad, te mando video en tiempo real y todas las fotos que necesites." },
    { q: "¿Para qué tipo de uso es ideal esta moto?", a: "La Wake Pro 230 fue diseñada para deportes acuáticos de remolque: wakeboard, ski, wakesurf, donas y tubing. También funciona perfecto para pasear y recorrer la bahía. Es estable, cómoda y tiene torre y pylon de fábrica." },
  ];
  return (
    <section data-section id="preguntas">
      <div className="wrap">
        <div className="sec-head">
          <span className="sec-num">06 — Preguntas frecuentes</span>
          <h2 className="sec-title">
            Las dudas <em>más comunes</em>.
          </h2>
        </div>
        <div className="faq">
          {qa.map((it, i) => (
            <details key={i} open={i === 0}>
              <summary>{it.q}</summary>
              <div className="a">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta" id="contacto">
      <div className="wrap final-inner">
        <span className="eyebrow">Cierra la venta hoy</span>
        <h2>
          ¿Lista para subirse <em>al agua?</em>
        </h2>
        <p>
          Escríbeme por WhatsApp y te paso fotos reales, precio y respondo cualquier duda
          de la <strong>Sea-Doo Wake Pro 230 (2017)</strong> con remolque, en Manzanillo.
        </p>
        <div className="ctas">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-wa">
            <WAIcon />
            Escribir por WhatsApp
          </a>
          <a href={TEL_URL} className="btn-tel">
            <PhoneIcon />
            Llamar 312 189 8177
          </a>
        </div>
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-row">
          <div>
            <p style={{ color: "rgba(250,248,242,.92)", fontFamily: "Instrument Serif, serif", fontSize: 20, marginBottom: 6 }}>
              Manzajetski
            </p>
            <p>Venta directa por dueño · Manzanillo, Col.</p>
            <p style={{ marginTop: 8 }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer">WhatsApp · 312 189 8177</a>
              <span> · </span>
              <a href={TEL_URL}>Llamar</a>
            </p>
          </div>
          <div style={{ textAlign: "right", maxWidth: 320 }}>
            <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(250,248,242,.5)" }}>
              Ubicación
            </p>
            <p style={{ marginTop: 6 }}>Bahía de Santiago, Manzanillo, Colima, México</p>
          </div>
        </div>
        <p className="seo-tags">
          Venta de jetski en Manzanillo · Sea-Doo Wake Pro 230 2017 usado · moto acuática
          Manzanillo Colima · waverunner usado México · jetski seminueva con remolque ·
          venta moto de agua Colima · Jet ski Sea-Doo 2017 · venta jetski Vallarta ·
          jetski Lázaro Cárdenas Michoacán · venta moto acuática Tecomán · Cihuatlán Barra
          de Navidad jetski · waverunner Rotax 1503 · venta Sea-Doo iBR · jetski
          familiar deportivo con torre de wake · seadoo wake pro segunda mano.
        </p>
      </div>
    </footer>
  );
}

function FabWA() {
  return (
    <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="fab-wa" aria-label="Escribir por WhatsApp">
      <WAIcon />
    </a>
  );
}

export default function Index() {
  return (
    <div className="mj-root">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <TopBar />
      <main>
        <Hero />
        <Marquee />
        <Highlights />
        <Gallery />
        <Specs />
        <Includes />
        <Location />
        <FAQ />
      </main>
      <FinalCTA />
      <Foot />
      <FabWA />
    </div>
  );
}
