import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const styleCenter = { display: "flex", justifyContent: "center" };

const intervalStart = new Date(2020, 4, 22, 0, 0, 0);

const startingInterval = Math.floor(
	(Number(new Date()) - Number(intervalStart)) / 1000
);

const App = () => {
	const [intervalSeconds, setIntervalSeconds] = useState(0);

	const [timerRunning, setTimerRunning] = useState(false);

	const seconds = intervalSeconds % 60;

	const minutes = Math.floor(intervalSeconds / 60) % 60;

	const hours = Math.floor(intervalSeconds / 3600) % 24;

	const days = Math.floor(intervalSeconds / 86400);

	const handleStart = () => {
		setTimerRunning(true);
		setIntervalSeconds(startingInterval);
	};

	useEffect(() => {
		const tick = () =>
			setInterval(() => {
				setIntervalSeconds(intervalSeconds + 1);
			}, 1000);
		if (timerRunning) {
			tick();
		}
	}, [intervalSeconds]);

	return (
		<div>
			<div>
				<div>
					<div style={styleCenter}>Basic Timer Since</div>
					<div style={styleCenter}>**For late night shennanagans**</div>
					<div style={styleCenter}>{intervalStart.toLocaleDateString()}</div>
					<button onClick={handleStart}>Start</button>
				</div>
			</div>
			<div>
				<div style={styleCenter}>Days</div>
				<div style={styleCenter}>{days}</div>
			</div>
			<div>
				<div style={styleCenter}>Hours</div>
				<div style={styleCenter}>{hours}</div>
			</div>
			<div>
				<div style={styleCenter}>Minutes</div>
				<div style={styleCenter}>{minutes}</div>
			</div>
			<div>
				<div style={styleCenter}>Seconds</div>
				<div style={styleCenter}>{seconds}</div>
			</div>
		</div>
	);
};

export default App;
