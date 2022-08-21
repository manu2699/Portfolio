import { Title } from "./primitives/title";

import styles from "./../styles/about.module.css";

import ReactIcon from "./../public/svgs/React.svg";

const KnownStack = [
	{
		name: "React"
		// svgComponent: (
		// 	// <img src={require("./../public/svgs/React.svg")} alt='React' />
		// )
	}
];

export const AboutComponent = () => {
	return (
		<div className={"page"}>
			<div className={styles.aboutContainer}>
				<Title text={"About me"} index={"01"} />
				<p>
					Hello, Im Maneeesh, a software developer based in Chennai,
					Tamil Nadu. I love building softwares using web stack. My
					current role kinda deeply aligned with frontend part thus i
					work with React Javascript Typescript Webpacks on Daily
					basis I have also worked on Backend stuffs like Node Express
					Mongo SQL Redis Sockets.io etc.... for my personal project
					And i do occasionaly does Ui Design 😅 with Figma, Adobe Xd,
				</p>
			</div>
		</div>
	);
};
