import React from "react";
import type { NextPage } from "next";

import { HeaderComponent, HomeComponent } from "../components";

import styles from "./../styles/index.module.css";

import PatternSvg from "../public/svgs/Pattern.svg";

const Home: NextPage = () => {
	return (
		<React.Fragment>
			<HeaderComponent />
			<main className={styles.main}>
				<div><PatternSvg /></div>
				<HomeComponent />
			</main>

			<footer className={styles.footer}>made with love by Maneesh</footer>
		</React.Fragment>
	);
};

export default Home;
