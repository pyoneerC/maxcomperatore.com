import React from "react";

import styles from "./TimeDifference.module.css";

const TimeDifference = () => {

	const localTimezoneOffset = new Date().getTimezoneOffset();

	const timeDifference = (localTimezoneOffset - 180) / 60;

	let message;
	if (timeDifference === 0) {
		message = "Estamos en el mismo huso horario.";
	} else if (timeDifference > 0) {
		message = `${Math.abs(timeDifference)} horas detrás de ti.`;
	} else {
		message = `${Math.abs(timeDifference)} horas adelante de ti.`;
	}

	return (
		<div className={styles.timeDifference}>
			{message}
		</div>
	);
};

export default TimeDifference;
