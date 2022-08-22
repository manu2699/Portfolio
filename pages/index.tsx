import React from "react";
import type { NextPage } from "next";

import {
	HeaderComponent,
	HomeComponent,
	AboutComponent,
	WorksComponent
} from "../components";

import styles from "./../styles/index.module.css";

import GamepadSvg from "../public/svgs/Gamepad.svg";
import HeadsetSvg from "../public/svgs/Headset.svg";

const Home: NextPage = () => {
	return (
		<React.Fragment>
			<HeaderComponent />
			<main className={styles.main}>
				<div className={styles.bgSvg1}>
					<HeadsetSvg />
				</div>
				<div className={styles.bgSvg2}>
					<GamepadSvg />
				</div>
				<HomeComponent />
				<AboutComponent />
				<WorksComponent />
			</main>

			<footer className={styles.footer}>
				{"🎨 & <Developed />"} with 💖 by Maneesh
			</footer>
		</React.Fragment>
	);
};

export default Home;
