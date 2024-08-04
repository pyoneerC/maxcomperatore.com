import React from 'react';
import styles from './AboutSection.module.css';

export const AboutSection = () => {
	return (
		<section className="section-wrapper">
			<h2 className={styles.title}>Sobre mí</h2>
			<div className={styles.aboutMeContainer}>
				<div className={styles.photoWrapper}>
					<img
						src="/assets/images/maximo_comperatore.avif"
						alt="Maximo Comperatore"
						className={styles.photo}
						loading="lazy"
						width={300}
						height={300}
					/>
				</div>
				<div className={styles.textWrapper}>
					<p className={styles.paragraph}>
						Conoce a <strong>Máximo Comperatore</strong>, un aspirante a desarrollador especializado en <strong>Backend</strong> y <strong>Desarrollo de Videojuegos</strong>.
					</p>
					<p className={styles.paragraph}>
						Actualmente, estoy cursando estudios en <strong>Desarrollo de Videojuegos en la Universidad de Mendoza</strong> y también soy <strong>autodidacta</strong>, buscando constantemente nuevas formas de expandir mis conocimientos y habilidades.
					</p>
					<p className={styles.paragraph}>
						Destaco por ser una persona <strong>atenta al detalle, organizada y agradable</strong>. Además, soy un trabajador perseverante y miembro colaborativo de equipo, siempre dispuesto a aprender y mejorar mis habilidades.
					</p>
					<p className={styles.paragraph}>
						Estoy interesado en involucrarme en iniciativas que me permitan <strong> ampliar mis habilidades</strong> y <strong>contribuir al crecimiento profesional de los equipos</strong> con los que colaboro. (self-motivated, eager to learn, code optimization, problem-solving)
					</p>
				</div>
			</div>
		</section>
	);
};
