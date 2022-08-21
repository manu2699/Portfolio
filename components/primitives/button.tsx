import {
	MouseEventHandler,
	ReactElement,
	JSXElementConstructor,
	ReactFragment,
	ReactPortal
} from "react";
import styles from "./../../styles/primitives.module.css";

type ButtonProps = {
	onClick: MouseEventHandler<HTMLElement>;
	text:
		| string
		| ReactElement<any, string | JSXElementConstructor<any>>
		| ReactFragment
		| ReactPortal;
	icon?: ReactElement<any, string | JSXElementConstructor<any>>;
	className?: string;
};

export const Button = (props: ButtonProps) => {
	return (
		<div className={styles.primaryButton} onClick={props.onClick}>
			{props.icon}
			{props.text}
		</div>
	);
};
