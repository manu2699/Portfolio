import { Button } from "./button";

import styles from "./../styles/home.module.css";

import GithubIcon from "./../public/svgs/Github.svg";
import TwitterIcon from "./../public/svgs/Twitter.svg";
import LinkedinIcon from "./../public/svgs/Linkedin.svg";
import EmailIcon from "./../public/svgs/Email.svg";
import LogoIcon from "./../public/svgs/LogoLight.svg";
import StampIcon from "./../public/svgs/Stamp.svg";
import DownloadIcon from "./../public/svgs/Download.svg";

const SocialLinks = [
	{
		name: "Github",
		svgComponent: <GithubIcon />,
		onClick: () => {}
	},
	{
		name: "Twitter",
		svgComponent: <TwitterIcon />,
		onClick: () => {}
	},
	{
		name: "Linkedin",
		svgComponent: <LinkedinIcon />,
		onClick: () => {}
	},
	{
		name: "Email",
		svgComponent: <EmailIcon />,
		onClick: () => {}
	}
];

export const HomeComponent = () => {
	return (
		<div className={styles.heroContainer}>
			<div className={styles.contactSection}>
				<Button
					onClick={() => {}}
					text={"Resume"}
					icon={<DownloadIcon />}
				/>
				<div className={styles.socialIcons}>
					{SocialLinks.map((socialLink) => (
						<div
							key={`social-link-${socialLink.name}`}
							className={styles.socialIcon}
							onClick={socialLink.onClick}>
							{socialLink.svgComponent}
						</div>
					))}
				</div>
			</div>
			<div className={styles.twoLines}>
				<div className={`${styles.line}`} />
				<div className={`${styles.line} ${styles.line2}`} />
			</div>
			<div className={styles.heroText}>
				<h2>👋 Hello world</h2>
				<div className={styles.mainTitle}>
					<LogoIcon />
					<h1 className={styles.title}>Maneesh K</h1>
				</div>
				<h2>I’m a Software Engineer based in Chennai, India</h2>
			</div>
			<div className={styles.stamp}>
				<StampIcon />
			</div>
		</div>
	);
};
