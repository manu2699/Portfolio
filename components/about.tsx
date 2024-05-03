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
					{`👋🏻 Hey there, I'm Maneesh, a software developer, Presently, I'm
					employed as a frontend engineer at Kissflow. I thrive on
					crafting software solutions using the web stack, and I
					dabble in backend development through personal/hobby
					projects. Oh, and you might catch me playing around with
					UI/UX design in Figma now and then! 😅`}
				</p>
				<div>
					<p>I have worked on following technologies</p>
					<div className={styles.knownStack}>
						{KnownStack.map((item, index) => (
							<div className={styles.stackItem} key={index}>
								{item.svgComponent}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
