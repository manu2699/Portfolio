import { ReactElement, useEffect, useState } from "react";
import { Title } from "./primitives/title";

import styles from "./../styles/works.module.css";

import NPMIcon from "./../public/svgs/Npm.svg";
import GitOulineIcon from "./../public/svgs/GitOutline.svg";
import LinkIcon from "./../public/svgs/Link.svg";

export const WorksComponent = () => {
	return (
		<div className={"page"}>
			<div className={styles.worksContainer}>
				<Title text={"Works"} index={"02"} />
				<div className={styles.worksWrapper}>
					{Works.map((work, index) => {
						if (work.type === "desktop")
							return <Desktop key={index} work={work} />;
						else return <Mobile key={index} work={work} />;
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
			<div className={styles.desktopHero}>
				{work.label}
				<div className={styles.stacksSection}>
					{work.stacksused.map(
						(stacks, index) =>
							`${stacks.name}${
								index === work.stacksused.length - 1
									? ""
									: " | "
							}`
					)}
				</div>
			</div>
			<div className={styles.desktopContent}>{work.description}</div>
			<div className={styles.linksRow}>
				{work.links.map((link, index) => {
					return (
						<div
							key={work.label + index}
							onClick={() => window.open(link.url, "_blank")}>
							{link.icon}
						</div>
					);
				})}
			</div>
		</div>
	);
};

const Mobile = ({ work }: { work: TypeWork }) => {
	const [time, setTime] = useState("");

	useEffect(function onLoad() {
		let id = setInterval(() => {
			setCurrentTime();
		}, 1000);
		setCurrentTime();
		return () => {
			clearInterval(id);
		};
	}, []);

	function setCurrentTime() {
		let now = new Date();
		setTime(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
	}

	return (
		<div className={styles.mobileContainer}>
			<div className={styles.topBar}>
				<div className={styles.notch} />
				<div className={styles.time}>{time}</div>
			</div>
			<div className={styles.mobileHero}>
				{work.label}
				<div className={styles.stacksSection}>
					{work.stacksused.map(
						(stacks, index) =>
							`${stacks.name}${
								index === work.stacksused.length - 1
									? ""
									: " | "
							}`
					)}
				</div>
			</div>
			<div className={styles.mobileContent}>{work.description}</div>
			<div className={styles.linksRow}>
				{work.links.map((link, index) => {
					return (
						<div
							key={work.label + index}
							onClick={() => window.open(link.url, "_blank")}>
							{link.icon}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export type TypeWork = {
	label: string;
	description: string;
	kind: "professional" | "personal" | "freelance";
	type: "desktop" | "mobile";
	date?: string;
	stacksused: { name: string }[];
	links: { label: string; url: string; icon?: ReactElement }[];
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
	MERN: {
		name: "MERN stack"
	},
	PWA: {
		name: "PWA"
	},
	REACT_QUERY: {
		name: "React Query"
	}
};

const Works: TypeWork[] = [
	{
		label: "Kissflow - Software Engineer",
		description:
			"Working as frontend engineer in one of the rapid dev team building Page Builder inside Lowcode saas platform, also maintain & develop opensource Js SDK for the same.",
		kind: "professional",
		type: "desktop",
		date: "2021 Feb - Present",
		stacksused: [
			TECH_STACKS.REACT,
			TECH_STACKS.JAVASCRIPT,
			TECH_STACKS.WEBPACK,
			TECH_STACKS.REACT_QUERY,
			TECH_STACKS.TYPESCRIPT
		],
		links: [
			{
				label: "Website",
				url: "https://kissflow.com/",
				icon: <LinkIcon />
			},
			{
				label: "NPM repository",
				url: "https://www.npmjs.com/package/@kissflow/lowcode-client-sdk",
				icon: <NPMIcon />
			}
		]
	},
	{
		label: "Bingo",
		description:
			"A web app to play Bingo online with your friends along with some chatting options. Loved making this application with an intent to get familiar with Sockets.io stuffed with some nostalgic games",
		kind: "personal",
		type: "desktop",
		stacksused: [
			TECH_STACKS.MERN,
			TECH_STACKS.SOCKET_IO,
			TECH_STACKS.REDIS
		],
		links: [
			{
				label: "Github repository",
				url: "https://github.com/manu2699/ChatndBingo",
				icon: <GitOulineIcon />
			},
			{
				label: "Website",
				url: "https://chatndbingo.onrender.com/",
				icon: <LinkIcon />
			}
		]
	},
	{
		label: "COVID-19 Tracker",
		description:
			"Use our Covid-19 trcker app to track covid-19 live exclusively in India, You can view district wise data in a neat visualised map, estimate the distance between you and the nearest case.",
		type: "mobile",
		kind: "personal",
		stacksused: [TECH_STACKS.REACT_NATIVE, TECH_STACKS.D3],
		links: [
			{
				label: "Github repository",
				url: "https://github.com/manu2699/Covid_19_Tracker",
				icon: <GitOulineIcon />
			},
			{
				label: "Website",
				url: "https://w3devz.vercel.app/covid19tracker.html",
				icon: <LinkIcon />
			}
		]
	},
	{
		label: "KIMS Blood Donor Club",
		description:
			"Kims Blood Donor App puts the power to save lives in your fingertips. A helpful app to request blood and find donors and organisations of your blood group instantly.",
		type: "mobile",
		kind: "freelance",
		stacksused: [
			TECH_STACKS.REACT_NATIVE,
			TECH_STACKS.EXPRESS,
			TECH_STACKS.MONGO_DB,
			TECH_STACKS.SOCKET_IO
		],
		links: [
			{
				label: "Website",
				url: "https://play.google.com/store/apps/details?id=com.bloodappv2",
				icon: <LinkIcon />
			}
		]
	},
	{
		label: "Department App",
		description:
			"A website for my department students to provide them Notes & other study related stuffs like ebook, videos. I have used my own node.js file system as a server back-end for storing the files",
		type: "desktop",
		kind: "personal",
		stacksused: [TECH_STACKS.EXPRESS, TECH_STACKS.EJS, TECH_STACKS.NODE],
		links: [
			{
				label: "Github repository",
				url: "https://github.com/manu2699/DeptSite",
				icon: <GitOulineIcon />
			},
			{
				label: "Website",
				url: "https://csevit.herokuapp.com/sem",
				icon: <LinkIcon />
			}
		]
	}
];
