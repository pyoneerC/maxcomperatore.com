import { socialMediaLinks } from "~/data/links";
import { Link } from "~/components/Ui/Link";

import styles from "./Footer404.module.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import EmailIcon2 from "~/components/Svg/EmailIcon2";
import GithubIcon from "~/components/Svg/GithubIcon";
import ItchioIcon from "~/components/Svg/ItchioIcon";
import LinkedInIcon from "~/components/Svg/LinkedInIcon";
import YoutubeIcon from "~/components/Svg/YoutubeIcon";

const iconComponents: any = {
	LinkedInIcon : < LinkedInIcon />,
	GithubIcon : < GithubIcon />,
	EmailIcon : < EmailIcon2 />,
	YoutubeIcon : < YoutubeIcon />,
	ItchioIcon : < ItchioIcon />,
};

export const Footer404 = () => {

	return (
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<div className={styles.linksWrapper}>
					{socialMediaLinks.map(({ url, label, icon, className }) => (
						<Link key={url} className={`${styles.link} ${styles[className]}`} href={url} target="_blank">
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
