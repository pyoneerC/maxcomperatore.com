import type { CoverProject } from '~/types';
import styles from './ProjectCard.module.css';

interface Props extends CoverProject {}

export const ProjectCard: React.FC<Props> = ({ slug, imageUrl, name, description }) => {

	return (
		<article className={styles.card}>
			<figure className={styles.imageWrapper}>
				<img
					className={styles.image}
					src={imageUrl}
					alt={name}
					width={684}
					height={385}
					loading="lazy"
				/>
			</figure>
			<h3 className={styles.title}>{name}</h3>
			<p>{description}</p>
		</article>
	);
};
