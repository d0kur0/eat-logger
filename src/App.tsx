import { Button, HopeProvider } from "@hope-ui/solid";
import { NotificationsProvider } from "@hope-ui/solid";
import { useStore } from "@nanostores/solid";
import { Route, Router, Routes } from "@solidjs/router";
import { Match, Switch } from "solid-js";

import { SignIn } from "./pages/SignIn";

import { SplashScreen } from "./components/SplashScreen";

import { useHeightUnit } from "./hooks/useHeightUnit";

import { $userAuth, $userInfo, signOut } from "./stores/user";

function UserRoutes() {
	const userInfo = useStore($userInfo);

	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						Hi, {userInfo().displayName} ({userInfo().email}),{" "}
						<Button onClick={signOut} css={{ marginTop: 24 }}>
							Выйти
						</Button>
					</>
				}></Route>
		</Routes>
	);
}

function GuestRoutes() {
	return (
		<Routes>
			<Route path="/" element={<SignIn />}></Route>
		</Routes>
	);
}

function App() {
	useHeightUnit();

	const userInfo = useStore($userInfo);
	const userAuth = useStore($userAuth);

	return (
		<HopeProvider>
			<NotificationsProvider>
				<Router>
					<SplashScreen />

					{userAuth().isTick && (
						<Switch>
							<Match when={userAuth().isAuth}>
								<UserRoutes />
							</Match>
							<Match when={!userAuth().isAuth}>
								<GuestRoutes />
							</Match>
						</Switch>
					)}
				</Router>
			</NotificationsProvider>
		</HopeProvider>
	);
}

export default App;
