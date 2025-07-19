

import "@fortawesome/fontawesome-free/css/all.min.css";
import { ReactElement } from "react";

import GithubIcon from "~/components/Svg/GithubIcon";
import LinkedInIcon from "~/components/Svg/LinkedInIcon";
import { Link } from "~/components/Ui/Link";
import { socialMediaLinks, IconKey } from "~/data/links";


import styles from "./Footer404.module.css";


const iconComponents: Record<IconKey, ReactElement> = {
	LinkedInIcon : < LinkedInIcon />,
	GithubIcon : < GithubIcon />,
};

export const Footer404 = () => {

	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.linksWrapper}>
					{socialMediaLinks.map(({ id, url, label, icon, className }) => (
						<Link key={id} className={`${styles.link} ${styles[className]}`} href={url} target="_blank">
							<span className={styles.icon}>
							{iconComponents[icon]}
							</span>
							{label}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
};
