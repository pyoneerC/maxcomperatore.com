import { socialMediaLinks } from "~/data/links";

import styles from "./Footer404.module.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import LinkedInIcon from "~/components/Svg/LinkedInIcon";
import GithubIcon from "~/components/Svg/GithubIcon";
import EmailIcon2 from "~/components/Svg/EmailIcon2";
import { Link } from "~/components/Ui/Link";



const iconComponents: any = {
	LinkedInIcon : < LinkedInIcon />,
	GithubIcon : < GithubIcon />,
	EmailIcon : < EmailIcon2 />,
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
