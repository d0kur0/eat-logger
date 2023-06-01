import { GoogleAuthProvider, User, signInWithPopup, signOut as signOutGoogle } from "firebase/auth";
import { action, map } from "nanostores";

import { auth } from "../firebase";

export const $userInfo = map<User>();

type UserAuthStore = {
	isAuth: boolean;
	isTick: boolean;
};

export const $userAuth = map<UserAuthStore>({
	isAuth: false,
	isTick: false,
});

auth.onAuthStateChanged(user => {
	$userAuth.setKey("isAuth", !!user);
	$userAuth.setKey("isTick", true);
	user && $userInfo.set(user);
});

export const signIn = action($userAuth, "signIn", async () => {
	const { user } = await signInWithPopup(auth, new GoogleAuthProvider());
	$userInfo.set(user);
});

export const signOut = action($userAuth, "signOut", async () => {
	await signOutGoogle(auth);
	$userAuth.setKey("isAuth", false);
	$userInfo.set({} as User);
});
