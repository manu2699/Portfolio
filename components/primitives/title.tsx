import styles from "./../../styles/primitives.module.css";

type TitleProps = {
	text: string;
	index?: string;
	className?: string;
};

export const Title = (props: TitleProps) => {
	return (
		<span className={styles.wavyTitle}>
			{props.index && (
				<div className={styles.titleIndex}>{props.index}</div>
			)}
			{props.text}
		</span>
	);
};
