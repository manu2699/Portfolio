import { ReactElement } from "react";
import { Title } from "./primitives/title";

import styles from "./../styles/works.module.css";

export const WorksComponent = () => {
	return (
		<div className={"page"}>
			<div className={styles.worksContainer}>
				<Title text={"Works"} index={"02"} />
				<div className={styles.worksWrapper}>
					{Works.map((work, index) => {
						if (work.type === "desktop")
							return <Desktop work={work} />;
						else return <Desktop work={work} />;
					})}
				</div>
			</div>
		</div>
	);
};

const Desktop = ({ work }: { work: TypeWork }) => {
	return (
		<div className={styles.desktopContainer}>
			<div className={styles.menuBar}>
				<div className={styles.circle1} />
				<div className={styles.circle2} />
				<div className={styles.circle3} />
			</div>
			<div className={styles.desktopHero}>{work.label}</div>
			<div className={styles.desktopContent}>{work.description}</div>
		</div>
	);
};
export type TypeWork = {
	label: string;
	description: string;
	kind: "professional" | "personal";
	type: "desktop" | "mobile";
	date?: string;
	stacksused: { name: string }[];
	links?: { label: string; url: string; icon?: ReactElement }[];
};
const TECH_STACKS = {
	REACT: {
		name: "React"
	},
	REACT_NATIVE: {
		name: "React Native"
	},
	JAVASCRIPT: {
		name: "Javascript"
	},
	TYPESCRIPT: {
		name: "Typescript"
	},
	NODE: {
		name: "Node"
	},
	MONGO_DB: {
		name: "MongoDB"
	},
	SQL: {
		name: "SQL"
	},
	REDIS: {
		name: "Redis"
	},
	WEBPACK: {
		name: "Webpack"
	},
	SOCKET_IO: {
		name: "Socket.io"
	},
	SASS: {
		name: "Sass"
	},
	D3: {
		name: "D3.js"
	},
	EXPRESS: {
		name: "Express"
	},
	EJS: {
		name: "EJS"
	},
	GCP: {
		name: "GCP"
	}
};

const Works: TypeWork[] = [
	{
		label: "Kissflow - Software Engineer",
		description: "Worked in building a lowcode saas platform.",
		kind: "professional",
		type: "desktop",
		date: "2021 Feb - Present",
		stacksused: [
			TECH_STACKS.REACT,
			TECH_STACKS.JAVASCRIPT,
			TECH_STACKS.TYPESCRIPT,
			TECH_STACKS.WEBPACK,
			TECH_STACKS.GCP
		]
	},
	{
		label: "Autometry - Backend Engineer",
		description: "Worked in Building plan approval for a startup",
		kind: "professional",
		type: "desktop",
		date: "2020 Sep - 2021 Jan",
		stacksused: [
			TECH_STACKS.REACT,
			TECH_STACKS.NODE,
			TECH_STACKS.MONGO_DB,
			TECH_STACKS.EXPRESS
		]
	},
	{
		label: "Bingo",
		description:
			"A web app to play Bingo online with your friends along with some chatting options. Loved making this application with an intent to get familiar with Sockets.io stuffed with some nostalgic games",
		kind: "personal",
		type: "desktop",
		stacksused: [
			TECH_STACKS.REACT,
			TECH_STACKS.NODE,
			TECH_STACKS.SOCKET_IO,
			TECH_STACKS.EXPRESS
		]
	},
	{
		label: "COVID-19 Tracker",
		description:
			"Use our Covid-19 trcker app to track covid-19 live exclusively in India, You can view district wise data in a neat visualised map, estimate the distance between you and the nearest case.",
		type: "mobile",
		kind: "personal",
		stacksused: [TECH_STACKS.REACT_NATIVE, TECH_STACKS.NODE]
	}
	// {
	// 	label: "KBDC",
	// }
];
