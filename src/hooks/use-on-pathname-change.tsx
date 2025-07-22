import { useEffect, useRef } from "react";

import { usePathname } from "next/navigation";

export const useOnPathnameChange = (callback: () => void) => {
	const pathname = usePathname();
	const callbackRef = useRef(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	useEffect(() => {
		callbackRef.current();
	}, [pathname]);
};
