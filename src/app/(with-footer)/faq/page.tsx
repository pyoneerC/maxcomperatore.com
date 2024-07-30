import React from 'react'
import styles from './page.module.css'
import ScrollToTopButton from '~/components/ScrollToTopButton/ScrollToTopButton'
import Link from 'next/link'
export const metadata = {
  title: 'Max Comperatore - FAQ',
  description: 'Preguntas personales para reflexionar, y practicar para entrevistas de trabajo.',
}
const FAQ = () => {
  return (
    <>
      <div className={styles.container}>
        <ScrollToTopButton />
        <h1 className={styles.title}>FAQ - Preguntas Frecuentes</h1>
        <Link className={styles.goHomeLink} href="/">
          ← Volver a la página principal
        </Link>
        <Link className={styles.goHomeLink} href="/blog">
          ← Ir al Blog
        </Link>
        <section className={styles.section}>
          <h2 className={styles.title}>Recorrido en Programación</h2>
          <p className={styles.paragraph}>
            Mi camino en la programación comenzó en 2021, impulsado por mi interés por los videojuegos. Empecé con
            cursos
            básicos y bootcamps de desarollo web, y consolidé mi entusiasmo al colaborar en la aplicación de Android
            &quot;War Report for
            Clash of Clans&quot;. Esta experiencia reforzó mi decisión de seguir una carrera en programación.
          </p>
          <p className={styles.paragraph}>
            Actualmente, estoy cursando el segundo semestre de la carrera de Desarrollo de Juegos, con un enfoque
            particular en gráficos por computadora y backend. Mi objetivo es colaborar con personas que compartan
            intereses similares, inspirar a otros y contribuir de manera positiva al mundo a través de la tecnología.
            Tengo 19 años, pero ya estoy dedicado al aprendizaje continuo y en busca de oportunidades para mejorar y
            colaborar en proyectos significativos.
          </p>
        </section>
        <br />
        <section className={styles.section}>
          <h2 className={styles.title}>Motivaciones para Estudiar Programación</h2>
          <p className={styles.paragraph}>
            Siempre me ha fascinado transformar ideas abstractas en soluciones prácticas mediante la programación, un
            campo donde la técnica se fusiona con la creatividad.
            <br /><br />
            Mi temprana fascinación por los juegos y su desarrollo me ha llevado a dedicarme a la creación de
            software, donde encuentro una profunda satisfacción al desarrollar soluciones tecnológicas que satisfacen
            necesidades concretas.
          </p>
          <p className={styles.paragraph}>
            La constante evolución de la tecnología ofrece oportunidades únicas para contribuir a proyectos innovadores,
            y valoro profundamente el carácter colaborativo de la comunidad de desarrolladores,
            que no solo enriquece mi aprendizaje continuo sino que también fortalece conexiones con colegas generosos y
            solidarios.
          </p>
        </section>
        <br />
        <section className={styles.section}>
          <h2 className={styles.title}>¿Frontend o Backend?</h2>
          <p className={styles.paragraph}>
            Me especializo en el desarrollo backend, aunque también tengo la capacidad de trabajar en frontend cuando es
            necesario.
          </p>
          <p className={styles.paragraph}>
            Disfruto particularmente del desarrollo del lado del servidor, donde enfrento problemas complejos con un
            enfoque en la eficiencia y la seguridad. La gestión de bases de datos, el diseño y mantenimiento de APIs, y
            la mejora continua del rendimiento son aspectos que encuentro cruciales, ya que contribuyen a la creación
            de aplicaciones robustas y escalables.
          </p>
        </section>
        <br />
        <section className={styles.section}>
          <h2 className={styles.title}>¿Cómo te Ves en 5 Años?</h2>
          <p className={styles.paragraph}>
            En cinco años, me visualizo como un experto en backend y desarrollo de juegos, liderando equipos de alto
            rendimiento y compartiendo mi conocimiento como mentor. Aspiro a contribuir al avance de tecnologías de
            vanguardia, optimizar procesos complejos y desarrollar soluciones escalables y seguras.
          </p>
          <p className={styles.paragraph}>
            En lo personal, busco mantener un equilibrio saludable entre mi vida profesional y personal, disfrutando de
            mis pasatiempos y participando en proyectos innovadores que generen un impacto positivo en la sociedad.
          </p>
        </section>
        <br />
        <section className={styles.section}>
          <h2 className={styles.title}>¿Qué Buscas en un Nuevo Trabajo?</h2>
          <p className={styles.paragraph}>
            Busco un entorno colaborativo donde pueda trabajar junto a profesionales competentes y comprometidos.
          </p>
          <p className={styles.paragraph}>
            Me interesa participar en proyectos que aprovechen al máximo mis habilidades y conocimientos. Valoro
            especialmente los lugares que promuevan el crecimiento personal y profesional, respaldados por una
            comunicación efectiva y un sólido apoyo mutuo.
          </p>
          <p className={styles.paragraph}>
            Estoy entusiasmado por asumir nuevos desafíos y responsabilidades en un entorno que favorezca el aprendizaje
            continuo y la evolución profesional.
          </p>
        </section>
        <br />
        <section className={styles.section}>
          <h2 className={styles.title}>¿Qué Aprendiste Recientemente?</h2>
          <p className={styles.paragraph}>
            Recientemente, he estado explorando la creación de páginas web con Next.js y React, y he profundizado en
            el desarrollo de APIs RESTful con Node.js y Express.
          </p>
          <p className={styles.paragraph}>
            Además, he estado practicando la resolución de problemas con algoritmos y estructuras de datos en LeetCode,
            y he
            mejorado mi habilidad para trabajar en equipo y comunicarme de manera efectiva.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.title}>Recursos Educativos Recomendados</h2>
          <ul>
            <li>
        <span style={{ color: "skyblue", textDecoration: "underline", fontSize: "18px" }}>
        <a href="https://gist.github.com/pyoneerC/423ec3e9371fae255091d703e5dcc86c" target="_blank"
           rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "inherit" }}>
        Recursos de gráficos por computadora
        </a>
        </span>
            </li>
            <li>
        <span style={{ color: "skyblue", textDecoration: "underline", fontSize: "18px" }}>
        <a href="https://www.bigocheatsheet.com" target="_blank" rel="noopener noreferrer"
           style={{ color: "inherit", textDecoration: "inherit" }}>
        Hoja de Referencia de Notación Big O
        </a>
        </span>
            </li>
            <li>
        <span style={{ color: "skyblue", textDecoration: "none", fontSize: "16px" }}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"
           style={{ color: "inherit", textDecoration: "inherit" }}>
        Repositorios de Código Abierto en GitHub
        </a>
        </span>
            </li>
            <li>
        <span style={{ color: "skyblue", textDecoration: "underline", fontSize: "18px" }}>
        <a href="https://gist.github.com/pyoneerC/a9f9132ce2a57db5331a8cd95ca45b8e" target="_blank"
           rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "inherit" }}>
        Comunidades de Discord
        </a>
        </span>
            </li>
            <li>
        <span style={{ color: "skyblue", textDecoration: "none", fontSize: "16px" }}>
        <a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer"
           style={{ color: "inherit", textDecoration: "inherit" }}>
        Wikipedia y Libros
        </a>
        </span>
            </li>
            <li>
        <span style={{ color: "skyblue", textDecoration: "underline", fontSize: "18px" }}>
        <a href="https://fullstackopen.com/en/" target="_blank" rel="noopener noreferrer"
           style={{ color: "inherit", textDecoration: "inherit" }}>
        Fullstack Open
        </a>
        </span>
            </li>
            <li>
        <span style={{ color: "skyblue", textDecoration: "underline", fontSize: "16px" }}>
        <a href="https://learn.microsoft.com" target="_blank" rel="noopener noreferrer"
           style={{ color: "inherit", textDecoration: "inherit" }}>
        Microsoft Learn
        </a>
        </span>
            </li>
            <li>
        <span style={{ color: "skyblue", textDecoration: "underline", fontSize: "16px" }}>
        <a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer"
           style={{ color: "inherit", textDecoration: "inherit" }}>
        Khan Academy
        </a>
        </span>
            </li>
            <li>
        <span style={{ color: "skyblue", textDecoration: "underline", fontSize: "18px" }}>
        <a href="https://roadmap.sh" target="_blank" rel="noopener noreferrer"
           style={{ color: "inherit", textDecoration: "inherit" }}>
        Roadmap.sh
        </a>
        </span>
            </li>
            <li>
        <span style={{ color: "skyblue", textDecoration: "underline", fontSize: "18px" }}>
        <a href="https://www.learncpp.com" target="_blank" rel="noopener noreferrer"
           style={{ color: "inherit", textDecoration: "inherit" }}>
        Learn CPP
        </a>
        </span>
            </li>
            <li>
        <span style={{ color: "skyblue", textDecoration: "underline", fontSize: "16px" }}>
        <a href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer"
           style={{ color: "inherit", textDecoration: "inherit" }}>
        Perplexity
        </a>
        </span>
            </li>
            <li>
        <span style={{ color: "skyblue", textDecoration: "underline", fontSize: "16px" }}>
        <a href="https://app.diagrams.net/" target="_blank" rel="noopener noreferrer"
           style={{ color: "inherit", textDecoration: "inherit" }}>
        draw.io
        </a>
        </span>
            </li>
            <li>
        <span style={{ color: "skyblue", textDecoration: "underline", fontSize: "16px" }}>
        <a href="https://trello.com" target="_blank" rel="noopener noreferrer"
           style={{ color: "inherit", textDecoration: "inherit" }}>
        Trello
        </a>
        </span>
            </li>
          </ul>
        </section>
        <br /><br />
        <section className={styles.section}>
          <h2 className={styles.title}>Mantenerse Actualizado</h2>
          <p className={styles.paragraph}>
            Para estar al tanto de las últimas tendencias y tecnologías, sigo canales como&nbsp;
            <span style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
      <a href="https://m.youtube.com/@midulive" target="_blank" rel="noopener noreferrer"
         style={{ color: "inherit", textDecoration: "inherit" }}>
      Midudev
      </a>
      </span>
            ,&nbsp;
            <span style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
      <a href="https://m.youtube.com/@Fireship" target="_blank" rel="noopener noreferrer"
         style={{ color: "inherit", textDecoration: "inherit" }}>
      Fireship
      </a>
      </span>
            ,&nbsp;
            <span style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
      <a href="https://m.youtube.com/@unrealengine" target="_blank" rel="noopener noreferrer"
         style={{ color: "inherit", textDecoration: "inherit" }}>
      Unreal Engine
      </a>
      </span>
            &nbsp;y&nbsp;
            <span style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
      <a href="https://m.youtube.com/@unity" target="_blank" rel="noopener noreferrer"
         style={{ color: "inherit", textDecoration: "inherit" }}>
      Unity
      </a>
      </span>
            .
          </p>
          <p className={styles.paragraph}>
            A la vez, reviso repositorios tendencia en GitHub mientras le doy una mirada a&nbsp;
            <span style={{ color: "skyblue", textDecoration: "none", fontFamily: "inherit", fontSize: "inherit" }}>
      Discord
      </span>
            &nbsp;y&nbsp;
            <span style={{ color: "skyblue", textDecoration: "none", fontFamily: "inherit", fontSize: "inherit" }}>
      Reddit
      </span>
            &nbsp;para ver de qué se habla en la comunidad de desarrollo.
          </p>
        </section>
        <br />
        <section className={styles.section}>
          <h2 className={styles.title}>Hobbies y Pasatiempos</h2>
          <p className={styles.paragraph}>
            En mi tiempo libre, me dedico a desarrollar proyectos y colaborar activamente con la comunidad de
            desarrollo.
            Disfruto correr, caminar, ver videos de análisis de videojuegos, actualidad, y películas animadas.
          </p>
          <p className={styles.paragraph}>
            Además, me apasiona jugar a juegos de creadores independientes en Steam. Valoro la experiencia de andar en
            moto, explorar lugares abandonados para disfrutar de asados en la montaña y descubrir nueva música.
            A veces, utilizo FL Studio para componer música.
          </p>
        </section>
        <br />
        <section className={styles.section}>
          <h2 className={styles.title}>Preguntas Conductuales</h2>
          <ul className={styles.paragraph}>
            <li><strong>Lo más innovador que ha hecho y por qué lo considera innovador?</strong></li>
            <p>
              Definitivamente, la creación de la aplicación&nbsp;
              <span
                style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
        <a href="https://maxcomperatore.store" target="_blank" rel="noopener noreferrer"
           style={{ color: "inherit", textDecoration: "inherit" }}>
        Mercado Libre Price Chart
        </a>
        </span>&nbsp;
              es uno de los proyectos más innovadores que he realizado.
              <br /><br />
              Esta solución aborda una problemática recurrente entre los usuarios de Mercado Libre en Argentina:
              la incertidumbre sobre el valor real de los productos en un contexto económico volátil.
            </p>
            <br />
            <li><strong>Un momento en el que no sabías qué hacer o cómo resolver un problema difícil. ¿Cómo lo
              resolviste?</strong>
            </li>
            <p>
              Durante el desarrollo de este portafolio, me enfrenté al desafío de traducir manualmente todo el contenido
              al inglés, lo cual era engorroso y tedioso.
              <br /><br />
              Gracias a la orientación de &nbsp;
              <span
                style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
        <a href="https://github.com/santiagoarielv98" target="_blank" rel="noopener noreferrer"
           style={{ color: "inherit", textDecoration: "inherit" }}>
        Santiago Ariel
        </a>
        </span>
              , aprendí a implementar traducciones automáticas utilizando Translation.io, optimizando así el proceso y
              mejorando la eficiencia del desarrollo.
            </p>
            <br />
            <li><strong>Un momento en el que tuviste que aprender algo nuevo rápidamente?</strong></li>
            <p>
              Quería crear una API para obtener el precio actualizado de dólares en Argentina, utilizando web scrapers
              y
              con el fin de aprender. Al principio, no sabía cómo hacerlo, pero con Python, FASTAPI y dedicando
              tiempo a leer la documentación, logré desarrollarla con éxito.
            </p>
            <br />
            <p>
              Esta API, llamada{" "}
              <span
                style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
        <a
          href="https://github.com/pyoneerC/monedas-api"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
        Monedas-API
        </a>
        </span>
              , logra en solo 400 líneas de Python lo que otros proyectos realizan en miles.
            </p>
            <br />
            <p>
              Actualmente, es consumida por mi otro proyecto,{" "}
              <span
                style={{ color: "skyblue", textDecoration: "underline", fontFamily: "inherit", fontSize: "inherit" }}>
        <a
          href="https://maxcomperatore.store"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
        Mercado Libre Price Chart
        </a>
        </span>
              .
            </p>
            <br />
            <li><strong>Proyectos que te gustaría hacer en el futuro?</strong></li>
            <blockquote>
              <ul>
                <li>Una red neuronal compleja para hacer simulaciones en motores gráficos.</li>
                <li>Una APIs del precio del combustible y relacionadas a Argentina.</li>
                <li>Una página web en formato de librería virtual, donde los usuarios puedan compartir libros,
                  portfolios, y más.
                </li>
                <li>Un juego de autos a control remoto en Unreal Engine.</li>
                <li>Un motor de juegos propio, en DX12.</li>
                <li>Un bot de Discord versátil y complejo.</li>
                <li>Contribuir a proyectos de código abierto.</li>
              </ul>
            </blockquote>
            <br />
            <li><strong>Una ocasión en la que apoyó o capacitó a otra persona de su equipo para mejorar su
              rendimiento</strong>
            </li>
            <p>
              Durante una game jam, un compañero no sabía muy bien como hacer cierta funcionalidad con el scripting de
              Unreal Engine.
            </p>
            <br />
            <p>
              Le enseñé varias funcionalidades clave, recomendé recursos útiles y juntos revisamos su código. Al
              final,
              logramos terminar el proyecto a tiempo y con éxito.
            </p>
          </ul>
        </section>
        <section className={styles.section}>
          <h2 className={styles.title}>Mentores y Colaboradores</h2>
          <p className={styles.paragraph}>
            Quiero expresar mi profundo agradecimiento a&nbsp;
            <a href="https://twitter.com/colinschmale" target="_blank" rel="noopener noreferrer"
               style={{ color: "skyblue", textDecoration: "underline" }}>Colin Schmale</a>,&nbsp;
            <a href="https://github.com/FrancoYudica" target="_blank" rel="noopener noreferrer"
               style={{ color: "skyblue", textDecoration: "underline" }}>Franco Yudica</a>,&nbsp;y&nbsp;
            <a href="https://github.com/enzonotario" target="_blank" rel="noopener noreferrer"
               style={{ color: "skyblue", textDecoration: "underline" }}>Enzo Notario</a>, quienes han sido
            fundamentales en mi carrera por sus valiosos consejos y constante apoyo.
          </p>
          <p className={styles.paragraph}>
            También agradezco a mis compañeros de equipo en la Universidad y a los usuarios de varios servidores de
            Discord de programación en español, cuya disposición para ayudar y compartir sus conocimientos ha sido
            crucial para mi desarrollo profesional.
          </p>
          <p className={styles.paragraph}>
            Inspirado por estos ejemplos, aspiro a ofrecer el mismo nivel de apoyo y orientación a otros, perpetuando la
            cultura de colaboración y aprendizaje mutuo.
          </p>
        </section>
        <br />
        <section className={styles.section}>
          <h2 className={styles.title}>Canciones Favoritas</h2>
          <p className={styles.paragraph}>
            Una selección que te hará bailar como un cyborg con exceso de cafeína.
          </p>
          <ul>
            <ul>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=Tt3F2x0RuZI" target="_blank" rel="noopener noreferrer">Runaway (U & I) - Galantis</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=xY66ucVK-RM" target="_blank" rel="noopener noreferrer">Good 4 Me - Vindata</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=zubYYZ0fTyQ" target="_blank" rel="noopener noreferrer">Cutting Shapes - Don</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=RhR_Z5wVvJM" target="_blank" rel="noopener noreferrer">Play - Tokyo Machine</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=XmIgg9De9hY" target="_blank" rel="noopener noreferrer">The Nights - Avicii</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=j43PGdl03WA" target="_blank" rel="noopener noreferrer">She Wants Me Dead - CAZZ</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=FgApngD5faY" target="_blank" rel="noopener noreferrer">Silhouette (Feed Me Remix)</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=qcE__zJ4L6E" target="_blank"
             rel="noopener noreferrer">Still - Glacier</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=A8pOVirjGF0" target="_blank"
             rel="noopener noreferrer">Overkill - RIOT</a>
          </span>
              </li>
              <li>
          <span className={styles.paragraph} style={{ color: "skyblue", textDecoration: "underline" }}>
          <a href="https://www.youtube.com/watch?v=mype6RcMMmY" target="_blank"
             rel="noopener noreferrer">Jungle Fury - RIOT</a>
          </span>
              </li>
            </ul>
          </ul>
        </section>
        <br /><img
        src="https://cdn2.unrealengine.com/hlod-water-support-in-unreal-engine-5-1-1920x1080-e402b5c30a87.jpg?resize=1&w=1920"
        alt="Unreal Engine 5" className={styles.image} />
        <br />
        <p className={styles.paragraph} style={{ textAlign: "center" }}>
  <span className={styles.paragraph} style={{ color: "lime" }}>
  ¡Muchas gracias por leer hasta el final!
  </span>
          <br /><br />
          Si estás interesado en colaborar en algún proyecto, contratarme o simplemente deseas
          saludar, no dudes en contactarme a través de mis redes sociales o enviándome un correo electrónico. Puedes
          encontrar los enlaces en el pie de página a continuación.
        </p>
      </div>
    </>
  )
}

export default FAQ
