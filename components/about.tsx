import { Title } from "./primitives/title";

import styles from "./../styles/about.module.css";

import ReactIcon from "./../public/svgs/React.svg";
import JavascriptIcon from "./../public/svgs/Javascript.svg";
import TypescriptIcon from "./../public/svgs/Typescript.svg";
import NodeIcon from "./../public/svgs/Node.svg";
import MongoDBIcon from "./../public/svgs/Mongo.svg";
import SQLIcon from "./../public/svgs/Sql.svg";
import RedisIcon from "./../public/svgs/Redis.svg";
import WebpackIcon from "./../public/svgs/Webpack.svg";
import SocketIcon from "./../public/svgs/Socket.io.svg";
import SassIcon from "./../public/svgs/Sass.svg";
// import ExpressIcon from "./../public/svgs/Express.svg";

const KnownStack = [
	{
		name: "React",
		svgComponent: <ReactIcon />,
		description: ""
	},
	{
		name: "Javascript",
		svgComponent: <JavascriptIcon />,
		description: ""
	},
	{
		name: "Typescript",
		svgComponent: <TypescriptIcon />,
		description: ""
	},
	{
		name: "Node",
		svgComponent: <NodeIcon />,
		description: ""
	},
	{
		name: "MongoDB",
		svgComponent: <MongoDBIcon />,
		description: ""
	},
	{
		name: "SQL",
		svgComponent: <SQLIcon />,
		description: ""
	},
	{
		name: "Redis",
		svgComponent: <RedisIcon />,
		description: ""
	},
	{
		name: "Webpack",
		svgComponent: <WebpackIcon />,
		description: ""
	},
	{
		name: "Socket.io",
		svgComponent: <SocketIcon />,
		description: ""
	},
	{
		name: "Sass",
		svgComponent: <SassIcon />,
		description: ""
	}
	// {
	// 	name: "Express",
	// 	svgComponent: <ExpressIcon/>,
	// 	description: ""
	// }
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
				<div className={styles.knownStack}>
					{KnownStack.map((item, index) => (
						<div className={styles.stackItem} key={index}>
							{item.svgComponent}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
