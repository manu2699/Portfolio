import React from "react";
import type { NextPage } from "next";

import {
	HeaderComponent,
	HomeComponent,
	AboutComponent,
	WorksComponent,
	BGOverlayComponent
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
				{/* <div className={styles.rotatingDiv} /> */}
				<HomeComponent />
				<AboutComponent />
				<WorksComponent />
				<BGOverlayComponent />
			</main>

			<footer className={styles.footer}>
				{"🎨 & <Developed />"} with 💖 in Next.js 
				by Maneesh
			</footer>
		</React.Fragment>
	);
};

export default Home;
