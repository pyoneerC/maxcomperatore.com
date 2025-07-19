export const localFormatDate = (dateString: string, local: string = "es-ES") => {
	const date = new Date(dateString);

	const formatter = new Intl.DateTimeFormat(local, { dateStyle: "long" });

	const formattedDate = formatter.format(date);

	return formattedDate;
};
