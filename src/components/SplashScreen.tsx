import { Box, Spinner, Text } from "@hope-ui/solid";
import { useStore } from "@nanostores/solid";

import { $userAuth } from "../stores/user";

export function SplashScreen() {
	const userAuth = useStore($userAuth);

	return (
		<Box
			css={{
				transition: ".5s",
				opacity: userAuth().isTick ? 0 : 1,
				pointerEvents: userAuth().isTick ? "none" : "auto",
				position: "fixed",
				height: "calc(var(--vh) * 100)",
				width: "100%",
				top: 0,
				left: 0,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: "30px",
				flexDirection: "column",
			}}>
			<Spinner size="xl" color="tomato" />
			<Text>Загрузка...</Text>
		</Box>
	);
}
