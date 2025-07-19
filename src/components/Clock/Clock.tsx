"use client";

import React, { useState, useEffect } from "react";

import styles from "./Clock.module.css";

// @ts-expect-error:
const Clock = ({ className }) => {
 	 const [timeString, setTimeString] = useState<string>("");

	   useEffect(() => {
    const update = () => {
      const now = new Date();
      const local = new Date(
        now.toLocaleString("en-US", { timeZone: "America/Argentina/Cordoba" })
      );
      const options: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit", hour12: false };
      setTimeString(local.toLocaleTimeString("es-AR", options));
    };

    update();
    const sec = new Date().getSeconds();
    const timeout = setTimeout(() => {
      update();
      const interval = setInterval(update, 60 * 1000);
      return () => clearInterval(interval);
    }, (60 - sec) * 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (!timeString) return null;

	return (
		<span className={`${styles.clock} ${className}`}>
			<svg style={{marginRight: "5px", fontSize: "15px"}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
					 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
					 className="icon icon-tabler icons-tabler-outline icon-tabler-clock"><path stroke="none" d="M0 0h24v24H0z"
																																										 fill="none" /><path
				d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" /></svg>
			{timeString} (GMT-3)
        </span>
	);
};

export default Clock;
